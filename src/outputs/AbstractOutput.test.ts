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
        module: null,
        level: null,
        date: new Date(),
        objects: []
    };
})

test('should log', () => {
    const testString = 'Hello world';
    const testModule = 'TestModule';
    const sampleObject = {hello: 'world'};
    log.err(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.level).toBe(LogLevel.Error);
    expect(loggedMessage.objects).toEqual([sampleObject]);
});

test('shouldn\'t log', () => {
    const testString = 'Hello world';
    const testModule = 'TestModule';
    const sampleObject = {hello: 'world'};
    log.warn(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBeNull();
    expect(loggedMessage.module).toBeNull();
    expect(loggedMessage.level).toBeNull();
});