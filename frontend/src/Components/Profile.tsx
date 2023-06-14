import { ProfileType } from "@/dungeonFinderTypes.ts";

export type ProfileProps = ProfileType & {
	onLikeButtonClick: () => void;
	onPassButtonClick: () => void;
	onMessageButtonClick: () => void;
};

export function Profile(props: ProfileProps) {
	const { username, campaign, onLikeButtonClick, onPassButtonClick, onMessageButtonClick } = props;

	return (
		<div className={"flex"}>
			<h2 className={"text-4xl"}>{username}</h2>
			<div className={"text-2xl"}>Campaign: {campaign}</div>
			<div className={"space-x-8"}>
				<button className="btn btn-circle" onClick={onPassButtonClick}>
					Pass
				</button>
				<button className="btn btn-circle" onClick={onLikeButtonClick}>
					Like
				</button>
				<button className="btn btn-circle" onClick={onMessageButtonClick}>
					Like
				</button>
			</div>
		</div>
	);
}
