module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/infra/**',
    '!src/libs/interfaces/**',
    '!src/libs/ioc/**',
    '!src/**/*.d.ts',
  ],
  setupFiles: [
    "<rootDir>/jest_config_setup.ts"
  ]
};
