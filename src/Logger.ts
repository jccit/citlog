import AbstractOutput from './outputs/AbstractOutput';
import LoggerConfig from './interfaces/LoggerConfig';
import LogMsgOptions from './interfaces/LogMsgOptions';
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
     * @param {string} text
     * @param {Date} [date=new Date()]
     * @param {LogLevel} [level=LogLevel.Verbose]
     * @param {Object[]} objects
     */
    private sendToOutputs(text: string, date = new Date(), level = LogLevel.Verbose, objects: Object[]) {
        for (const out of this.outputs) {
            out.writeLine(text, date, level, objects);
        }
    }

    /**
     * Core logging command. Set options in the config variable.
     * Although you probably want one of the other, shorter, logging functions
     *
     * @param {LogMsgOptions} config
     * @param {...Object[]} objects
     * @returns {void}
     */
    log(config: LogMsgOptions, ...objects: Object[]): void {
        if (typeof config === 'string') {
            this.err('Logger.log: You didn\'t pass a config object, did you mean to use Logger.info?')
            return;
        }

        this.sendToOutputs(config.text, config.date, config.level, objects);
    }

    /**
     * Logs a message as info
     *
     * @param {string} text
     * @param {...Object[]} objects
     */
    info(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), LogLevel.Info, objects);
    }

    /**
     * Logs a warning message
     *
     * @param {string} text
     * @param {...Object[]} objects
     */
    warn(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), LogLevel.Warning, objects);
    }

    /**
     * Logs an error
     *
     * @param {string} text
     * @param {...Object[]} objects
     */
    err(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), LogLevel.Error, objects);
    }

    /**
     * Logs a message as verbose. Use for debugging
     *
     * @param {string} text
     * @param {...Object[]} objects
     */
    verbose(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), LogLevel.Verbose, objects);
    }
}

export default Logger;