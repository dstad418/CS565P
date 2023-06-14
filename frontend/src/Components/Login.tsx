import { useAuth } from "@/Services/Auth.tsx";
import { useCallback, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Login page, almost the same as Doggr's
 */
export function Login() {
	const context = useAuth();
	const auth = getAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitFailed, setSubmitFailed] = useState(false);

	const onSubmitLogin = useCallback(async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			// If the login is successful, no need to handle the login in the Auth context.
		} catch (error) {
			console.error("Login error:", error);
			setSubmitFailed(true);
		}
	}, [email, password, context, setSubmitFailed]);

	return (
		<div className={"login-container"}>
			<div className={"login-box"}>
				<div>Login</div>
				<div>
					{submitFailed ? <p>Your password or email was incorrect! Please try again.</p> : null}
				</div>
				<div>
					<div className={"login-wrapper"}>
						<div>
							<label htmlFor={"email"}>Email Address:</label>
						</div>
						<div>
							<input
								type="text"
								id="email"
								required
								placeholder={"e-mail address"}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name={"email"}
							/>
						</div>
					</div>
					<div className={"login-wrapper"}>
						<div>
							<label htmlFor={"password"}>Password:</label>
						</div>
						<div>
							<input
								type="text"
								id="password"
								required
								placeholder={"password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name={"password"}
							/>
						</div>
					</div>
				</div>
				<div>
					<button onClick={onSubmitLogin} className={"green-button"}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
