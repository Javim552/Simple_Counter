//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Contador from "./component/contador.jsx"

//render your react application
let cont=0;
    setInterval(() => { 
        ReactDOM.render(<Contador segundos={cont} />, document.querySelector("#app")); 
        cont+=1
        console.log(cont);
      }, 1000);





