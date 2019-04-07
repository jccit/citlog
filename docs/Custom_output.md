# Writing a Custom Output

Building your own output class is fairly easy, the current API only exposes one public function, `writeLine`

## Example Class

Here is a simple example in ES6 and ES5 which will console.log any message

```js
// ES6 example
class MyOutput {
    writeLine(message) {
        console.log(message.text);
    }
}
```

```js
// ES5 example
var MyOutput = function() {};
MyOutput.prototype.writeLine = function(message) {
    console.log(message.text);
}
```

writeLine recieves a message object as the only argument, take a look at the Message.ts file for more information.