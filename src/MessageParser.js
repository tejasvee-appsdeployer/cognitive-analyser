import React, { Component } from "react";

export default class MessageParser extends Component {
	constructor(actionProvider) {
		super();
		this.actionProvider = actionProvider;
	}
	parse(message) {
		const lowerCaseMessage = message.toLowerCase();
		if (lowerCaseMessage.includes("hello")) {
			this.actionProvider.greet();
		}
	}
	render() {
		return <div>MessageParser</div>;
	}
}
