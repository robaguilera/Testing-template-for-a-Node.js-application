# Testing template for a Node.js application.

## __What is this?__

This is a template that can be used for developing node.js applications. It's set up to start testing your code from the gecko.

It comes with some example code so you can run all the types of tests, to see they function correctly.

## __Using:__

_Node version: 10.16.0_

_Npm version: 6.9.0_

* __testrunner:__ Mocha
* __testing framework:__ Chai
* __Coverage tooling:__ Istanbul
* __Mutation testing framework:__ Stryker

## __Usage__

Install dependencies using npm with the command: `npm i`

Your project code should be placed inside the src directory or the directory you are adding it to must be added to the nyc configuration in the package.json.

Tests should be placed inside the test directory or the directory you are adding them must be added to the mocha configuration in the package.json (scripts) and stryker.conf.js files.

## __Running unit tests using Mocha as a testrunner:__

`npm test` or `npm t`

## __Generating a coverage report using Istanbul:__

`npm run coverage`

## __Mutation testing of your code:__

`npm run stryker`