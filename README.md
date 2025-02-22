# Jira Dashboard Gadget

[![build](https://github.com/remarkablemark/jira-dashboard-gadget/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/jira-dashboard-gadget/actions/workflows/build.yml)

This project contains a Forge app written in JavaScript that displays `Hello World!` in a [Jira dashboard gadget](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-dashboard-gadget/).

See [documentation and tutorials](https://developer.atlassian.com/platform/forge) explaining Forge.

## Prerequisites

[Create a Forge app](https://developer.atlassian.com/platform/forge/set-up-forge/) and replace `app.id` in [manifest.yml](manifest.yml).

## Quick Start

Clone the repository:

```sh
git clone https://github.com/remarkablemark/jira-dashboard-gadget.git
cd jira-dashboard-gadget
```

Install the dependecies:

```sh
npm install
```

Log in to your Atlassian account:

```sh
npm run login
```

Modify the frontend app by editing the `src/frontend/src/index.tsx` file.

Modify the backend app by editing the `src/backend/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

Build, deploy, and install your app in an Atlassian site:

```sh
npm run deploy
```

Develop your app by running `forge tunnel` to proxy invocations locally:

```sh
npx forge tunnel
```

### Notes

- Use the `npx forge deploy` command when you want to persist code changes.
- Use the `npx forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Resources

- [Manage your apps](https://developer.atlassian.com/platform/forge/manage-your-apps/)
- [Product bridge APIs](https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/bridge/)
- [Atlassian design system](https://atlassian.design/components)

## Examples

- [Issue Formula](https://github.com/remarkablemark/issue-formula)

## License

[MIT](LICENSE)
