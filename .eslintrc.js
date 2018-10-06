module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "react-app"
    [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "16.4.1", // React version, default to the latest React stable release
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": ["forbidExtraProps"] // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    },
    "globals": {
        "dispatch": false,
        "expect": false,
        "describe": false,
        "beforeEach": false,
        "beforeAll": false,
        "afterEach": false,
        "xdescribe": false,
        "it": false,
        "xit": false,
        "jest": false,
        "shallow": false,
        "toJson": false,
        "mount": false,
        "render": false,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "parserOptions.ecmaVersion": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};