import AbstractOutput from './AbstractOutput';
import LogLevel from '../enums/LogLevel';
import OutputOptions from '../interfaces/OutputOptions';
import Message from '../interfaces/Message';

class BrowserConsole extends AbstractOutput {
    constructor(options = <OutputOptions>{}) {
        super(options);
    }

    protected buildString(message: Message): string {
        return `[${message.module}] ${message.text}`;
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

    handleWrite(message: Message): void {
        const out = this.buildString(message);
        const params = this.getParams(out, message.objects);
        this.consoleOut(params, message.level);
    }
}

export default BrowserConsole;