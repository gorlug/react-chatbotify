import ChatBot from "./components/ChatBot";
import {getDefaultBotOptions} from "./services/BotOptionsService";
import {BotOptionsContext} from "./context/BotOptionsContext";
import {MessagesContext} from "./context/MessagesContext";
import {PathsContext} from "./context/PathsContext";
import {Block} from "./types/Block";
import {Flow} from "./types/Flow";
import {Message} from "./types/Message";
import {ChatHistoryLoader, MessageHandler, Options} from "./types/Options";
import {Params} from "./types/Params";
import UserOptions from "./components/UserOptions/UserOptions";

/**
 * Exports for developer use.
 */
export {
	getDefaultBotOptions,
	BotOptionsContext,
	MessagesContext,
	PathsContext,
	UserOptions
};

export type {
	Block,
	Flow,
	Message,
	Options,
	MessageHandler,
	ChatHistoryLoader,
	Params,
};

export default ChatBot;
