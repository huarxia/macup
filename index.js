#!/usr/bin/env node

var name = process.argv[2];
require('shelljs/global');
const chalk = require('chalk');

// brew is installed？
const brew = which('brew');

if (!brew) {
    console.log(chalk.red('没有安装 ') + chalk.bgRed('brew'));
    console.log(chalk.green('请复制 ') + chalk.yellow('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"'));
    return;
} else {
    console.log(chalk.green('本机已安装 brew 😀, 软件安装列表如下'));
    let brewList = exec('brew list').stdout.split('\n');
    console.log('-------------------------');
    console.log(brewList);
}

// brew cask is installed？
const brewCask = exec('brew cask --version');

if (!brewCask) {
    console.log(chalk.red('没有安装 ') + chalk.bgRed('brew cask'));
    console.log(chalk.green('请复制运行：') + chalk.yellow('brew install cask'));
} else {
    console.log(chalk.green('本机已安装 brew cask 😀, 软件安装列表如下'));
    let caskList = exec('brew cask list').stdout.split('\n');
    console.log('-------------------------');
    console.log(caskList);
}

// brew cask is installed？
const mas = which('mas');

if (!mas) {
    console.log(chalk.red('没有安装 ') + chalk.bgRed('mas'));
    console.log(chalk.green('请复制运行：') + chalk.yellow('brew install mas'));
} else {
    console.log(chalk.green('本机已安装 mas 😀, 软件安装列表如下'));
    let masList = exec('mas list').stdout.split('\n');
    console.log('-------------------------');
    console.log(masList);
}
