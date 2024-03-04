# Jira Dashboard Gadget

This project contains a Forge app written in JavaScript that displays `Hello World!` in a [Jira dashboard gadget](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-dashboard-gadget/).

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick Start

Install dependecies:

```sh
npm install
```

Login to your Atlassian account:

```sh
npm run login
```

Modify your app frontend by editing the `src/frontend/index.jsx` file.

Modify your app backend by editing the `src/resolvers/index.js` file to define resolver functions. See [Forge resolvers](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for documentation on resolver functions.

Build, deploy, and install your app in an Atlassian site by running:

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
