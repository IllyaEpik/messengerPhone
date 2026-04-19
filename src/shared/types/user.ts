export interface ILogin{
    email: string,
    password: string
}
export interface IProfile{
    id: number,
    nickname: string,
    username: string,
    userId: number,
    firstName: string | null,
    lastName: string | null
    avatar: IAvatar[] | null
}
export interface IAvatar {
    avatar: string
    crackedAvatar: string
}
export interface IUser{
    email: string
    avatar?: string;
    id: number;
    // lastSeenAt: Date;
    dateOfBirth?: Date;
    addedAt: Date
    confirmedUser: false
    profile?:IProfile
}