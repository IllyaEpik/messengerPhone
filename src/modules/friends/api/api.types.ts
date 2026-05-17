import { IProfile } from "@/shared/types/user";

export interface gottenFriends {
    friends: IProfile[],
    friendRequests: IProfile[],
    friendsRecommneds: IProfile[]
}
export interface friendInfoOutput {
    readers: number
    frieds:number
    posts:number
    username: string
    pseudonym: string
    avatar: string
    albums:{
        photos:string[]
        theme:string
        name:string
        year:number
    }[]
}
export interface pagination {
    recommends: number
    requests: number
}