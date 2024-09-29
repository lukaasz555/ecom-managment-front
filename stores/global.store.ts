import { defineStore } from 'pinia';

enum MessageTypeEnum {
	ERROR = 'error',
	SUCCESS = 'success',
	INFO = 'info',
}

export class Message {
	id = Math.random().toString(36).substr(2, 9);
	text = 'Something went wrong';
	title: string | undefined = 'Error';
	type = MessageTypeEnum.ERROR;

	constructor(text: string, title: string, type = MessageTypeEnum.ERROR) {
		this.text = text;
		this.title = title;
		this.type = type;
	}
}

interface GlobalStore {
	loading: boolean;
	isError: boolean;
	messages: Message[];
}

const initState: () => GlobalStore = () => ({
	loading: false,
	isError: false,
	messages: [],
});

export const useGlobalStore = defineStore({
	id: 'globalStore',
	state: initState,
	actions: {
		addMessage(message: Message): void {
			if (this.messages.length > 3) {
				this.messages.shift();
			}
			this.messages.push(message);
			setTimeout(() => {
				this.removeMessage(message.id);
			}, 5000);
		},
		removeMessage(messageId: string): void {
			this.messages = this.messages.filter(
				(message) => message.id !== messageId
			);
		},
	},
});
