import LogLevel from "../enums/LogLevel";
import AbstractFormat from "../formats/AbstractFormat";

interface IOutputOptions {
    /**
     * Optional. Flag representing all accepted log levels.
     * By default, outputs will typically log all messages
     *
     * @type {LogLevel}
     */
    levels?: LogLevel;

    /**
     * Formatter to use before printing text
     *
     * @type {AbstractFormat}
     */
    format?: AbstractFormat;
}

export default IOutputOptions;
