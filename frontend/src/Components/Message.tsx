import { ProfileType } from "@/dungeonFinderTypes.ts";
import { useAuth } from "@/Services/Auth.tsx";
import { MessageService } from "@/Services/MessageService.tsx";
import { useContext, useEffect, useState } from "react";

export const Message = () => {
  const [currentProfile, setCurrentProfile] = useState<ProfileType>();
  const auth = useAuth();
  
  const onMessageButtonClick = () => {
    MessageService.send(auth.userId, currentProfile.id, messageToSend)
      .catch(err => {
        console.error(err);
      });
  };
};
