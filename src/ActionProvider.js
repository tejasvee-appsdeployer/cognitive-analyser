import React, { Component } from "react";

export default class ActionProvider extends Component {
	constructor(createChatBotMessage, setStateFunc) {
		super();
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}
	greet() {
		const greetingMessage = this.createChatBotMessage("Hi, friend");
		this.updateChatbotState(greetingMessage);
	}
	updateChatbotState(message) {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	}
	render() {
		return <div>ActionProvider</div>;
	}
}
