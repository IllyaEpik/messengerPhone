
// export interface friend{ 
//     avatar: string;
//     username: string;
//     name: string;
// }

import { IProfile } from "@/shared/types/user";

export interface friendsSectionProps {
    title: string;
    primaryAction: string;
    friends: IProfile[]
}