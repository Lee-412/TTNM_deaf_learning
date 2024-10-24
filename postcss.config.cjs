module.exports = {
    plugins: {
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xs': '36em',
                'mantine-breakpoint-sm': '48em',
                'mantine-breakpoint-md': '62em',
                'mantine-breakpoint-lg': '75em',
                'mantine-breakpoint-xl': '88em',
            },
        },
        'postcss-mixins': {},  // Thêm plugin mixin
        'postcss-functions': {
            functions: {
                'light-dark': (lightValue, darkValue) => {
                    return `var(--mantine-color-mode) === 'dark' ? ${darkValue} : ${lightValue}`;
                },
            },
        },
    },
};