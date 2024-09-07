import React from 'react'

interface ProyectCardProps{
    description:string,
    icon?:string,
    className?:string
}

function ProyectCard({description,icon,className}:ProyectCardProps) {
  return (
    <div className={className}>
    <p>{description}</p>
  </div>
  )
}

export default ProyectCard