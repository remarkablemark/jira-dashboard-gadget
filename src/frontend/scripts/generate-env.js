#!/usr/bin/env node

// @ts-check
/* eslint-disable @typescript-eslint/no-require-imports */

const { writeFileSync } = require('fs');
const { name, version } = require('../../../package.json');

const env = `VITE_APP_NAME=${name}
VITE_APP_VERSION=${version}
`;

writeFileSync('.env.local', env);
