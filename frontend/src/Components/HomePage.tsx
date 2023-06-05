import { ModuleSection } from "./ModuleSection.tsx";
import { Footer } from "./Footer.tsx";


export const Home = () => {
	return (
		<div>
			<Title />
			<Subtitle />
			<ModuleSection />
			<Footer />
		</div>
	);
};

export function Title() {
	return <h1>dungeonFinder</h1>;
}

export function Subtitle() {
	return <h3>Where your peind love(tm)</h3>;
}

