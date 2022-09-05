import React from 'react'

export const Fecha = () => {
    const fecha=()=>{
        let f= new Date()
        let day=f.getDay()
        let dd=f.getDate()
        let aa=f.getFullYear()
        let mm=f.getMonth()
        let hh=f.getHours()
        let min=f.getMinutes()
        let diaSemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
        let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Nobiembre","Diciembre"]
        let fechaActual= diaSemana[day] + ",   "  + mes[mm] + "   " + dd + " de " + aa + ",    " + hh + ":" + min
        
        return fechaActual.toString()
    }
    return (
    <div className="ml-8 text-sm text-c-fondo opacity-50">
        {fecha()}
    </div>
)}
