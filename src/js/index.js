//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));

let contador = 0;
let minuto = 0;
let hora = 0;
setInterval(function() {
	var one = Math.floor(contador / 1);

	contador++;

	if (contador > 59) {
		contador = 0;
		minuto = minuto + 1;
	} else if (minuto > 59) {
		hora = hora + 1;
		minuto = 0;
	}
	ReactDOM.render(
		<Home segundo={contador} minuto={minuto} hora={hora} />,
		document.querySelector("#app")
	);
}, 1000);
