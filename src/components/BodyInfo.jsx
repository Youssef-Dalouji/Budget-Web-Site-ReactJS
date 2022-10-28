import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
let BodyInfo=(props) => {
    let [balance,setBalance]=useState(0)
    let [despenses,setDepenses]=useState(0)
    useEffect(()=>{
        setDepenses((prevstate)=>{
            return parseInt(prevstate)+parseInt(props.depenses)
        })
    },[props.statu])
    useEffect(()=>{
        setBalance(()=>{
            return parseInt(props.budget)
        })
    },[props.budget])
    useEffect(()=>{
        setBalance(()=>{
            return parseInt(props.budget)-parseInt(despenses)
        })
    },[despenses])
    useEffect(()=>{
        if(props.dataSuppconvert.length===1){
            setBalance((prevstate)=>{
                return parseInt(prevstate)+parseInt(props.dataSuppconvert[0].prix)
            })
            setDepenses((prevstate)=>{
                return parseInt(prevstate)-parseInt(props.dataSuppconvert[0].prix)
            })
        }
    },[props.dataSuppconvert])
    return <>
        <div className="BodyInfo">
            <h1 class="display-1">Votre Budget Info</h1>
            <div className="Info">
                <div className="budget">
                    <FontAwesomeIcon className="fadollar" icon={faDollar} />
                    <div>
                        <h1>{props.budget}</h1>
                        <h3>Budget</h3>
                    </div>
                </div>
                <div className="depenses">
                    <FontAwesomeIcon className="fawallet" icon={faWallet} />
                    <div>
                        <h1>{despenses}</h1>
                        <h3>Dépenses</h3>
                    </div>
                </div>
                <div className="balance">
                    <FontAwesomeIcon className="fascalebalanced" icon={faScaleBalanced} />
                    <div>
                        <h1>{balance}</h1>
                       <h3>Balance</h3> 
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default BodyInfo