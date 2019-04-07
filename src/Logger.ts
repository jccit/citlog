import AbstractOutput from './outputs/AbstractOutput';
import LoggerConfig from './interfaces/LoggerConfig';
import Message from './interfaces/Message';
import LogLevel from './enums/LogLevel';

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
     * @param {LoggerConfig} config
     */
    constructor(config: LoggerConfig) {
        this.outputs = config.outputs;
    }

    /**
     * Sends a write request to each output as defined in 'outputs'
     *
     * @private
     * @param {Message} message
     */
    private sendToOutputs(message: Message) {
        for (const out of this.outputs) {
            out.writeLine(message);
        }
    }

    /**
     * Logs a message as info
     *
     * @param {string} module
     * @param {string} text
     * @param {...Object[]} objects
     */
    info(module: string, text: string, ...objects: Object[]) {
        this.sendToOutputs({
            text,
            module,
            date: new Date(),
            level: LogLevel.Info,
            objects
        });
    }

    /**
     * Logs a warning message
     *
     * @param {string} module
     * @param {string} text
     * @param {...Object[]} objects
     */
    warn(module: string, text: string, ...objects: Object[]) {
        this.sendToOutputs({
            text,
            module,
            date: new Date(),
            level: LogLevel.Warning,
            objects
        });
    }

    /**
     * Logs an error
     *
     * @param {string} module
     * @param {string} text
     * @param {...Object[]} objects
     */
    err(module: string, text: string, ...objects: Object[]) {
        this.sendToOutputs({
            text,
            module,
            date: new Date(),
            level: LogLevel.Error,
            objects
        });
    }

    /**
     * Logs a message as verbose. Use for debugging
     *
     * @param {string} module
     * @param {string} text
     * @param {...Object[]} objects
     */
    verbose(module: string, text: string, ...objects: Object[]) {
        this.sendToOutputs({
            text,
            module,
            date: new Date(),
            level: LogLevel.Verbose,
            objects
        });
    }
}

export default Logger;