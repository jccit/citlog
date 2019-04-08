import LogLevel from "../enums/LogLevel";

interface IMessage {
    /**
     * Message contents
     *
     * @type {string}
     */
    text: string;

    /**
     * Module name
     *
     * @type {string}
     */
    module: string;

    /**
     * Message log level
     *
     * @type {LogLevel}
     */
    level: LogLevel;

    /**
     * Date and time of message
     *
     * @type {Date}
     */
    date: Date;

    /**
     * Stores an array of extra objects to print
     *
     * @type {object[]}
     */
    objects?: object[];
}

export default IMessage;
