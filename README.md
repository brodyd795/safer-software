# Safer Software

This repository contains a series of examples of tools and patterns for making safer software. 

It is designed to work in conjunction with [this Google Slide presentation](https://docs.google.com/presentation/d/1gKmFZN2Z57w3V6wNUrCdnCEFTo999NtzSWr-f87fHPI/edit?usp=sharing).

## Examples

### Version control

The `git/` directory contains two JS files, each of which contain notes regarding example bugs that can be fixed and subsequently committed to version control. These examples show how much easier it is to use proper version control (e.g. `git`) than to rely on other methods like file name suffixes (e.g. `myScript_FINAL.js`).

### Linting

The `lint/` directory contains one file that contains an ESLint error. By running `npm run lint`, the example shows how ESLint can be used to write safer and more maintainable code.

### Type safety

The `type-safety/` directory contains two functionally equivalent files:
- `without.js`: does not have type safety and contains a bug that would have to be debugged manually
- `with.ts`: does have type safety and the same bug, and shows several type errors

By running `npm run ts-without`, the example shows the bug without any type errors to help with debugging. By running `npm run ts-with`, it shows how fixing the type errors helps the debugging process, and how adding type safety to a project can help prevent bugs.

### Manual tests

The code in `git/levenshtein.js` includes two console logs that show an example of how code can be manually tested.

### Unit tests

The `testing/` directory contains examples of unit tests that can be run via `npm run test-unit` with Jest. This example shows that unit tests can help keep software safer by using unit tests to prevent bugs from entering the codebase.

### End-to-end tests

The `e2e/` dorectory contains a simple website (which can be run by opening any of the `.html` files), along with a couple of end-to-end (e2e) tests using Playwright. The first test passes, while the second test (once un-skipped) fails due to a bug with scrolling introduced in the `lorem.html` file. This example shows how the use of e2e tests can help prevent bugs from entering the codebase.

### Release management / Continuous Integration

The `.github/workflows` directory contains an example of how GitHug Actions can be used to automatically run scripts for testing the code examples in this repo. With the correct repository settings, this Action shows how running these scripts (e.g. unit tests) can help prevent bugs from entering the codebase even if the developer forgets to run tests locally. 

Note that several of the scripts are commented out, because they do not pass (for illustrative purposes) and would otherwise prevent PRs from passing CI. 
