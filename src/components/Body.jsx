import React, { useEffect, useState } from "react";
import BodyInfo from "./BodyInfo";
import BodyStatistique from "./BodyStatistique";
import BodyTable from "./BodyTable";
let Body=(props) => {
    let [verfdataProps,setVerfDataProps]=useState([])
    let [infoSuppData,setInfoSuppData]=useState([])
    let [infoSuppDataplus,setInfoSuppDataplus]=useState([])
    let HandlerSupp=(id) => {
        let newDataSupp=[...verfdataProps]
        let InfoSupp=[...verfdataProps]
        newDataSupp=newDataSupp.filter((item,indx)=>{
            return parseInt(indx)!==parseInt(id)
        })
        InfoSupp=InfoSupp.filter((item,indx)=>{
            return parseInt(indx)===parseInt(id)
        })
        let newDataSuppplus=[...newDataSupp]
        setVerfDataProps(()=>{
            return [...newDataSuppplus]
        })
        setInfoSuppData(()=>{
            return [...InfoSupp]
        })
    }
    useEffect(()=>{
        setVerfDataProps((prevstate)=>{
            return [...prevstate,...props.TableData]
        })
    },[props.TableData])
    useEffect(()=>{
        setInfoSuppDataplus(()=>{
            return [...infoSuppData]
        })
    },[infoSuppData])
    return <>
        <div className="Body">
            <BodyInfo budget={props.budget} depenses={props.depenses} dataSuppconvert={infoSuppDataplus} statu={props.statu}/>
            <BodyStatistique informationData={props.TableData} dataSuppconvert={infoSuppDataplus}/>
            <BodyTable dataSuppconvert={infoSuppDataplus} informationData={props.TableData} budget={props.budget} datanew={verfdataProps} HandlerSupp={HandlerSupp} infoSuppDataplus={infoSuppData}/>
        </div>
    </>
}
export default Body