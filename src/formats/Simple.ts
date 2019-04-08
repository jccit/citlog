import AbstractFormat from "./AbstractFormat";
import Message from "../interfaces/Message";

class Simple extends AbstractFormat {
    public formatMessage(message: Message): string {
        return `[${message.module}] ${message.text}`;
    }
}

export default Simple;