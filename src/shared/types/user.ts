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
export interface IUser {
	username: string;
	email: string;
	avatar?: string;
	id: number;
	dateOfBirth?: Date;
	addedAt: Date;
	confirmedUser: false;
	profile?: IProfile;
}
