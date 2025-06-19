import React from 'react'
import type {RegistroVehiculo} from './types'

interface InfoProps { 
  registros:RegistroVehiculo[]

}

export const Info :React.FC<InfoProps> = ({registros}) => {
  return (
    <div className='w-full bg-blue-50 py-3 gap-4'>
        {registros.map((registro) => 
         <div className='flex justify-around gap-2 w-full text-gray-600 text-lg'>
            <p className='flex justify-center'>Placa del ultimo vehiculo : {registro.placa} </p> <p> Hora : {registro.hora} </p> <p> Ubicacion : {registro.ubicacion}</p>
        </div>
        )}
       
    </div>
  )
}
