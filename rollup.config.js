import typescript from 'rollup-plugin-typescript2';

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                    },
                    include: null,
                },
            })
        ],
    };
}
