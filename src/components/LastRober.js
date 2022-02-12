import React, {Component} from 'react';
import "../assets/css/App.css"
import App from '../App';

class Lastrober extends Component{

    reload = () => {
        window.location.reload(true);
    }

    render(){
        
        let arrData = [];

        function setRobert(){
            arrData.push([Date()])
            alert("Reportando robo, actualizando datos")
            if (arrData.length > 0){
                alert(arrData)
                console.log(arrData)
            }
        }

        return(
            <div>
                <input type="submit" value="Reportar Robo" className='Btn' onClick={setRobert} />
                <input type="submit" value="Recargar datos" className='Btn' onClick={this.reload} />
                <h1>{arrData}</h1>
            </div>
        );
    }

    
}


export default Lastrober;
