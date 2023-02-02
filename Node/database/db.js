import { Sequelize } from "sequelize";

const db = new Sequelize('maestro_cliente', 'root', 'H1errov1ejo@', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db