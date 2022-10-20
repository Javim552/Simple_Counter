import React from "react";


export default function Contador (props){
   
    let unidad = props.segundos;
   return(

    <div className= "contador"><h1>{unidad}</h1></div>
    
    
   )
  

}