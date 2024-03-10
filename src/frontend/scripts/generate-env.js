#!/usr/bin/env node

const { writeFileSync } = require('fs');
const { name, version } = require('../../../package.json');

const env = `VITE_APP_NAME=${name}
VITE_APP_VERSION=${version}
`;

writeFileSync('.env.local', env);
