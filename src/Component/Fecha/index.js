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
        //let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Nobiembre","Diciembre"]
        let fechaActual=''
        
        switch (day) {
            case 0:
                fechaActual= diaSemana[0] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()
            case 1:
                fechaActual= diaSemana[1] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()
            case 2:
                fechaActual= diaSemana[2] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()
            case 3:
                fechaActual= diaSemana[3] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()
            case 4:
                fechaActual= diaSemana[4] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()   
            case 5:
                fechaActual= diaSemana[5] + ",   "  +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString()
            case 6:
                fechaActual= diaSemana[6] + ",  " +  dd + " - " + mm + " - " + aa + ",    " + hh + ":" + min
                return fechaActual.toString() 
            default:
                break; 
        }
    }
    return (
    <div className="ml-8 text-sm text-c-fondo opacity-50">
        {fecha()}
    </div>
)}
