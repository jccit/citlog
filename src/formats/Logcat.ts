import LogLevel from "../enums/LogLevel";
import IMessage from "../interfaces/Message";
import AbstractFormat from "./AbstractFormat";

class Logcat extends AbstractFormat {

    public formatMessage(message: IMessage): string {
        let prefix = "";

        switch (message.level) {
            case LogLevel.Info:
                prefix = "I";
                break;

            case LogLevel.Error:
                prefix = "E";
                break;

            case LogLevel.Warning:
                prefix = "W";
                break;

            case LogLevel.Verbose:
                prefix = "V";
                break;

            default:
                break;
        }

        const date = message.date;
        const dateString = `${this.pad(date.getMonth())}-${this.pad(date.getDate())}`
        + `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}`
        + `.${date.getMilliseconds()}`;

        return `${dateString} ${prefix}/${message.module} ${message.text}`;
    }
    private pad(num: number): string {
        return (num < 10 ? "0" : "") + num;
    }
}

export default Logcat;
