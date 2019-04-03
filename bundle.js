(function () {
    'use strict';

    define("enums/Severity", ["require", "exports"], function (require, exports) {
        Object.defineProperty(exports, "__esModule", { value: true });
        var Severity;
        (function (Severity) {
            Severity[Severity["Verbose"] = 0] = "Verbose";
            Severity[Severity["Info"] = 1] = "Info";
            Severity[Severity["Warning"] = 2] = "Warning";
            Severity[Severity["Error"] = 3] = "Error";
        })(Severity || (Severity = {}));
        exports.default = Severity;
    });
    define("interfaces/Output", ["require", "exports"], function (require, exports) {
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("interfaces/LoggerConfig", ["require", "exports"], function (require, exports) {
        Object.defineProperty(exports, "__esModule", { value: true });
    });
    define("Logger", ["require", "exports", "enums/Severity"], function (require, exports, Severity_1) {
        Object.defineProperty(exports, "__esModule", { value: true });
        var Logger = /** @class */ (function () {
            function Logger(config) {
                this.outputs = config.outputs;
            }
            Logger.prototype.log = function (text, severity) {
                if (severity === void 0) { severity = Severity_1.default.Info; }
                var objects = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    objects[_i - 2] = arguments[_i];
                }
                for (var _a = 0, _b = this.outputs; _a < _b.length; _a++) {
                    var out = _b[_a];
                    out.writeLine(text, new Date(), Severity_1.default.Verbose, objects);
                }
            };
            Logger.prototype.info = function (text) {
                var objects = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    objects[_i - 1] = arguments[_i];
                }
                this.log(text, Severity_1.default.Info, objects);
            };
            Logger.prototype.warn = function (text) {
                var objects = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    objects[_i - 1] = arguments[_i];
                }
                this.log(text, Severity_1.default.Warning, objects);
            };
            Logger.prototype.err = function (text) {
                var objects = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    objects[_i - 1] = arguments[_i];
                }
                this.log(text, Severity_1.default.Error, objects);
            };
            Logger.prototype.verbose = function (text) {
                var objects = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    objects[_i - 1] = arguments[_i];
                }
                this.log(text, Severity_1.default.Verbose, objects);
            };
            return Logger;
        }());
        exports.default = Logger;
    });
    define("outputs/Stdout", ["require", "exports", "enums/Severity"], function (require, exports, Severity_2) {
        Object.defineProperty(exports, "__esModule", { value: true });
        var Stdout = /** @class */ (function () {
            function Stdout() {
            }
            Stdout.prototype.buildString = function (text, date) {
                return text;
            };
            Stdout.prototype.getParams = function (text) {
                var objects = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    objects[_i - 1] = arguments[_i];
                }
                var params = [text];
                if (objects.length > 0) {
                    params = params.concat(objects);
                    if (typeof window === 'undefined') {
                        // Running under node, flatten the array up to 3 times
                        // there's a weird bug where the argument array will
                        // always be wrapped in 3 arrays in nodejs
                        params = params.flat(3);
                    }
                }
                return params;
            };
            Stdout.prototype.consoleOut = function (params, level) {
                var outputFunc = console.log;
                switch (level) {
                    case Severity_2.default.Info:
                        outputFunc = console.info;
                        break;
                    case Severity_2.default.Error:
                        outputFunc = console.error;
                        break;
                    default:
                        outputFunc = console.log;
                        break;
                }
                outputFunc.apply(this, params);
            };
            Stdout.prototype.writeLine = function (text, date, level) {
                var objs = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    objs[_i - 3] = arguments[_i];
                }
                var out = this.buildString(text, date);
                var params = this.getParams(out, objs);
                this.consoleOut(params, level);
            };
            return Stdout;
        }());
        exports.default = Stdout;
    });
    define("outputs/index", ["require", "exports", "outputs/Stdout"], function (require, exports, Stdout_1) {
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Stdout = Stdout_1.default;
    });
    define("index", ["require", "exports", "Logger", "outputs/index"], function (require, exports, Logger_1, output) {
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.Logger = Logger_1.default;
        exports.output = output;
    });

}());
