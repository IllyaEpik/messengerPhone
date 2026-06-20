export interface ILogin {
	email: string;
	password: string;
}
export interface IProfile {
	id: number;
	pseudonym: string;
	userId: number;
	firstName: string | null;
	lastName: string | null;
	avatar: string;

	showNickname: boolean;
	showElectronicSignature: boolean;
	signature: string | null;
	user?: {
		username: string;
	};
}
export interface IAvatar {
	avatar: string;
	crackedAvatar: string;
}
// export interface IUser {
// 	username: string;
// 	email: string;
// 	avatar?: string;
// 	id: number;
// 	dateOfBirth?: Date;
// 	addedAt: Date;
// 	confirmedUser: false;
// 	profile?: IProfile;
// }
export interface IUser {
    id: number;
    last_login?: Date | null;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    username?: string;
    email: string;
	profile?: {
        id: number;
        userId: number;
        birth_date?: Date;
        signature?: string;
        avatar?: string;
        pseudonym?: string;
        is_text_signature: boolean;
        is_image_signature: boolean;
    }
}
