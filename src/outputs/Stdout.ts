import AbstractOutput from './AbstractOutput';
import LogLevel from '../enums/LogLevel';
import OutputOptions from '../interfaces/OutputOptions';

class Stdout extends AbstractOutput {
    constructor(options = <OutputOptions>{}) {
        super(options);
        this.levels = options.levels || LogLevel.All;
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

    private consoleOut(params: any[], level: LogLevel): void {
        let outputFunc = console.log;

        switch (level) {
            case LogLevel.Info:
                outputFunc = console.info;
                break;

            case LogLevel.Error:
                outputFunc = console.error;
                break;

            case LogLevel.Warning:
                outputFunc = console.warn;
                break;

            default:
                outputFunc = console.log;
                break;
        }

        outputFunc.apply(this, params);
    }

    handleWrite(text: string, date: Date, level: LogLevel, objs: Object[]): void {
        const out = this.buildString(text, date);
        const params = this.getParams(out, objs);
        this.consoleOut(params, level);
    }
}

export default Stdout;