import LogLevel from "./enums/LogLevel";
import ILoggerConfig from "./interfaces/LoggerConfig";
import IMessage from "./interfaces/Message";
import AbstractOutput from "./outputs/AbstractOutput";

class Logger {
    /**
     * List of outputs to log to
     *
     * @private
     * @type {AbstractOutput[]}
     */
    private outputs: AbstractOutput[];

    /**
     * Creates an instance of Logger.
     * @param {ILoggerConfig} config
     */
    constructor(config: ILoggerConfig) {
        this.outputs = config.outputs;
    }

    /**
     * Logs a message as info
     *
     * @param {string} module
     * @param {string} text
     * @param {...object[]} objects
     */
    public info(module: string, text: string, ...objects: object[]) {
        this.sendToOutputs({
            date: new Date(),
            level: LogLevel.Info,
            module,
            objects,
            text,
        });
    }

    /**
     * Logs a warning message
     *
     * @param {string} module
     * @param {string} text
     * @param {...object[]} objects
     */
    public warn(module: string, text: string, ...objects: object[]) {
        this.sendToOutputs({
            date: new Date(),
            level: LogLevel.Warning,
            module,
            objects,
            text,
        });
    }

    /**
     * Logs an error
     *
     * @param {string} module
     * @param {string} text
     * @param {...object[]} objects
     */
    public err(module: string, text: string, ...objects: object[]) {
        this.sendToOutputs({
            date: new Date(),
            level: LogLevel.Error,
            module,
            objects,
            text,
        });
    }

    /**
     * Logs a message as verbose. Use for debugging
     *
     * @param {string} module
     * @param {string} text
     * @param {...object[]} objects
     */
    public verbose(module: string, text: string, ...objects: object[]) {
        this.sendToOutputs({
            date: new Date(),
            level: LogLevel.Verbose,
            module,
            objects,
            text,
        });
    }

    /**
     * Sends a write request to each output as defined in 'outputs'
     *
     * @private
     * @param {IMessage} message
     */
    private sendToOutputs(message: IMessage) {
        for (const out of this.outputs) {
            out.writeLine(message);
        }
    }
}

export default Logger;
