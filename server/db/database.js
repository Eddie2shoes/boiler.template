const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log(chalk.yellow(`Opening database connection to ${dbName}`));

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
