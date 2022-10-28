import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Prestentation.css"
let Presentation=(props) => {
    return <>
        <div className="prestentation">
        <img src={require("../img/letter-b(1).png")} alt="Budget Logo"  className="img"/>
            <h1>Bienvenue Dans My Budget</h1>
            <img src={require("../img/pexels-pixabay-53621.jpg")} alt="Budget bg"  className="bg-img" />
            <div className="bg-color"></div>
            <div className="input-btn-budget">
                <input type="number" class="form-control" onChange={(e)=>props.HandlerInputBdg(e)} id="budget" name="budget" placeholder="Entrez votre budget" />
                <button id="ok" class="btn btn-primary" onClick={props.Btnbdg} type="button">Ok</button>
            </div>
        </div>
    </>
}
export default Presentation