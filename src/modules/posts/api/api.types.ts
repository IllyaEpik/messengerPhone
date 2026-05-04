import { IUser } from "@/shared/types/user"

export interface IImage {
    image: string
}
export interface ITag {
    tag: string
}
export interface ILink {
    link: string
}

export interface IPost {
    id: number,
    creator: IUser
    title: string,
    content: string,
    topic: string | null
    creatorId: number,
    tags: ITag[],
    images: IImage[],
    links: ILink[],
    _count: {
        likes: number,
        views: number,
        loves: number
    }
}
export interface ICreatePost {
    title: string
    content: string
    token: string
    topic?: string
    tags?: string[]
    links?: string[]
    images?: string[]
}
export interface IGetPosts{ 
    token:string,
    isMine: boolean,
    skip?: number
}