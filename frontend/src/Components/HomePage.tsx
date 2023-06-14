import { ModuleSection } from "./ModuleSection.tsx";
import { Footer } from "./Footer.tsx";

/**
 * Homepage that displays ModuleSection and Footer.
 * @constructor
 */
export const Home = () => {
	return (
		<div className={"homepage-background"}>
			<ModuleSection />
			<Footer />
		</div>
	);
};
