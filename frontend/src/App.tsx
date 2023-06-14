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

