import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/usuarios/'


const CompShowUser = () => {
    
    const [users, setUsuarios] = useState([])
    useEffect( ()=>{
        getUsuarios()
    },[])

    //procedimineto para mostrar todos los blogs
    const getUsuarios = async () => {
        const res = await axios.get(URI)
        setUsuarios(res.data)
        console.log(res)
    }

    //procedimineto para eliminar un blog
    const deleteUsuarios = async (rut) => {
       await axios.delete(`http://localhost:8000/eliminar/${rut}`)
       getUsuarios()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/agregar" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table table-bordered' >

                        <thead className='table-primary'>
                            <tr>
                                <th>Rut</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Telefono</th>
                                <th>Creado en</th>
                                <th>Editado en</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user) => (
                                <tr key={ user.rut}>
                                    <td> { user.rut} </td>
                                    <td> { user.nombre} </td>
                                    <td> { user.correo} </td>
                                    <td> { user.telefono} </td>
                                    <td> { user.createdAt} </td>
                                    <td> { user.updatedAt} </td>
                                    <td>
                                        <Link to={`/usuarios/${user.rut}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteUsuarios(user.rut) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                        <Link to={`/usuarios/motos/${user.rut}`} className='btn btn-danger'><i className="fa-solid fa-motorcycle"></i></Link>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowUser