const { sequelize } = require("../util/connect");
const Sequelize = require('sequelize');
const Points = sequelize.define('KoraPoint', {
    nameid: {
        type: Sequelize.BIGINT,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    points: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
});

module.exports = { Points };