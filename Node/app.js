import express from "express"
import cors from 'cors'
import db from "./database/db.js";
import rutas from './routes/route.js'



const app = express()

app.use(cors())
app.use(express.json())
app.use('/', rutas)

try {
    await db.authenticate()
    console.log('se ha conectado exitosamente a la base de datos')

} catch (error) {
    console.log('no se pudo conectar a la base de datos')
    
}



app.listen(8000, () => {
    console.log('servidor activo corriendo en http://localhost:8000')
})