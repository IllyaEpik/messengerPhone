import { IMessage, socketMessage } from "@/modules/chat/api/api.types";

interface SendMessagePayload {
	text?: string;
	chatId: number;
}
interface JoinChatPayload {
	chatId: number;
}
interface LeaveChatPayload {
	chatId: number;
}
type JoinChatCallback = (
	response:
		| {
				status: "ok";
		  }
		| {
				status: "error";
				message?: string;
		  },
) => void;
interface getUsersOnlinePayload {
	userIds: number[];
}
export type UserStatus = {
	id: number;
	status: "online" | "offline";
};
interface messageReadPayload {
	messageId: number;
}
export type UserCallback = (response: {
	onlineUserIds?: UserStatus[];
	status?: "error";
	message?: string;
}) => void;
export interface ClientEvents {
	sendMessage: (data: SendMessagePayload) => void;
	chatConnect: (data: JoinChatPayload, ack: JoinChatCallback) => void;
	leaveChat(data: LeaveChatPayload): void;
	getUsersOnline: (data: getUsersOnlinePayload, ack: UserCallback) => void;
	readMessage: (data: messageReadPayload, ack?: () => void) => void;
}
export interface ServerEvents {
	newMessage: (data: IMessage) => void;
	updateChat: (data: socketMessage) => void;
	statusUpdate: (data: UserStatus) => void;
	messageRead: (data: object) => void;
}
