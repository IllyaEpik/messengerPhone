import { IProfile } from "@/shared/types/user";
import { friendMenuVariant } from "./friendMenu";

export interface IProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	userId: number;
	variant: friendMenuVariant;
	delete?: (userid: number) => void;
	friend?: IProfile[];
}
