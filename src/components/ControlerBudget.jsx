import React,{useState,useEffect} from "react";
import SideBar from "./SideBar";
import Prestentation from "./Prestentation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlerBudget.css'
import swal from 'sweetalert';
import Body from "./Body";
let ControlerBudget=() => {
    let [valeurbdg,setValeurbdg]=useState(0)
    let [verfication,setVerfication]=useState(false)
    let [depenses,setDepenses]=useState(0)
    let [depensesplus,setDepensesplus]=useState(0)
    let [selectcatg,setSelectcatg]=useState(0)
    let [dataTable,setDataTable]=useState([])
    let [statu,setStatu]=useState(false)
    let [dataCategorie,setDataCategorie]=useState([
        {
            idgroup:111,
            group:"Infrastructure",
            id:[11,12,13,14],
            nom:[
                {id:11,nom:"Eau"},
                {id:12,nom:"Électricité"},
                {id:13,nom:"Gaz"},
                {id:14,nom:"Internet"}
            ]
        },
        {
            idgroup:222,
            group:"Nourriture",
            id:[21,22,23,24,25],
            nom:[
                {id:21,nom:"Matières Premaire"},
                {id:22,nom:"légumes"},
                {id:23,nom:"Fruit"},
                {id:24,nom:"Gateau"},
                {id:25,nom:"Boissons"}
            ]
        },
        {
            idgroup:333,
            group:"Vêtements",
            id:[31,32,33,34,35,36],
            nom:[
                {id:31,nom:"Short"},
                {id:32,nom:"Chemise"},
                {id:33,nom:"Jacket"},
                {id:34,nom:"Manteau"},
                {id:35,nom:"Chaussures"},
                {id:36,nom:"Sous-Vêtement"}
            ]
        },
        {
            idgroup:444,
            group:"Appareils",
            id:[41,42,43,44,45,46,47],
            nom:[
                {id:41,nom:"Telephone"},
                {id:42,nom:"Ordinateur"},
                {id:43,nom:"Television"},
                {id:44,nom:"Machine laver"},
                {id:45,nom:"Réfrigérateur"},
                {id:46,nom:"Climatiseur"},
                {id:47,nom:"Autre chose"}
            ]
        },
        {
            idgroup:555,
            group:"Autres dépenses",
            id:[51,52,53,54,55,56,57,58,59,60,61,62,62],
            nom:[
                {id:51,nom:"Étude & École"},
                {id:52,nom:"Transport"},
                {id:53,nom:"Voyager"},
                {id:54,nom:"Cadeaux"},
                {id:55,nom:"Restaurants & Cafés"},
                {id:56,nom:"Voiture"},
                {id:57,nom:"impôts"},
                {id:58,nom:"Abonnements"},
                {id:59,nom:"Amendes"},
                {id:60,nom:"Épargne"},
                {id:61,nom:"Versements mensuels"},
                {id:62,nom:"Louer"}
            ]
        }
    ])
    let HandlerInputBdg=(e) => {
        setValeurbdg(e.target.value)
    }
    let Btnbdg=() => {
        if(valeurbdg<=0){
            swal("Invalid", "Le montant du budget doit être positif et non null!", "error");
        }else{
            setVerfication(true)
        }
    }
    let HandlerDepenses=(e) => {
        setDepenses(e.target.value)
    }
    let HandlerCategorie=(e) => {
        setSelectcatg(e.target.value)
    }
    let BtnAjouter=() => {
        if(depenses<=0){
            swal("Invalid", "Le montant du Dépenses doit être positif et non null!", "error");
        }
        else if(selectcatg==0){
            swal("Invalid", "Le choix d’une catégorie est nécessaire!", "error");
        }else{
            let dataCatg=[...dataCategorie]
            dataCatg=dataCatg.filter(item=>item.id.includes(parseInt(selectcatg)))
            let detailsinfo=dataCatg[0].nom.filter((item)=>item.id===parseInt(selectcatg))
            setDataTable(()=>{
                return [{ig:dataCatg[0].idgroup,id:selectcatg,categorie:dataCatg[0].group,nom:detailsinfo[0].nom,prix:depenses}]
            })
            setDepensesplus(()=>{
                return parseInt(depenses)
            })
            setStatu((prevstate)=>{
                return !prevstate
            })
        }
    }
    return <>
        <div className="controler-budget">
            <div className={verfication?"hide":"show"}>
                <Prestentation HandlerInputBdg={HandlerInputBdg} Btnbdg={Btnbdg} />
            </div>
            <div className={verfication?"show":"hide"}>
                <Body budget={valeurbdg} TableData={dataTable} depenses={depensesplus} statu={statu}/>
                <SideBar HandlerDepenses={HandlerDepenses}  HandlerCategorie={HandlerCategorie} BtnAjouter={BtnAjouter}/>
            </div>
        </div>
    </>
}
export default ControlerBudget