import React, {useEffect, useState} from 'react'
import clienteAxios from '../../config/axios'
import Cliente from './Cliente'

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
