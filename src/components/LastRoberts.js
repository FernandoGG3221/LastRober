import React, {Component} from 'react';

class Lastrobers extends Component{
    
    render(){
        
        let arrData = {
            day: 7,
            month: 2,
            year: 2022
        };

        return(
            <h1>Fecha de robo: {arrData.day}/{arrData.month}/{arrData.year}</h1>
        );
    }

    
}


export default Lastrobers;
