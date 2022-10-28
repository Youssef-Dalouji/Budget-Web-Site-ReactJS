import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
let BodyTableRow=(props) => {
    return <>
        <tr className="Row-speciale">
            <th scope="row">{props.id}</th>
            <td>{props.categorie}</td>
            <td>{props.nom}</td>
            <td className="prix-tab"><p>{props.prix}$</p></td>
            <td><button type="button" id="BtnSupp" onClick={()=>props.HandlerSupp(props.indx)}><FontAwesomeIcon className="facirclexmark" icon={faCircleXmark} /></button></td>
        </tr>
    </>
}
export default BodyTableRow