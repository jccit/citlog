import LogLevel from "../enums/LogLevel";
import AbstractFormat from "../formats/AbstractFormat";
import Simple from "../formats/Simple";
import IMessage from "../interfaces/Message";
import OutputOptions from "../interfaces/OutputOptions";

abstract class AbstractOutput {

    /**
     * Stores a bit flag of log levels that should be outputted
     *
     * @protected
     * @type {LogLevel}
     */
    protected levels: LogLevel;

    /**
     * Formatter to be used before sending write request
     *
     * @private
     * @type {AbstractFormat}
     */
    private formatter: AbstractFormat;

    constructor(options = {} as OutputOptions) {
        this.levels = options.levels || LogLevel.All;
        this.formatter = options.format || new Simple();
    }

    /**
     * Public function for triggering a write.
     * Will make a call to shouldLog before sending the write request.
     *
     * @param {IMessage} message
     * @returns {void}
     */
    public writeLine(message: IMessage): void {
        if (!this.shouldLog(message.level)) { return; }
        const formatted = this.formatter.formatMessage(message);

        this.handleWrite(message, formatted);
    }
    /**
     * Checks to see if message log level is allowed by current output
     *
     * @protected
     * @param {LogLevel} messageLevel
     * @returns {boolean}
     */
    protected shouldLog(messageLevel: LogLevel): boolean {
        return (this.levels & messageLevel) === messageLevel;
    }

    /**
     * Should be overridden by Outputs.
     *
     * Writes to log to the output
     *
     * @protected
     * @abstract
     * @param {IMessage} message
     * @param {string}  formatted
     */
    protected abstract handleWrite(message: IMessage, formatted: string): void;
}

export default AbstractOutput;
