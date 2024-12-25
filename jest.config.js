export default {
    testEnvironment: 'node',
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['**/*.test.js'],
    moduleDirectories: ['node_modules'],
    extensionsToTreatAsEsm: ['.jsx'], // Remove .js as it's inferred
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1'
    }
  };