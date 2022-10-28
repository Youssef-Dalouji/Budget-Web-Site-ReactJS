import React,{useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
let BodyStatistique=(props) => {
    let [informationData,setInformationData]=useState([])
    let [newarrayData,setNewarrayData]=useState([{id:111,valeur:0},{id:222,valeur:0},{id:333,valeur:0},{id:444,valeur:0},{id:555,valeur:0}])
    let [arraystatistque,setArraystatistque]=useState([])
    let [data,setData]=useState({
        labels:["Infrastructure","Nourriture","Vêtements","Appareils","Autres dépenses"],
        datasets:[
            {
                label:null,
                data:arraystatistque,
                backgroundColor:["#425B6F","#BAC4C6","#24BA97","#3396D9","#9965FF"]
            },
            
        ]
    })
    let [options,setOptions]=useState(
        {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                display: false,
              },
              title: {
                display: false,
                text: 'Chart.js Line Chart',
              },
            },
          }
    )
    useEffect(()=>{
        setInformationData(()=>{
            return [...props.informationData]
        })
    },[props.informationData])
    useEffect(()=>{
        let dataplus1=[...informationData]
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
    useEffect(()=>{
        setData(()=>{
            return {
                labels:["Infrastructure","Nourriture","Vêtements","Appareils","Autres dépenses"],
                datasets:[
                    {
                        label:null,
                        data:arraystatistque,
                        backgroundColor:["#425B6F","#BAC4C6","#24BA97","#3396D9","#9965FF"]
                    },
                    
                ]
            }
        })
    },[arraystatistque])
    return <>
        <div className="BodyStatistique">
            <div className="doughnut">
                <Doughnut data={data} options={options} />
            </div>
            <div className="bar">
                <Bar data={data} options={options} />
            </div>
        </div>
    </>
}
export default BodyStatistique