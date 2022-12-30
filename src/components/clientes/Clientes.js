import React, {useEffect, useState} from 'react'
import clienteAxios from '../../config/axios'
import Cliente from './Cliente'
import {Link} from 'react-router-dom'

export default function Clientes() {

  const [clientes, guardarClientes] = useState([])
  
  const consultarAPI = async () => {
    const clientesConsulta = await clienteAxios.get('/clientes')
    guardarClientes(clientesConsulta.data);
  }

  useEffect(() => {
    consultarAPI()
  }, [])
  
  return (
    <>
      <h2>Clientes</h2>

      <Link to={"clientes/nuevo"} className="btn btn-verde nvo-cliente"> 
        <i className="fas fa-plus-circle"></i>
        Nuevo Cliente
      </Link>
      
      <ul className='listado-clientes'>
        {clientes.map(cliente => (
          <Cliente 
            key={cliente._id}
            cliente={cliente}
          />
        ))}
      </ul>
    </>
  )
}
