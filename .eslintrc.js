module.exports = {
    plugins: [ 'import'],
    extends: [ 'airbnb-base',  'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'class-methods-use-this': 'off', // 클래스에 무조건 this가 들어가야함

        'import/newline-after-import': 'error', // import 문 후 새로운 줄 추가 해야함
        'import/no-duplicates': 'error', // import 문에서 중복 규칙을 제거해야함
        'import/no-extraneous-dependencies': 'off', // package.json 파일에 명시되지 않은 의존성을 import하거나 require하는 것을 금지, on 하고싶음

        'import/order': [
            // 그루핑 어떻게 할건지?
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'unknown'],
                pathGroups: [
                    {
                        pattern: '**.{module,controller,service}',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**.{repository,entity}',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '**.dto',
                        patternOptions: { matchBase: true },
                        group: 'internal',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['unknown'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
