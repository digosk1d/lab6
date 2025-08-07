export default [
    {
        files: ['**/**.js'],
        laguajeOptions: {
            ecmaVersion: 'lastest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error','single']
        }
    }
]