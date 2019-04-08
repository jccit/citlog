import LogLevel from "../enums/LogLevel";
import IMessage from "../interfaces/Message";
import OutputOptions from "../interfaces/OutputOptions";
import AbstractOutput from "./AbstractOutput";

class BrowserConsole extends AbstractOutput {
    constructor(options = {} as OutputOptions) {
        super(options);
    }

    public handleWrite(message: IMessage, formatted: string): void {
        const params = this.getParams(formatted, message.objects);
        this.consoleOut(params, message.level);
    }

    private getParams(text: string, objects: object[]): any[] {
        let params: any[] = [text];

        if (objects.length > 0) {
            params = [
                ...params,
                ...objects,
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
}

export default BrowserConsole;
