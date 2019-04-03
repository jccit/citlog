import localResolve from 'rollup-plugin-local-resolve';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/clogit.js',
            format: 'umd',
            name: 'clogit'
        },
        {
            file: 'dist/clogit.esm.js',
            format: 'es'
        }
    ],
    plugins: [
        resolve({ extensions: ['.ts']}),
        localResolve(),
        commonjs(),
        babel({ extensions: ['.ts'], include: ['src/**/*'] })
    ]
}