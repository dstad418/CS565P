
use auth_rs::models::{LoggedInUser, User};
use auth_rs::{AppError, Claims, JWTKeys};
use axum::http::StatusCode;
use axum::{Extension, Json};
use chrono::{DateTime, Utc};
use jsonwebtoken::{encode, Header};

use sqlx::PgPool;
use tracing::log::{error, info};

#[axum_macros::debug_handler]
pub async fn create_user(
    // Collect our database connection pool from establish_connection()
    Extension(conn): Extension<PgPool>,
    // This is similar to IPostUserRequest typing in Fastify and deserializes the request into a
    // 'credentials' object
    Json(credentials): Json<User>,
) -> Result<StatusCode, AppError> {
    // Try creating a new user
    let res = try_create_user(&conn, &credentials).await?;
    // Return our result if it worked
    Ok(res)
}

async fn try_create_user(conn: &PgPool, credentials: &User) -> Result<StatusCode, anyhow::Error> {
    if credentials.email.is_empty() {
        anyhow::bail!("Invalid email!")
    }

    if credentials.password.is_empty() {
        anyhow::bail!("Invalid password!")
    }

    //let current_time = DateTime::;
    let current_time = Utc::now().naive_utc();

    let hashed_pw = bcrypt::hash(&credentials.password, 10).unwrap();

    // Query the database to create the new user
    let new_user = sqlx::query("INSERT INTO users (name, email, password, pet_type, img_uri, created_at, updated_at, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)")
        .bind(&credentials.email) // $1
        .bind(&credentials.email) // $2
        .bind(&hashed_pw) // $3
        .bind("dog".to_string())
        .bind("dog.jpg".to_string())
        .bind(current_time)
        .bind(current_time)
        .bind("User".to_string())
        .execute(conn)
        .await?;

    // If we affected 0 rows, clearly we didn't add one
    return if new_user.rows_affected() < 1 {
        anyhow::bail!("Unable to create new user account!")
    } else {
        Ok(StatusCode::CREATED)
    };
}

#[axum_macros::debug_handler]
pub async fn login(
    Extension(conn): Extension<PgPool>,
    Json(credentials): Json<User>,
) -> Result<(StatusCode, Json<LoggedInUser>), AppError> {
    let res = try_login(&conn, &credentials).await?;
    Ok(res)
}

async fn try_login(
    conn: &PgPool,
    credentials: &User,
) -> Result<(StatusCode, Json<LoggedInUser>), anyhow::Error> {
    if credentials.email.is_empty() {
        anyhow::bail!("Invalid email!")
    }

    if credentials.password.is_empty() {
        anyhow::bail!("Invalid password!")
    }

    // Note here we're supplying User as the type of response we're expecting from this query.
    // SQLx will connect to our real database AT COMPILE TIME to verify this is safe!  Amazing!
    let user = sqlx::query_as::<_, User>("SELECT email, password from users where users.email=$1")
        .bind(&credentials.email)
        .fetch_optional(conn)
        .await?;

    // if the user exists
    if let Some(user) = user {
        //check pw
        if let Ok(_check) = bcrypt::verify(&credentials.password, &user.password) {
            info!("Bcrypt verified properly!");
        } else {
            error!(
                "Bcrypt verify failed between {} and {} ",
                &credentials.password, &user.password
            );
        }

        // Claims are our "payload" from fastify
        let claims = Claims {
            email: credentials.email.to_owned(),
        };
        // This is the piece we had a lib handle for us in Fastify
        let keys = JWTKeys::new();
        // Actually encrypt the token from raw parts
        let token = encode(&Header::default(), &claims, &keys.encoding)?;
        // Create our proper response type from the token
        let new_user = LoggedInUser { token };

        // Send response, including our freshly generated and encrypted token
        Ok((StatusCode::OK, Json(new_user)))
    } else {
        // user does not exist
        anyhow::bail!("User does not exist!")
    }
}



#[axum_macros::debug_handler] pub async fn create_user(     // Collect our database connection pool from establish_connection()     Extension(conn): Extension<PgPool>,     // This will now accept multipart form data     mut payload: Multipart, ) -> Result<StatusCode, AppError> {     let mut credentials: Option<User> = None;     let mut image_data: Option<Vec<u8>> = None;      // Process each field     while let Ok(Some(mut field)) = payload.try_next().await {         let name = field.name().unwrap().to_string();         match name.as_str() {             // Collect the user details in JSON format             "user" => {                 let mut buffer = Vec::new();                 while let Some(chunk) = field.next().await {                     buffer.extend_from_slice(&chunk.unwrap());                 }                 let user: User = serde_json::from_slice(&buffer).unwrap();                 credentials = Some(user);             }             // Collect the image data             "image" => {                 let mut buffer = Vec::new();                 while let Some(chunk) = field.next().await {                     buffer.extend_from_slice(&chunk.unwrap());                 }                 image_data = Some(buffer);             }             _ => {}         }     }      if credentials.is_none() {         return Err(AppError::new("Invalid request: missing user credentials."));     }      let res = try_create_user(&conn, &credentials.unwrap()).await?;     Ok(res) }`
