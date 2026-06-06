export type Contact = {
    id: string;
    name: string;
    image: string;
};

export interface IChat {
    id: number
    chatName: string
    avatar: string 
    isGroup: boolean
    time: Date | string
    message: string
}
export interface IChatContactDetailed {
    id: number
    chatName: string
    avatar: string 
    isGroup: boolean
    time: Date | string
    message: string
    isAdmin: boolean
    users: {
        username: string
        id: number
    }[]
}
export type IMessage = {
    _count: {
        readers: number;
    };
    readers: {
        id: number;
        message_id: number;
        user_id: number;
    }[];
    sender: {
        id: number;
        password: string;
        last_login: Date | null;
        is_superuser: boolean;
        first_name: string;
        last_name: string;
        is_staff: boolean;
        is_active: boolean;
        date_joined: Date;
        username: string | null;
        email: string;
    } | null;
    messageImage: {
        id: number;
        message_id: number;
        image: string;
    }[];
} & {
    id: number;
    chatId: number;
    text: string | null;
    created_at: Date;
    senderId: number | null;
}
export interface IChatCreate {
    users: number[];
    Isgroup?: boolean
    avatar?: string
    name?: string
}
export interface IChatUpdate {
    id: number
    name?: string
    users: number[];
    avatar?: string
    Isgroup?: boolean
    token: string
}
export interface IChatGetPayload {
    userId: number;
    token: string;
}
export interface IChatContactGetPayload {
    friendId: number;
    token: string;
}
export interface IMessageGetPayload {
    chatId: number;
    token: string;
}
export interface ICreateMessagePayload {
    chatId: number;
    text: string;
}
export interface IChatCreate {
    users: number[];
    Isgroup?: boolean
    avatar?: string
    name?: string
    token: string
}
export interface IGetCurrentChat {
    chatId: number,
    userId: number
    token: string
}