import Severity from '../enums/Severity';

interface Output {
    writeLine(text: string, date: Date, level: Severity, ...objs: Object[]): void;
}

export default Output;