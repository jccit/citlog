import Output from './abstract/Output';
import LoggerConfig from './interfaces/LoggerConfig';
import LogMsgOptions from './interfaces/LogMsgOptions';
import Severity from './enums/Severity';

class Logger {
    private outputs: Output[];

    constructor(config: LoggerConfig) {
        this.outputs = config.outputs;
    }

    private sendToOutputs(text: string, date = new Date(), severity = Severity.Verbose, objects: Object[]) {
        for (const out of this.outputs) {
            out.writeLine(text, date, severity, objects);
        }
    }

    log(config: LogMsgOptions, ...objects: Object[]) {
        if (typeof config === 'string') {
            this.err('Logger.log: You didn\'t pass a config object, did you mean to use Logger.info?')
            return;
        }

        this.sendToOutputs(config.text, config.date, config.level, objects);
    }

    info(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), Severity.Info, objects);
    }

    warn(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), Severity.Warning, objects);
    }

    err(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), Severity.Error, objects);
    }

    verbose(text: string, ...objects: Object[]) {
        this.sendToOutputs(text, new Date(), Severity.Verbose, objects);
    }
}

export default Logger;