
import UserModel from "../models/modelUsuarios.js";
import MotoModel from "../models/modelMotos.js";
import DireccionModel from "../models/modelDirecciones.js";
import { DataTypes, QueryTypes } from "sequelize"
import db from "../database/db.js"

//mostrar a todos los usuarios con sus respectivas motos con todos los datos
export const assoAll = async (req, res) => {
    try {
        const assos = await db.query('SELECT u.*, m.* FROM usuarios u LEFT JOIN usuariosxmoto x ON(u.rut = x.rutUsuario)  LEFT JOIN motos m USING (chassis)', {
            type: QueryTypes.SELECT
        })
        res.json(assos)
    } catch (error) {
        res.json({message: error.message})
    }
}
//mostrar todas las direcciones correspondientes a cada usuario
export const assoUsxDir = async (req, res) => {
    try {
        const usxidr = await db.query('SELECT u.*, d.* FROM usuarios u JOIN usuarioxdireccion x ON(u.rut = x.rutUsuario) JOIN direcciones d USING (id)', {
            type: QueryTypes.SELECT
        })
        res.json(usxidr)
    } catch (error) {
        res.json({message: error.message})
    }
}

//querys para usuarios
//traer a solo a todos los usuarios
export const getAllUsers2 = async(req, res) => {
    try {
        const users = await db.query('SELECT * FROM usuarios', {
            type: QueryTypes.SELECT
        })
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
        
    }
}
//traer a solo un usuario buscado por rut
export const getUser2 = async(req, res) => {
    try {
        const user = await db.query('SELECT * FROM usuarios WHERE rut = :rut',{
            replacements: {rut : req.params.rutId},
            type: QueryTypes.SELECT
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllUsers /**sin moto */ = async (req, res) => {
    try{
        const users = await UserModel.findAll()
        res.json(users)
    } catch(error){
        res.json({message: error.message})
    }

}

//traer a un usuario
export const getUser /**usuario sin moto */ = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where:{
                rut: req.params.rutId
            }
        })
        res.json(user[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear un usuario
export const createUser /**sin moto */ = async (req, res) => {
    try {
        await UserModel.create(req.body)
        res.json({
            "message":"el usuario sin moto a sido creado correctamente"

        })

    } catch (error) {
        res.json({message: error.message})
        
    }
}
//editar los datos de un usuario
export const editUser /**sin moto */ = async (req, res) =>{
    try {
        await UserModel.update(req.body, {
            where: {rut: req.params.rutId}
            
        })
        res.json({
            "message":"el usuario fue actualizado"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}
//eliminar un usuario
export const deleteUser /** tamo sin moto */ = async (req, res) => {
    try {
        await UserModel.destroy({
            where: {rut: req.params.rut}
        })
        res.json({
            "message":"El usuario ha sido eliminado correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}


//metodos solo motos

//traer todas las motos
export const getAllMotos = async (req, res) => {
    try{
        const motos = await MotoModel.findAll()
        console.log(motos[0])
        res.json(motos)
    } catch(error){
        res.json({message: error.message})
    }

}

//traer una moto en especifico utilizando el chassis
export const getMoto = async (req, res) => {
    try {
        const moto = await MotoModel.findAll({
            where:{
                chassis: req.params.chassis
            }
        })
        res.json(moto[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear una moto
export const createMoto = async (req, res) => {
    try {
        await MotoModel.create(req.body)
        res.json({
            "message":"la moto a sido creada correctamente"

        })

    } catch (error) {
        res.json({message: error.message})
        
    }
}
//editar los datos de una moto
export const editMoto = async (req, res) =>{
    try {
        await MotoModel.update(req.body, {
            where: {chassis: req.params.chassis}
            
        })
        res.json({
            "message":"la moto fue actualizada"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}
//elimar una moto
export const deleteMoto = async (req, res) => {
    try {
        await MotoModel.destroy({
            where: {chassis: req.params.chassis}
        })
        res.json({
            "message":"la moto ha sido eliminada correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}

//queries para la tabla direcciones utilizando el modulo de la respectiva tabla 
//traer solo todas las direcciones
export const getAllDirecciones = async (req, res) => {
    try{
        const direcciones = await DireccionModel.findAll()
        res.json(direcciones)
    } catch(error){
        res.json({message: error.message})
    }

}

//traer una direccion en especifico utilizando el id de la direccion
export const getDireccion = async (req, res) => {
    try {
        const direccion = await DireccionModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(direccion[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear una direccion
export const createDireccion = async (req, res) => {
    try {
        await DireccionModel.create(req.body)
        res.json({
            "message":"la direccion a sido creada correctamente"

        })

    } catch (error) {
        res.json({message: error.message})
        
    }
}
//editar los datos de una direccion
export const editDireccion = async (req, res) =>{
    try {
        await DireccionModel.update(req.body, {
            where: {id: req.params.id}
            
        })
        res.json({
            "message":"la direccion fue actualizada"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}
//elimar una direccion utilizando el id como referencia
export const deleteDireccion = async (req, res) => {
    try {
        await DireccionModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"la direccion ha sido eliminada correctamente"
        })
        
    } catch (error) {
        res.json({message: error.message})
    }
}