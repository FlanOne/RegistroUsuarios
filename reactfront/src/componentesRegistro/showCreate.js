import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/agregar'

const CompCreateUser = () => {
    const [rut, setRut] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')

    const navigate = useNavigate()  
    //procedimiento de guardar
    const store = async (e) => {
        e.preventDefault() 
        await axios.post(URI, {rut: rut, nombre: nombre, correo: correo, telefono: telefono})
        navigate('/')
    }
    return (
        <div>
            <h3>
                Registrar Usuario
            </h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Rut</label>
                    <input
                        value={rut}
                        onChange={ (e) => setRut(e.target.value)}
                        type="text"
                        form="form-control"
                    
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        type="text"
                        form="form-control"
                    
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        value={correo}
                        onChange={ (e) => setCorreo(e.target.value)}
                        type="text"
                        form="form-control"
                    
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        value={telefono}
                        onChange={ (e) => setTelefono(e.target.value)}
                        type="text"
                        form="form-control"
                    
                    />
                
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>

            </form>
        </div>
    )
}

export default CompCreateUser