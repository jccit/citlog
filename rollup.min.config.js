import core from './rollup.config';
import { uglify } from "rollup-plugin-uglify";

const config = core;
config.output = [{
    file: 'dist/citlog.min.js',
    format: 'umd',
    name: 'citlog'
}];
config.plugins.push(uglify());

export default config;