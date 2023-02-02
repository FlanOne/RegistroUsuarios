import db from "../database/db.js";
import { DataTypes } from "sequelize";

const DireccionModel = db.define('direcciones', {
    direccion: {type: DataTypes.STRING},
    comuna: {type: DataTypes.STRING},
    region: {type: DataTypes.STRING},
    tipoDireccion: {type: DataTypes.STRING}
})

export default DireccionModel