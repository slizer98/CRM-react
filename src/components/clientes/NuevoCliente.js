import React, {useState} from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/axios';

function NuevoCliente() {
    const [cliente, guardarCliente] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: ''
    });
    const navigate = useNavigate();

    // leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        guardarCliente({
            // obtener una copia del state actual
            ...cliente,
            [e.target.name] : e.target.value
        })
        console.log(cliente);
    }

    //  agrega cilente en las Rest API
    const agregarCliente = e => {
        e.preventDefault();

        // enviar peticion por axios
        clienteAxios.post('/clientes', cliente)
            .then(res => {
                if(res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    })
                } else {
                    Swal.fire(
                        'Se Agrego El Cliente Correctamente',
                        res.data.message,
                        'success'
                      )
                }
                // Redireccionar
                navigate('/');

            })
        
    }

    // Validar el formulario
    const validarCliente = () => {
        // Destructuring
        const {nombre, apellido, email, empresa, telefono} = cliente;

        // Revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;
        // Return true o false
        return valido;
    }
    
  return (
    <>
        <h2>Nuevo Cliente</h2>
        <form
            onSubmit={agregarCliente}
        >
            <legend>Llena todos los campos</legend>

            <div className="campo">
                <label>Nombre:</label>
                <input 
                    type="text" 
                    placeholder="Nombre Cliente" 
                    name="nombre" 
                    onChange={actualizarState}
                />
            </div>

            <div className="campo">
                <label>Apellido:</label>
                <input 
                    type="text" 
                    placeholder="Apellido Cliente" 
                    name="apellido" 
                    onChange={actualizarState}
                />
            </div>
        
            <div className="campo">
                <label>Empresa:</label>
                <input 
                    type="text" 
                    placeholder="Empresa Cliente" 
                    name="empresa" 
                    onChange={actualizarState}
                />
            </div>

            <div className="campo">
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder="Email Cliente" 
                    name="email" 
                    onChange={actualizarState}
                />
            </div>

            <div className="campo">
                <label>Teléfono:</label>
                <input 
                    type="text" 
                    placeholder="Teléfono Cliente" 
                    name="telefono" 
                    onChange={actualizarState}
                />
            </div>

            <div className="enviar">
                <input 
                    type="submit" 
                    className="btn btn-azul" 
                    value="Agregar Cliente" 
                    disabled={validarCliente()}
                />
            </div>

        </form>
    </>
  )
}

// HOC, Higher Order Component es una funcion que toma un componente y retorna un nuevo componente
export default NuevoCliente;