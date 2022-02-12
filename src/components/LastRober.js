import React, {Component, useState} from 'react';
import "../assets/css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from '../App';

let arrData = [];


class Lastrober extends Component{

    state = {
        data: arrData,
        form: {
            ind: "",
            fecha: ""
        }
    }


    render(){

        
        
        let index = 1
        function setRobert(){

            arrData.push([index, Date()])

            alert("Reportando robo")
            if (arrData.length > 0){
                alert(arrData)
                console.log(arrData)
            }
            index += 1
        }

        return(
            <div>
                <input type="submit" value="Reportar Robo" className='Btn' onClick={setRobert} />

                <h1>{arrData}</h1>
            </div>
        );
    }

    
}


export default Lastrober;
