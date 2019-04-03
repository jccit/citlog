import LogLevel from "../enums/LogLevel";

interface OutputOptions {
    /**
     * Optional. Flag representing all accepted log levels.
     * By default, outputs will typically log all messages
     *
     * @type {LogLevel}
     */
    levels?: LogLevel;
}

export default OutputOptions;