module.exports = {
    setupFiles: [
        "react-app-polyfill/jsdom"
    ],
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
}