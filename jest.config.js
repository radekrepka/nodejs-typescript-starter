module.exports = {
    roots: [
        "<rootDir>/src",
        "<rootDir>/tests",
    ],
    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json",
        },
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testEnvironment: "node",
    testMatch: [
        "**/tests/**/*.test.(ts|js)",
    ],
    collectCoverageFrom: [
        "src/**/*.{js,ts}",
    ],
    moduleFileExtensions: [
        "ts",
        "js",
    ],
};
