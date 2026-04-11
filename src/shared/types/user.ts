export interface ILogin{
    email: string,
    password: string
}

export interface IUser{
    email: string
    password: string
    username: string
    name: string;
    surname: string;
    avatar: string;
    id: number;
    lastSeenAt: Date;
}