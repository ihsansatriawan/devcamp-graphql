# Requirements

- NodeJS `v10.14.1`  recommended use [nvm](https://github.com/creationix/nvm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install) `1.12.3` 

# Getting Started

1. Clone this repo `git clone git@github.com:ihsansatriawan/devcamp-graphql.git`
2. `cd devcamp-graphql`
3. Install dependencies `yarn`
4. Run for development `yarn start`

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn run <script>`|Description|
|------------------|-----------|
|`start` |Serves your app at `localhost:4000`. HMR will be enabled.|
|`build`|Compiles the application to disk (`~/dist` by default).|
|`production`|Runs as production environment|