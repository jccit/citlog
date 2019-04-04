import LogLevel from "../enums/LogLevel";

interface Message {
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

    /**
     * Stores an array of extra objects to print
     *
     * @type {Object[]}
     */
    objects?: Object[]
};

export default Message;