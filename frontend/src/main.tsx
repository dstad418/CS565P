import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const rootContainer: HTMLElement = document.getElementById("root") as HTMLElement;

/**
 * The BIG big. Do not touch.
 */
ReactDOM.createRoot(rootContainer).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
