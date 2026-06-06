
// export interface friend{ 
//     avatar: string;
//     username: string;
//     name: string;
// }

import { IProfile } from "@/shared/types/user";
import { friendMenuVariant } from "./friendMenu";

export interface friendsSectionProps {
    title: string;
    primaryAction: string;
    friends: IProfile[]
    variant: friendMenuVariant
    noFriendsMessage: string
    setVariant: (variant: friendMenuVariant) => void
    isSelected: boolean
}