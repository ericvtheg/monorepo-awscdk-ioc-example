# monorepo-awscdk-ioc-example (WORK IN PROGRESS)

[![TypeScript version][ts-badge]][typescript-4-4]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status * GitHub Actions][gha-badge]][gha-ci]

This repo implements a mono-repo approach described [here](https://www.serverless.com/blog/structuring-a-real-world-serverless-app).

## TODO

### High Priority

* context binding handler.execute to lambda call
* set up aws cdk to create lambdas
* add error handling
* figure out what to do with weird types in repository/entity
* more doc blocks
* look into generating events for lambdas
* add validation library
* update README (include aws cdk pre req global instal)
* update README to include solution for Error: This stack uses assets, so the toolkit stack must be deployed to the environment (Run "cdk bootstrap aws://unknown-account/unknown-region")
* update README to include that docker running is required

## Lower Priority

* add integration tests
* look into only including services/'service' dir path in cdk lambda
* cloudwatch visibility things
* get stricter linter
* review inversify documentation more (specifically singleton binds etc)
* improve interfaces
* create a type for `id`s
* figure out how to run services locally in a container
* add more aws cdk examples
* do TODOs
* refactor all aws interfaces to be from one place

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

* [TypeScript][typescript] [4.4][typescript-4-4]
* [ESLint][eslint] with some initial rules recommendation
* [Jest][jest] for fast unit testing and code coverage
* Type definitions for Node.js and Jest
* [Prettier][prettier] to enforce consistent code style
* yarn [scripts](#available-scripts) for common operations
* Simple example of TypeScript code and unit test
* .editorconfig for consistent file format
* Example configuration for [GitHub Actions][gh-actions]

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Use as a repository template

To start, just click the **[Use template][repo-template-action]** link (or the green button). Start adding your code in the `src` and unit tests in the `tests` directories.

## Available Scripts

* `clean` - remove coverage data, Jest cache and transpiled files,
* `prebuild` - lint source files and tests before building,
* `build` - transpile TypeScript to ES6,
* `build:watch` - interactive watch mode to automatically transpile source files,
* `lint` - lint source files and tests,
* `validate` - run tests,
* `validate:watch` - interactive watch mode to automatically re-run tests

## Additional Information

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[gha-badge]: https://github.com/ericvtheg/monorepo-awscdk-ioc-example/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/ericvtheg/monorepo-awscdk-ioc-example/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-4]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[repo-template-action]: https://github.com/ericvtheg/monorepo-awscdk-ioc-example/generate
