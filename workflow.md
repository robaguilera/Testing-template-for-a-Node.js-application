__1. Run the commands:__

_git init_, _npm init_

__2. Add a .gitignore file__

This file must exclude the node_modules directory.

__3. Add node packages in the dev_dependencies__

_npm i -D mocha_

_npm i -D chai_

_npm i -D nyc_

_npm i -D @stryker-mutator/core_

__4. Create the following directories__

_test_-- This is the place for all the tests.

_src_ -- This is the place for the source code.

__5. Make sure nyc can see all files that are part of the project__

If this is not done, the reporter will not see files that are not mentioned in our tests.

```json
"nyc": {
  "all": true,
  "include": [
    "src/**/*.js",
  ]
}
```
__6. Run `npx stryker init`.__

_Are you using one of these frameworks? Then select a preset configuration. (Use arrow keys)_ __None/other__

_Which test runner do you want to use? If your test runner isn't listed here, you can choose "command" (it uses your `npm test` command, but will come with a big performance penalty) (Use arrow keys)_ __mocha__

_Which test framework do you want to use? (Use arrow keys)_ __None/other__

_What kind of code do you want to mutate? (Use arrow keys)_ __Javascript__

_[optional] What kind transformations should be applied to your code? (Press <space> to select, <a> to toggle all, <i> to invert selection)_ __No selection__

_Which reporter(s) do you want to use? (Press <space> to select, <a> to toggle all, <i> to invert selection)_ __html, clear-text and progress__

_Which package manager do you want to use? (Use arrow keys)_ __npm__

__7. Add the following to the stryker.conf.js file__

```javascript
mochaOptions: {
  spec: ['test/**/*.js'],
},
maxConcurrentTestRunners: 2
```

__8. Add the following scripts to package.json__

```json
"scripts": {
    "test": "mocha test/**/*.js",
    "coverage": "nyc --reporter=html --reporter=text npm test",
    "stryker": "npx stryker run"
  }
  ```