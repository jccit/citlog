import BrowserConsole from './BrowserConsole';
import Message from '../interfaces/Message';
import { LogLevel } from '..';

class NodeConsole extends BrowserConsole {
    protected buildString(message: Message): string {
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

        return `[${message.date.toISOString()}] ${prefix}/${message.module} ${message.text}`;
    }
}

export default NodeConsole;