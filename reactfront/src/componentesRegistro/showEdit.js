import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/'
const URI2 = 'http://localhost:8000/usuarios/'

const CompEditUser = () => {
    const [rut, setRut] = useState([])
    const [nombre, setNombre] = useState([])
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    

    const navigate = useNavigate()

    

    //const {id} = useParams('rut')
    const {rutId}  = useParams()
    
    


    
    //procedimiento para actualizar
    async function update(e) {
        e.preventDefault();
        await axios.put(URI + rutId, {
            rut: rut,
            nombre: nombre,
            correo: correo,
            telefono: telefono
        });

        navigate('/');
    }
    
    
    useEffect( ()=>{
        getBlogById()
    }, [])

    const getBlogById = async () => {

        const res = await axios.get(URI+rutId)
        setRut(res.data.rut)
        setNombre(res.data.nombre)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)

    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
        
            <div className="mb-3">
                
                <label className="form-label">Rut</label>
                
                <input
                    value={rut}
                    onChange={ (e)=> {setRut(e.target.value)}}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <textarea
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                
                <label className="form-label">Correo</label>
                
                <input
                    value={correo}
                    onChange={ (e)=> {setCorreo(e.target.value)}}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                
                <label className="form-label">Telefono</label>
                
                <input
                    value={telefono}
                    onChange={ (e)=> {setTelefono(e.target.value)}}
                    type="text"
                    className="form-control"                        
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditUser