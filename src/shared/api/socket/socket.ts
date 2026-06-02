// import { WS_SERVER_URL } from "@shared/constants";
const WS_SERVER_URL = "http://127.0.0.1:8000";
import { io, Socket } from "socket.io-client";
import { ClientEvents, ServerEvents } from "./contracts";
export const socket: Socket<ServerEvents, ClientEvents> = io(WS_SERVER_URL, {
    autoConnect: false,
});
