import AbstractOutput from "../outputs/AbstractOutput";

interface LoggerConfig {
    /**
     * Should contain an array of output instances to log to
     *
     * @type {AbstractOutput[]}
     */
    outputs: AbstractOutput[]
}

export default LoggerConfig;