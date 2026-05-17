// export interface PostData {
//     title: string;
//     topic: string;
//     content: string;
//     link: string;
//     images: string[];

import { IPost } from "../api/api.types";

// }
export interface IPostProps{
  post:IPost
  isMine?:boolean
}