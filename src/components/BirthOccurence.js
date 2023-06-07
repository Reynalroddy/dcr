import React,{useRef,useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';
const BirthOccurence = () => {
    // const lineData = {
    //     labels: ['Maternity', 'Hospital', 'At Home', 'Car/Taxi', 'Bus', 'Train', 'Aeroplane'],
    //     datasets: [
    //         {
    //             label: '',
    //             data: [65, 59, 80, 81, 56, 55, 40],
 
    //             tension: .4,
    //             backgroundColor:'#B5E8A3',
    //             // fill: true
    //             fill: {
    //                 target: 'origin',
    //                 above: 'rgb(181, 232, 163,0.5)',  
                    
    //               }
    //         },
           
    //     ]
    // };
    const lineRef= useRef(null);
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let count = [];
       
        let labels=[];
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/place-of-ocurrance")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            for(const dataObj of res.data){
                labels.push(dataObj.BirthPlace_Desc)
               
                count.push(dataObj.Count);
                
            }

            setChartData(
                {
                    labels: labels,
                    datasets: [
                        {
                            label: '',
                            data: count,
                            // fill: false,
                            // borderColor: '#004E93',
                            tension: .4,
                            backgroundColor:'#B5E8A3',
                            // fill: true
                            fill: {
                                target: 'origin',
                                above: 'rgb(181, 232, 163,0.5)',  
                                // below: '#B5E8A3'    
                              }
                        },
                       
                    ]
                }
            )
    }).catch(err =>{
        console.log(err);
    })
}
    useEffect(() => {
      
    chart();
    }, [])
    if(load){
return (
    <Loading/>
)
    }
  return (
    <Chart type="line" data={chartData} ref={lineRef}  className='my-chart'/>
  )
}

export default BirthOccurence