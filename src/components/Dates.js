import React from 'react';

function Dates(){
    const currentDate = new Date();
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const date = day + "/" + month + "/" + year; 
    return(
        date
    )
}

export default Dates;
