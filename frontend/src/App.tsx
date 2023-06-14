
import { DungeonFinderRouter } from "@/dungeonFinderRouter.tsx";
import { AuthProvider } from "@/Services/Auth.tsx";
import { BrowserRouter } from "react-router-dom";

/**
 * The main entry point of the application.
 * Renders the root component and sets up the routing.
 */
export function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="App dungeonFinder">
					<DungeonFinderRouter />
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;

/*
 - Goal - creating a login page that takes a users email/password, sends them to the backend, and waits
 on a JWT response
 - Store the received token for some amount of time - we'll put this into local storage
 - Be able to limit the pages that a user can navigate to based on whteher they have a token or not
 - If a user tries to access some page that he doesn't have access to (because he's not logged in) we want
 to force him to the login page
 - If we DO have a token, automatically supply it on all of our requests
 - Ensure that as much of this is automated as possible for frontend dev convenience
 */
