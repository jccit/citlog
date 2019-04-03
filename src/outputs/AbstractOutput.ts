import LogLevel from '../enums/LogLevel';
import OutputOptions from '../interfaces/OutputOptions';

abstract class AbstractOutput {
    /**
     * Stores a bit flag of log levels that should be outputted
     *
     * @protected
     * @type {LogLevel}
     */
    protected levels: LogLevel;

    constructor (options = <OutputOptions>{}) {

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
     * @param {string} text
     * @param {Date} date
     * @param {LogLevel} level
     * @param {Object[]} objs
     */
    protected abstract handleWrite(text: string, date: Date, level: LogLevel, objs: Object[]): void;

    /**
     * Public function for triggering a write.
     * Will make a call to shouldLog before sending the write request.
     *
     * @param {string} text
     * @param {Date} date
     * @param {LogLevel} level
     * @param {Object[]} objs
     * @returns {void}
     */
    writeLine(text: string, date: Date, level: LogLevel, objs: Object[]): void {
        if (!this.shouldLog(level)) return;

        this.handleWrite(text, date, level, objs);
    };
}

export default AbstractOutput;