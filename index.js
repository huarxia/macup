#!/usr/bin/env node

var name = process.argv[2];
require('shelljs/global');
const chalk = require('chalk');
// brew is installed？
const brew = which('brew');

if (!brew) {
    console.log(chalk.red('没有安装 ') + chalk.bgRed('brew'));
    console.log(chalk.green('请复制 ') + chalk.yellow('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'));
} else {
    console.log(chalk.green('已安装 brew 😀'));
    let brewList = exec('brew list').stdout;
    console.log(chalk.green(brewList));
}
