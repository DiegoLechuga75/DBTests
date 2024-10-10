const Sequelize = require("sequelize");
const db = require("../config/db.js");
const Gerente = require("./Gerente.js");

const Hotel = db.define("hoteles", {
    id_htl: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    direccion: {
        type: Sequelize.STRING
    },
	telefono: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    timestamps: false
});