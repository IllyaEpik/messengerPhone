import { IProfile } from "@/shared/types/user";

export interface gottenFriends {
    friends: IProfile[],
    friendRequests: IProfile[],
    friendsRecommneds: IProfile[]
}