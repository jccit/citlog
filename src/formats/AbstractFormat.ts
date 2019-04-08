import IMessage from "../interfaces/Message";

abstract class AbstractFormat {
    public abstract formatMessage(message: IMessage): string;
}

export default AbstractFormat;
