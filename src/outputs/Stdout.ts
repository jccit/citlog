import Output from '../abstract/Output';
import Severity from '../enums/Severity';
import OutputOptions from '../interfaces/OutputOptions';

class Stdout extends Output {
    constructor(options = <OutputOptions>{}) {
        super(options);
        this.levels = options.levels || Severity.All;
    }

    private buildString(text: string, date: Date): string {
        return text;
    }

    private getParams(text: string, objects: Object[]): any[] {
        let params: any[] = [text];

        if (objects.length > 0) {
            params = [
                ...params,
                ...objects
            ];
        }

        return params;
    }

    private consoleOut(params: any[], level: Severity): void {
        let outputFunc = console.log;

        switch (level) {
            case Severity.Info:
                outputFunc = console.info;
                break;

            case Severity.Error:
                outputFunc = console.error;
                break;

            case Severity.Warning:
                outputFunc = console.warn;
                break;

            default:
                outputFunc = console.log;
                break;
        }

        outputFunc.apply(this, params);
    }

    writeLineToOutput(text: string, date: Date, level: Severity, objs: Object[]): void {
        const out = this.buildString(text, date);
        const params = this.getParams(out, objs);
        this.consoleOut(params, level);
    }
}

export default Stdout;