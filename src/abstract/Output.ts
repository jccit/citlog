import Severity from '../enums/Severity';
import OutputOptions from '../interfaces/OutputOptions';

abstract class Output {
    protected levels: Severity;

    constructor (options = <OutputOptions>{}) {

    }

    shouldLog(requestedLevel: Severity): boolean {
        return (this.levels & requestedLevel) == requestedLevel;
    }

    abstract writeLineToOutput(text: string, date: Date, level: Severity, objs: Object[]): void;
    writeLine(text: string, date: Date, level: Severity, objs: Object[]): void {
        if (!this.shouldLog(level)) return;

        this.writeLineToOutput(text, date, level, objs);
    };
}

export default Output;