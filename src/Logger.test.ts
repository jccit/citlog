import Logger from './Logger';
import AbstractOutput from './outputs/AbstractOutput';
import LogLevel from './enums/LogLevel';
import Message from './interfaces/Message';

let log: Logger;
let loggedMessage: Message;

class TestOutput extends AbstractOutput {
    protected handleWrite(message: Message): void {
        loggedMessage = message;
    }
}

beforeEach(() => {
    loggedMessage = {
        text: null,
        module: null,
        level: null,
        date: new Date(),
        objects: []
    };
})

test('init', () => {
    log = new Logger({
        outputs: [
            new TestOutput()
        ]
    });

    expect(log).toBeDefined();
});

test('simple log', () => {
    const testString = 'Hello world';
    const testModule = 'TestModule';
    log.info(testModule, testString);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.level).toBe(LogLevel.Info);
});

test('logging objects', () => {
    const testString = 'Hello world';
    const testModule = 'TestModule';
    const sampleObject = {hello: 'world'};
    log.err(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.objects).toEqual([sampleObject]);
});