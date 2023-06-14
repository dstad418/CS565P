import { useAuth } from "@/Services/Auth.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

/**
 * Await removes the auth key for the user.
 */
export function Logout() {
	const auth = useAuth();
	const navigate = useNavigate();
	const FBauth = getAuth();

	useEffect(() => {
		async function processLogout() {
			if (auth) {
				await auth.handleLogout();
				// Sending back to home page.
				navigate("/");
			} else {
				console.error("Authorization is missing somehow");
				navigate("/");
			}
		}

		processLogout().then(() => {
			console.log("Logout completed successfully");
		});
	}, [auth, navigate]);

	return null;
}
