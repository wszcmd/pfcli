#!/usr/bin/env node
const { program } = require('commander')

program
  .command('down')
  .description("下载模板")
  .option('-n, --name <name>', '模板名称')
  .action(require(`${__dirname}/actions/down.js`))

program 
  .command('list')
  .description("ls 可下载模板")
  .action(require(`${__dirname}/actions/list.js`))

program.parse(process.argv)

