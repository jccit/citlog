import LogLevel from "../enums/LogLevel";

interface LogMsgOptions {
    /**
     * Message contents
     *
     * @type {string}
     */
    text: string

    /**
     * Message log level
     *
     * @type {LogLevel}
     */
    level: LogLevel

    /**
     * Date and time of message
     *
     * @type {Date}
     */
    date: Date
};

export default LogMsgOptions;