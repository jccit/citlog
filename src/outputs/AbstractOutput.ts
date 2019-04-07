import LogLevel from '../enums/LogLevel';
import OutputOptions from '../interfaces/OutputOptions';
import Message from '../interfaces/Message';

abstract class AbstractOutput {
    /**
     * Stores a bit flag of log levels that should be outputted
     *
     * @protected
     * @type {LogLevel}
     */
    protected levels: LogLevel;

    constructor (options = <OutputOptions>{}) {
        this.levels = options.levels || LogLevel.All;
    }

    /**
     * Checks to see if message log level is allowed by current output
     *
     * @protected
     * @param {LogLevel} messageLevel
     * @returns {boolean}
     */
    protected shouldLog(messageLevel: LogLevel): boolean {
        return (this.levels & messageLevel) == messageLevel;
    }

    /**
     * Should be overridden by Outputs.
     *
     * Writes to log to the output
     *
     * @protected
     * @abstract
     * @param {Message} message
     */
    protected abstract handleWrite(message: Message): void;

    /**
     * Public function for triggering a write.
     * Will make a call to shouldLog before sending the write request.
     *
     * @param {Message} message
     * @returns {void}
     */
    public writeLine(message: Message): void {
        if (!this.shouldLog(message.level)) return;

        this.handleWrite(message);
    };
}

export default AbstractOutput;