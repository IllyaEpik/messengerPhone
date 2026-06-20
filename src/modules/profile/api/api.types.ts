export interface IUpdateProfile {
	lastName?: string;
	firstName?: string;
	token: string;
	avatar?: string;
	pseudonym?: string;
	username?: string;
	showNickname?: boolean;
	showElectronicSignature?: boolean;
	electronicSignature?: string;
}
