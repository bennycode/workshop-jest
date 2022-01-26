# Testing Workshop

- [React Core Concepts](https://reactjs.org/docs/hello-world.html)

## Jest

- https://testing-library.com/docs/queries/about

### Run specific tests

**Run test by file path:**

```bash
react-scripts test --colors --verbose --runTestsByPath ./src/yaml/sortYaml.test.ts
```

**Run test by test name:**

```bash
react-scripts test --testNamePattern=updateCount
react-scripts test --colors --verbose "--testNamePattern=^sortYaml sorts YAML content by key$"
```

## Playwright

- https://playwright.dev/docs/test-advanced
