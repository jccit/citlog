import core from './rollup.config';
import { uglify } from "rollup-plugin-uglify";

const config = core;
config.output = [{
    file: 'dist/clogit.min.js',
    format: 'umd',
    name: 'clogit'
}];
config.plugins.push(uglify());

export default config;