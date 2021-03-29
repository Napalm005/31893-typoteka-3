'use strict';
const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    console.log(chalk.gray(`
      Программа запускает http-сервер и формирует файл с данными для API.
      
      Гайд:
      server &lt;command&gt;
      Команды:
      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate &lt;count&gt;    формирует файл mocks.json
    `));
  }
};
