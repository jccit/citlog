import AbstractFormat from "./AbstractFormat";
import Message from "../interfaces/Message";
import LogLevel from "../enums/LogLevel";

class Logcat extends AbstractFormat {
    private pad(num: Number): string {
        return (num < 10 ? '0' : '') + num;
    }

    public formatMessage(message: Message): string {
        let prefix = '';

        switch (message.level) {
            case LogLevel.Info:
                prefix = 'I';
                break;

            case LogLevel.Error:
                prefix = 'E';
                break;

            case LogLevel.Warning:
                prefix = 'W';
                break;
            
            case LogLevel.Verbose:
                prefix = 'V';
                break;
        
            default:
                break;
        }

        const date = message.date;
        const dateString = `${this.pad(date.getMonth())}-${this.pad(date.getDate())} ${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}.${date.getMilliseconds()}`;

        return `${dateString} ${prefix}/${message.module} ${message.text}`;
    }
}

export default Logcat;