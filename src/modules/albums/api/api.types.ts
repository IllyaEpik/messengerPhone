export interface IUpdateAlbum{
    title?:string
    year?:number
    topic?:string
    token:string
    id:number
    image?:string
}
export interface ICreateAlbum{
    title:string
    year:number
    topic:string
    token:string
}
export interface IDeleteAlbum{
    id:number
    token:string
}
export interface Album{
    title:string
    year:number
    topic:{
        name:string
    }
    photos:Photos[]
    id:number
}
export interface Photos{
    crackedPhoto: string,
    photo: string
}