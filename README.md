![npm](https://img.shields.io/npm/v/clogit.svg)

# clogit

Simple JS logger.

## Usage

```js
const log = new clogit.Logger({
    outputs: [
        new clogit.output.Console()
    ]
});

log.info('MyModule', 'Hello world!');
```
