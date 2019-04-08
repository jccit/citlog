import IMessage from "../interfaces/Message";
import AbstractFormat from "./AbstractFormat";

class Simple extends AbstractFormat {
    public formatMessage(message: IMessage): string {
        return `[${message.module}] ${message.text}`;
    }
}

export default Simple;
