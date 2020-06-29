// this will throw an error : Cannot use import statement outside a module because its using ECMAScript modules
//FIX : Either replace import with require OR use "type" : "module" in package.json file

import chalk from 'chalk';

/* eslint-disable no-console*/
console.log(chalk.green('Starting app in dev mode...'));
