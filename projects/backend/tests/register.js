/**
 * Overrides the tsconfig used for the app.
 * In the test environment we need some tweaks.
 */

/* eslint-disable */
const tsNode = require('ts-node');

/* eslint-disable */
module.exports = () => {
    tsNode.register({
        files: true,
        transpileOnly: true,
        project: './tests/tsconfig.json'
    });
}