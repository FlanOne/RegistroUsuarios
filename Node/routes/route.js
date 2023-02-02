import express from 'express'
import {getAllUsers, getUser, createUser, editUser, deleteUser, getAllMotos, getAllUsers2, getUser2, assoAll, getAllDirecciones, getDireccion, createDireccion, editDireccion, deleteDireccion, getMoto, createMoto, editMoto, deleteMoto, assoUsxDir } from '../controllers/modelController.js'

const router = express.Router()
//solo usuarios
router.get('/usuarios', getAllUsers2)
router.get('/usuarios/:rutId', getUser2)
router.post('/agregar', createUser)
router.put('/usuarios/:rutId', editUser)
router.delete('/eliminar/:rut', deleteUser)
//solo motos
router.get('/allMotos/', getAllMotos)
router.get('/buscar/moto/:chassis', getMoto)
router.post('/agregar/moto', createMoto)
router.put('/editar/moto/:chassis', editMoto)
router.delete('/eliminar/moto/:chassis', deleteMoto)
//solo direcciones
router.get('/allDireccion', getAllDirecciones)
router.get('/buscar/direccion/:id', getDireccion)
router.post('/agregar/direccion', createDireccion)
router.put('/editar/direccion/:id', editDireccion)
router.delete('/eliminar/direccion/:id', deleteDireccion)

//asociacion
//MOSTRAR todos los usarios que con sus motos
router.get('/motosU', assoAll)
//mostrar a todos los usuarios con sus direcciones referenciadas
router.get('/direccionU', assoUsxDir)
//mostrar todas las motos de un usuario especifico utilizando su rut
//mostrar todas las direcciones que posee el usuario colocando su rut

export default router

