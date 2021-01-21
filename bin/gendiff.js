#!/usr/bin/env node

import program from 'commander';
import geneDiff from '../src/index.js';

program
  .description('Compares two configuration files and s hows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --HELP', 'read more information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(geneDiff(filepath1, filepath2, program.format)));

program.parse(process.argv);
