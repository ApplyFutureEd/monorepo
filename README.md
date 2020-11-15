[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ApplyFutureEd_students&metric=ncloc&token=3d70e9ad498ddc4ff4e7e82124ed96f9c99eb48d)](https://sonarcloud.io/dashboard?id=ApplyFutureEd_students)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ApplyFutureEd_students&metric=coverage&token=3d70e9ad498ddc4ff4e7e82124ed96f9c99eb48d)](https://sonarcloud.io/dashboard?id=ApplyFutureEd_students)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ApplyFutureEd_students&metric=sqale_rating&token=3d70e9ad498ddc4ff4e7e82124ed96f9c99eb48d)](https://sonarcloud.io/dashboard?id=ApplyFutureEd_students)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ApplyFutureEd_students&metric=reliability_rating&token=3d70e9ad498ddc4ff4e7e82124ed96f9c99eb48d)](https://sonarcloud.io/dashboard?id=ApplyFutureEd_students)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ApplyFutureEd_students&metric=security_rating&token=3d70e9ad498ddc4ff4e7e82124ed96f9c99eb48d)](https://sonarcloud.io/dashboard?id=ApplyFutureEd_students)

> “The only way to go fast, is to go well.” ― Robert C. Martin, Clean Architecture

## 🤖 Scripts

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically refresh if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `yarn storybook`

Runs Storybook locally. Depending on your system configuration, it will automatically open the address in a new browser tab.<br>
Open [http://localhost:6000](http://localhost:6000) to view it in the browser.

[Storybook](https://storybook.js.org) is an open source tool for developing UI components in isolation.

### `yarn test:watch`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `yarn commit`

We use [Commitizen](https://github.com/commitizen/cz-cli) to ensure proper commit message formatting.<br>
You'll be prompted to fill out any required commit fields at commit time.

## 📦 Technical stack

-   [TypeScript](https://www.typescriptlang.org/) : Strict syntactical superset of JavaScript and adds optional static typing to the language.
-   [GraphQL](https://graphql.org/) : Open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.
-   [AWS Amplify](https://docs.amplify.aws/) : AWS Amplify is a set of products and tools that enables mobile and front-end web developers to build and deploy secure, scalable full stack applications, powered by AWS.
-   [Next.js](https://nextjs.org/) : Open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.
-   [Storybook](https://storybook.js.org/) : Storybook is an open source tool for developing UI components in isolation.
-   [TailwindCSS](https://tailwindcss.com/) : Utility-first CSS framework for rapid UI development.
-   [Jest](https://jestjs.io/) : JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
-   [Cypress](https://cypress.io/) : Javascript End to End testing framework.
-   [SonarCloud](https://sonarcloud.io/) : Online service to catch Bugs and Security Vulnerabilities in your Pull Requests and throughout your code repositories.
-   [Sentry](https://sentry.io/) : Open-source error tracking with full stacktraces & asynchronous context.
-   [Vercel](https://vercel.com) : Cloud platform for static sites and serverless functions.

## 📚 Folder structure

    src
    ├── components              # Components splitted in domain folders
        ├── core                # Low level components like Button, Select, Modal
        └── [domain]            # Domain level components like ProgramCard

    ├── graphql                 # GraphQL schema, queries and mutations
    ├── pages                   # Page level components for each path
    ├── styles                  # Styling related files
    ├── tests                   # Integration and E2E tests
    ├── utils                   # Helpers, hooks, and third-party integrations
    └── types                   # Types declarations

## 🚀 Deployment

Continous deployment and continous integration is setup on `dev` and `master` branch. Commit on those branch will triggers the deployment pipeline. 3 environements are available:

-   Local environement : http://localhost:3000
-   Developer environement : https://dev.applyfuture.com
-   Production environement : https://applyfuture.com
