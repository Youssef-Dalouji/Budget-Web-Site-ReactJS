import React, { useEffect, useState } from "react";
import BodyTableRow from "./BodyTableRow";
import 'bootstrap/dist/css/bootstrap.min.css';
let BodyTable=(props) => {
    let [newarrayData,setNewarrayData]=useState([{id:111,valeur:0},{id:222,valeur:0},{id:333,valeur:0},{id:444,valeur:0},{id:555,valeur:0}])
    let [informationData,setInformationData]=useState([])
    let [arraystatistque,setArraystatistque]=useState([])
    useEffect(()=>{
        setInformationData(()=>{
            return [...props.informationData]
        })
    },[props.informationData])
    useEffect(()=>{
        let dataplus1=[...props.informationData]
        let dataplus2=[...newarrayData]
        let dataplusRes=dataplus2.map((item2)=>{
            dataplus1.map((item1)=>{
                if(parseInt(item1.ig)===parseInt(item2.id)){
                    item2.valeur+=parseInt(item1.prix)
                }
            })
            return item2
        })
        setArraystatistque(()=>{
            return dataplusRes.map((item)=>item.valeur)
        })
    },[informationData])
    useEffect(()=>{
        let dataplus1=[...props.dataSuppconvert]
        let dataplus2=[...newarrayData]
        let dataplusRes=dataplus2.map((item2)=>{
            dataplus1.map((item1)=>{
                if(parseInt(item1.ig)===parseInt(item2.id)){
                    item2.valeur-=parseInt(item1.prix)
                }
            })
            return item2
        })
        setArraystatistque(()=>{
            return dataplusRes.map((item)=>item.valeur)
        })
    },[props.dataSuppconvert])
    return <>
            <div className="TabPrincipale">
            <div className="info-statistique">
                <div class="list-stat">
                    <div className="Infrastructure"><p>Infrastructure</p><h1>{(arraystatistque[0]*100)/props.budget}%</h1></div>
                    <div className="Nourriture"><p>Nourriture</p><h1>{(arraystatistque[1]*100)/props.budget}%</h1></div>
                    <div className="Vêtements"><p>Vêtements</p><h1>{(arraystatistque[2]*100)/props.budget}%</h1></div>
                    <div className="Appareils"><p>Appareils</p><h1>{(arraystatistque[3]*100)/props.budget}%</h1></div>
                    <div className="Autres-dépenses"><p>Autres dépenses</p><h1>{(arraystatistque[4]*100)/props.budget}%</h1></div>
                </div>
            </div>
            <div className="Tab">
                <table className="table">
                <thead className="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Catégorie</th>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody >
                {props.datanew.map((item,indx)=><BodyTableRow indx={indx}  id={item.id} key={indx} categorie={item.categorie} nom={item.nom} prix={item.prix} HandlerSupp={props.HandlerSupp}/>)}
            </tbody>
            </table>
            </div>
            </div>
    </>
}
export default BodyTable