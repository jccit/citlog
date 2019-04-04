import Logger from '../Logger';
import AbstractOutput from './AbstractOutput';
import LogLevel from '../enums/LogLevel';
import Message from '../interfaces/Message';

let log: Logger;
let loggedMessage: Message;

class TestOutput extends AbstractOutput {
    protected handleWrite(message: Message): void {
        loggedMessage = message;
    }
}

beforeAll(() => {
    log = new Logger({
        outputs: [
            new TestOutput({
                levels: LogLevel.Error
            })
        ]
    });
});

beforeEach(() => {
    loggedMessage = {
        text: null,
        level: null,
        date: new Date(),
        objects: []
    };
})

test('should log', () => {
    const testString = 'Hello world';
    const sampleObject = {hello: 'world'};
    log.err(testString, sampleObject);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.level).toBe(LogLevel.Error);
    expect(loggedMessage.objects).toEqual([sampleObject]);
});

test('shouldn\'t log', () => {
    const testString = 'Hello world';
    const sampleObject = {hello: 'world'};
    log.warn(testString, sampleObject);

    expect(loggedMessage.text).toBeNull();
    expect(loggedMessage.level).toBeNull();
});