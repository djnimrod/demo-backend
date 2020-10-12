const dbConfig = require("../config/bd.config.js");

const Sequelize = require("sequelize");
const { dialect } = require("../config/bd.config.js");
const sequelize = new Sequelize(dbConfig.db, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, dialect: dbConfig.dialect, operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;