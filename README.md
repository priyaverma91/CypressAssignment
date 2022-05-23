# cypress-pom Framework

An example project demonstrating automated UI tests using JavaScript-based end-to-end testing framework Cypress with Page Object Model pattern.


### Installation

Install the dependencies and devDependencies to run the test.
- Clone this repo on your local machine
- Navigate to project's directory on terminal and run the following commands:

```sh
npm install
```

Install Recurse
```sh
npm i -D cypress recurse
```

### Execute Tests

Run the following command in Terminal to execute tests in Headless mode:

```sh
npm test
```

Run the following command in Terminal to open Cypress Test Runner:

```sh
npm run cypress
```

### Test Report

You can find the Mochawesome report in the following directory of the Project.

```sh
\cypress\reports\mochareports
```
<img width="1727" alt="Screenshot 2022-05-23 at 9 22 20 PM" src="https://user-images.githubusercontent.com/105927698/169858782-d557975e-7525-4928-8541-13503e01249a.png">


Open 'report.html' file to view the report.

### Headless

To run the tests in headless mode,
```
npm run test -- --headless
```
