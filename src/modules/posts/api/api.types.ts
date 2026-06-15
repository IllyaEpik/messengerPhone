import { IUser } from "@/shared/types/user";

export interface IImage {
	image: string;
}
export interface ITag {
	post_app_tag: {name: string};
}
export interface ILink {
	link: string;
}

export interface IPost {
	id: number;
	author: IUser;
	title: string;
	content: string;
	topic: string | null;
	creatorId: number;
	tags: ITag[];
	images: IImage[];
	links: ILink[];
	_count: {
		likes: number;
		views: number;
		hearts: number;
	};
}
export interface ICreatePost {
	title: string;
	content: string;
	token: string;
	topic?: string;
	tags?: string[];
	links?: string[];
	images?: string[];
}
export interface IGetPosts {
	token: string;
	isMine: boolean;
	skip?: number;
}
