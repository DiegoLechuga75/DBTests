const Sequelize = require("sequelize");
const db = require("../config/db.js");
const Hotel = require("./Hotel.js");

const Gerente = db.define(
    "gerentes",
    {
        id_grt: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        ap_paterno: {
            type: Sequelize.STRING
        },
        ap_materno: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        id_htl: {
            type: Sequelize.INTEGER,
        },
        timestamps: false
    }
)