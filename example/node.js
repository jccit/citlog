const clogit = require('clogit');

const logger = new clogit.Logger({
    outputs: [
        new clogit.output.NodeConsole()
    ]
});

const tag = 'Main';

logger.info(tag, 'Hello world!');
logger.err(tag, 'This is error');