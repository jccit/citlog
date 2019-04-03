import Output from '../interfaces/Output';
import Severity from '../enums/Severity';

class Stdout implements Output {
    private buildString(text: string, date: Date): string {
        return text;
    }

    private getParams(text: string, ...objects: Object[]): any[] {
        let params: any[] = [text];

        if (objects.length > 0) {
            params = [
                ...params,
                ...objects
            ];

            if (typeof window === 'undefined') {
                // Running under node, flatten the array up to 3 times
                // there's a weird bug where the argument array will
                // always be wrapped in 3 arrays in nodejs
                params = params.flat(3);
            }
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

            default:
                outputFunc = console.log;
                break;
        }

        outputFunc.apply(this, params);
    }

    writeLine(text: string, date: Date, level: Severity, objs: Object[]): void {
        const out = this.buildString(text, date);
        const params = this.getParams(out, objs);
        this.consoleOut(params, level);
    }
}

export default Stdout;