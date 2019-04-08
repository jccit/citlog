import LogLevel from "../enums/LogLevel";
import IMessage from "../interfaces/Message";
import Logger from "../Logger";
import AbstractOutput from "./AbstractOutput";

let log: Logger;
let loggedMessage: IMessage;

class TestOutput extends AbstractOutput {
    protected handleWrite(message: IMessage): void {
        loggedMessage = message;
    }
}

beforeAll(() => {
    log = new Logger({
        outputs: [
            new TestOutput({
                levels: LogLevel.Error,
            }),
        ],
    });
});

beforeEach(() => {
    loggedMessage = {
        date: new Date(),
        level: null,
        module: null,
        objects: [],
        text: null,
    };
});

test("should log", () => {
    const testString = "Hello world";
    const testModule = "TestModule";
    const sampleObject = {hello: "world"};
    log.err(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.level).toBe(LogLevel.Error);
    expect(loggedMessage.objects).toEqual([sampleObject]);
});

test("shouldn't log", () => {
    const testString = "Hello world";
    const testModule = "TestModule";
    const sampleObject = {hello: "world"};
    log.warn(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBeNull();
    expect(loggedMessage.module).toBeNull();
    expect(loggedMessage.level).toBeNull();
});
