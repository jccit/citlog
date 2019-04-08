import LogLevel from "./enums/LogLevel";
import IMessage from "./interfaces/Message";
import Logger from "./Logger";
import AbstractOutput from "./outputs/AbstractOutput";

let log: Logger;
let loggedMessage: IMessage;

class TestOutput extends AbstractOutput {
    protected handleWrite(message: IMessage): void {
        loggedMessage = message;
    }
}

beforeEach(() => {
    loggedMessage = {
        date: new Date(),
        level: null,
        module: null,
        objects: [],
        text: null,
    };
});

test("init", () => {
    log = new Logger({
        outputs: [
            new TestOutput(),
        ],
    });

    expect(log).toBeDefined();
});

test("simple log", () => {
    const testString = "Hello world";
    const testModule = "TestModule";
    log.info(testModule, testString);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.level).toBe(LogLevel.Info);
});

test("logging objects", () => {
    const testString = "Hello world";
    const testModule = "TestModule";
    const sampleObject = {hello: "world"};
    log.err(testModule, testString, sampleObject);

    expect(loggedMessage.text).toBe(testString);
    expect(loggedMessage.module).toBe(testModule);
    expect(loggedMessage.objects).toEqual([sampleObject]);
});
