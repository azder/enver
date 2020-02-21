module.exports = ({

    testEnvironment: 'node',

    testMatch: [
        '**/test/**/*.(spec|test).js',
    ],

    setupFilesAfterEnv: [],

    coverageReporters: [
        'json',
        'lcov',
        'text',
        'text-summary',
    ],

});
