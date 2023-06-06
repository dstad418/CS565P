import { ProfileType } from "@/dungeonFinderTypes.ts";
import { useEffect } from "react";
import "@css/dungeonFinderStyles.css";

export type ProfileProps = ProfileType & {
	onLikeButtonClick: () => void;
	onPassButtonClick: () => void;
	onMessageButtonClick:() => void;
};

export function Profile(props: ProfileProps) {
	const { username, campaign, onLikeButtonClick, onPassButtonClick, onMessageButtonClick} = props;

	return (
		<div className={"flex flex-col items-center rounded-box bg-slate-700 w-4/5 mx-auto"}>
			<h2 className={"text-4xl text-blue-600"}>{username}</h2>
			<div className={"text-2xl text-blue-300"}>Campaign: {campaign}</div>
			<div className={"space-x-8 my-1"}>
				<button className="btn btn-circle" onClick={onPassButtonClick}>Pass</button>
				<button className="btn btn-circle" onClick={onLikeButtonClick}>Like</button>
				<button className="btn btn-circle" onClick={onMessageButtonClick}>Like</button>
			</div>
		</div>
	);
}
