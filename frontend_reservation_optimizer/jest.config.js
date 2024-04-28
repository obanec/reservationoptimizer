module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['tests/**/*.test.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest', 
        '\\.css$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js'
    },
    moduleDirectories:["node_modules", "src"]
    
}