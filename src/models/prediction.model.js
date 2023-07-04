const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Prediction = db.define("predictions", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    money: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "disabled"),
      allowNull: false,
      defaultValue: "active",
    }
})

module.exports = Prediction