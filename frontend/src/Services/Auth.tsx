import { httpClient } from "@/Services/HttpClient.tsx";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAIytDQvnkzx2Yg5rzNgGxrgj4F8bsqmPk",
	authDomain: "dungeonf-85117.firebaseapp.com",
	projectId: "dungeonf-85117",
	storageBucket: "dungeonf-85117.appspot.com",
	messagingSenderId: "220315831378",
	appId: "1:220315831378:web:61271c4c49a6059cc2638b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**
 * The authentication context used to provide authentication-related data and functions.
 */
export const AuthContext = createContext<AuthContextProps | null>(null);


/**
 * The definitiono of the authentication context.
 */
export type AuthContextProps = {
	token: string | null;
	userId: number;
	handleLogin: (email: string, password: string) => Promise<boolean>;
	handleLogout: () => void;
};

const updateAxios = async (token: string) => {
	httpClient.interceptors.request.use(
		async (config) => {
			// @ts-ignore
			config.headers = {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			};

			return config;
		},
		(error) => {
			console.error("REJECTED TOKEN PROMISE");
			Promise.reject(error);
		}
	);
};

/**
 * Retrieves the token from local storage.
 * @returns The token string or null if not found.
 */
const initialToken = getTokenFromStorage();
let initialUserId;

if (!(initialToken == null)) {
	console.log("Updating axios with token: ", initialToken);
	await updateAxios(initialToken);
	initialUserId = getUserIdFromToken(initialToken);
}

export const AuthProvider = ({ children }: any) => {
	const navigate = useNavigate();

	const [token, setToken] = useState(initialToken);
	const [userId, setUserId] = useState(initialUserId);

	const handleLogin = async (email: string, password: string) => {
		console.log("In handleLogin with ", email, password);

		try {
			const thetoken = await getLoginTokenFromServer(email, password);
			saveToken(thetoken);
			await updateAxios(thetoken);
			// Hooray we're logged in and our token is saved everywhere!
			navigate(-1);
			return true;
		} catch (err) {
			console.error("Failed to handle login: ", err);
			navigate("/login");
			return false;
		}
	};

	const handleLogout = () => {
		setToken(null);
		localStorage.removeItem("token");
	};

	const saveToken = (thetoken) => {
		console.log(thetoken);
		setToken(thetoken);
		setUserId(getUserIdFromToken(thetoken));
		localStorage.setItem("token", JSON.stringify(thetoken));
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				userId,
				handleLogin,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

function getTokenFromStorage() {
	const tokenString = localStorage.getItem("token");
	console.log(tokenString);
	if (typeof tokenString === "undefined" || tokenString === null) {
		console.log("No token found");
		return null;
	}
	console.log("Token found: ", tokenString);
	return tokenString;
}


/**
 * Retrieves the login token from the server.
 * @param email The user's email.
 * @param password The user's password.
 * @returns The login token.
 */
export async function getLoginTokenFromServer(email, password) {
	console.log("In get login token from server with ", email, password);

	const login_result = await httpClient.post("/login", { email, password });
	return login_result.data.token;
}

/**
 * Retrieves the payload from the token.
 * @param token The token string.
 * @returns The token payload.
 */
export function getPayloadFromToken(token: string) {
	const base64Url = token.split(".")[1];
	if (base64Url == null) {
		console.log("Yikes your token has no payload, how did that happen?");
	}

	// Mostly ignore me, taken from JWT docs, this extracts the text payload from our token
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	const payload = JSON.parse(jsonPayload);
	console.log(payload);
	return payload;
}

/**
 * Retrieves the user ID from the token.
 * @param token The token string.
 * @returns The user ID.
 */
function getUserIdFromToken(token: string) {
	const payload = getPayloadFromToken(token);
	return payload.userId;
}
