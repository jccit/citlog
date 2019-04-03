import Output from './interfaces/Output';
import LoggerConfig from './interfaces/LoggerConfig';
import Severity from './enums/Severity';

class Logger {
    private outputs: Output[];

    constructor(config: LoggerConfig) {
        this.outputs = config.outputs;

        this.log('Hello world');
    }

    log(text: string, severity = Severity.Info, ...objects: Object[]) {
        for (const out of this.outputs) {
            out.writeLine(text, new Date(), Severity.Verbose, objects);
        }
    }

    info(text: string, ...objects: Object[]) {
        this.log(text, Severity.Info, objects);
    }

    warn(text: string, ...objects: Object[]) {
        this.log(text, Severity.Warning, objects);
    }

    err(text: string, ...objects: Object[]) {
        this.log(text, Severity.Error, objects);
    }

    verbose(text: string, ...objects: Object[]) {
        this.log(text, Severity.Verbose, objects);
    }
}

export default Logger;