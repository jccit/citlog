const clogit = require('clogit');

const logger = new clogit.Logger({
    outputs: [
        new clogit.output.Stdout()
    ]
});

logger.info('Hello world!');
logger.err('This is error');