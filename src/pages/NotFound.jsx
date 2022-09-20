import React from "react";
import '@styles/NotFound.scss'
import Not_Fount from './../../img/error-404.png';


const NotFound = ()=>{
    return(
        
        <div className="form-container">
            <h2>Error!</h2>
            <div className="error-img">
            <img src={Not_Fount} alt="Error" />
            </div>
            <p className="subtitle">Ups!, we have a problem</p>
            <span className="span-error"><a href="../Home">Go back</a></span>
        </div>
        

        // <div>
        //     <h3>Not Found, error 404.</h3>
        // </div>
    )
}

export {NotFound}