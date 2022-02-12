import React from 'react';

function SafeDays(dayR, monthR, yearR){
    
    const currentDate = new Date()
    const daysRober = new Date(yearR, monthR - 1, dayR)

    var daySafe = 0

    var curr = currentDate.getTime() / (1000 * 60 * 60 * 24)
    var last = daysRober.getTime() / (1000 * 60 * 60 * 24) //milisegundos, segundos, minutos, horas

    if (currentDate.getTime() < daysRober.getTime()){
        alert("Error!, revisar las fechas")
    }else{
        var safe = curr - last
        daySafe = Math.trunc(safe)
    }

    return(
        <div>
            <h1>Fecha del último robo: {dayR}/{monthR}/{yearR}</h1>
            <h1>Dias seguros: {daySafe}</h1>
        </div>
        
    )

}

export default SafeDays;
