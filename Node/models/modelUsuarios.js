import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserModel = db.define('usuarios', {
    rut: {type: DataTypes.STRING},
    nombre: {type: DataTypes.STRING, primaryKey: true},
    correo: {type: DataTypes.STRING},
    telefono: {type: DataTypes.STRING}

})

export default UserModel