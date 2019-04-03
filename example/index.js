const citlog = require('citlog');
console.log(citlog);

const logger = new citlog.Logger({
    outputs: [
        new citlog.output.Stdout()
    ]
});

logger.info('Hi!', this);