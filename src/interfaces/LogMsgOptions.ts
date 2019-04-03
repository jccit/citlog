import Severity from "../enums/Severity";

interface LogMsgOptions {
    text: string
    level: Severity,
    date: Date
};

export default LogMsgOptions;