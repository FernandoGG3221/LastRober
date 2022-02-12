import React from 'react';

function Dates(){
    const currentDate = new Date();
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()

    return(
        <h1>Fecha actual: {day}/{month}/{year}</h1>
    )
}

export default Dates;
