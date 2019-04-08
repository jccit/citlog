import Message from "../interfaces/Message";

abstract class AbstractFormat {
    public abstract formatMessage(message: Message): string
}

export default AbstractFormat;