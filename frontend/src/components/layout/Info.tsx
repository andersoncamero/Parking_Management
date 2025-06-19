import React from 'react'
import type {RegistroVehiculo} from './types'

interface InfoProps { 
  registros:RegistroVehiculo[]

}

export const Info :React.FC<InfoProps> = ({registros}) => {
  return (
   <div className="w-full bg-blue-50 p-4 rounded-md shadow">
  <table className="w-full text-sm justify-around">
    <thead className=" text-blue-900 text-xl">
      <tr>
        <th className="px-4 py-2">Placa</th>
        <th className="px-4 py-2">Tipo Vehículo</th>
        <th className="px-4 py-2">Hora</th>
        <th className="px-4 py-2">Puesto</th>
      </tr>
    </thead>
    <tbody>
      {registros.map((registro, index) => (
        <tr key={registro.placa + index} className="w-full border-b-1 border-b-blue-200 hover:bg-blue-50 text-lg">
          <td className="px-4 py-2">{registro.placa}</td>
          <td className="px-4 py-2 text-center">{registro.tipo}</td>
          <td className="px-4 py-2">{registro.hora}</td>
          <td className="px-4 py-2">{registro.ubicacion}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
