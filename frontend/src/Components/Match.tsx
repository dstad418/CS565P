
import { Profile } from "@/Components/Profile.tsx";
import { ProfileType } from "@/dungeonFinderTypes.ts";
import { useAuth } from "@/Services/Auth.tsx";
import { MatchService } from "@/Services/MatchService.tsx";
import { PassService } from "@/Services/PassService.tsx";
import { MessageService} from "@/Services/MessageService.tsx";
import { useContext, useEffect, useState } from "react";

export const Match = () => {
	const [currentProfile, setCurrentProfile] = useState<ProfileType>();

	const auth = useAuth();

	const onLikeButtonClick = () => {
		MatchService.send(auth.userId, currentProfile.id)
			.catch(err => {
				console.error(err);
			});
	};

	const onPassButtonClick = () => {
		PassService.send(auth.userId, currentProfile.id)
			.catch(err => {
				console.error(err);
			});
	};
	
	const onMessageButtonClick = () => {
		MessageService.send(auth.userId, currentProfile.id, message)
			.catch(err => {
				console.error(err);
			});
	};


const profile = (
		<Profile
			{...currentProfile}
			onLikeButtonClick={onLikeButtonClick}
			onPassButtonClick={onPassButtonClick}
			onMessageButtonClick={onMessageButtonClick}
		/>
	);

	return (
		<>
			{profile}
		</>
	);
};
