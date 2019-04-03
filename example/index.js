const citlog = require('citlog');

const logger = new citlog.Logger({
    outputs: [
        new citlog.output.Stdout()
    ]
});

logger.info('Hello world!');
logger.err('This is error');