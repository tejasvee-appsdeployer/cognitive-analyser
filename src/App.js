import Chatbot from "react-chatbot-kit";
import "./App.css";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

function App() {
	return (
		<div className="App">
			<Chatbot
				config={config}
				actionProvider={ActionProvider}
				messageParser={MessageParser}
			/>
		</div>
	);
}

export default App;
