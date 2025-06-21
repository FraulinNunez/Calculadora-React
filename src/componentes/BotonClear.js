import React from "react";
import '../hojas-de-estilos/BotonClear.css'
function BotonClear(props) {
    return(
        <div className='boton-clear' onClick={props.manejarClic} >  
            {props.children}
        </div>
    )
}

export default BotonClear;