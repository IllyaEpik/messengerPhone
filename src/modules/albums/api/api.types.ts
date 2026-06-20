export interface IUpdateAlbum {
	title?: string;
	year?: number;
	topic?: string;
	token: string;
	id: number;
	image?: string;
}
export interface ICreateAlbum {
	title: string;
	year: number;
	topic: string;
	token: string;
}
export interface IDeleteAlbum {
	id: number;
	token: string;
}
export interface Album {
    id: number;
    is_shown: boolean;
    created_at: Date;
    name: string;
    theme?: string;
    year?: number;
    is_default: boolean;
	albumImage: {
		id: bigint;
		image: string;
		is_shown: boolean;
		created_at: Date;
		album_id: bigint;
	}[];
	
}
export interface Photos {
	crackedPhoto: string;
	photo: string;
}