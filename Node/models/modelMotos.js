import db from "../database/db.js";
import { DataTypes } from "sequelize";

const MotoModel = db.define('motos', {
    chassis: {type: DataTypes.STRING, primaryKey: true},
    patente: {type: DataTypes.STRING},
    modelo: {type: DataTypes.STRING},
    año: {type: DataTypes.STRING},
    motor: {type: DataTypes.STRING},
    color: {type: DataTypes.STRING},
    version: {type: DataTypes.STRING}


})

export default MotoModel