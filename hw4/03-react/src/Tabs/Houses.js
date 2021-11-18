import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Doughnut } from 'react-chartjs-2';

const Houses = () => {
    const [chartData, setChartData] = useState({});

    const chart = () =>{
    let url = 'https://thronesapi.com/api/v2/Characters';
    let charFamily = [];
    let charCount = [];

    async function fetchData() {
        try{
          let response = await fetch(url);
          let data1 = await response.json();
          console.log(data1);
          buildGraph(data1);
          setChartData({
            labels: charFamily,
            datasets: [
                {
                    label: "House data",
                    data: charCount,
                    backgroundColor: [
                                    'rgba(54, 162, 235, 0.8)',
                                    'rgba(255, 206, 86, 0.8)',
                                    'rgba(255, 99, 132, 0.8)',
                                    'rgba(75, 192, 192, 0.8)',
                                    'rgba(153, 102, 255, 0.8)',
                                    'rgba(255, 159, 64, 0.8)',
                                    'rgba(199, 199, 199, 0.8)',
                                    'rgba(83, 102, 255, 0.8)',
                                    'rgba(40, 159, 64, 0.8)',
                                    'rgba(210, 199, 199, 0.8)',
                                    'rgba(78, 52, 199, 0.8)'],
                    borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(159, 159, 159, 1)',
                                'rgba(83, 102, 255, 1)',
                                'rgba(40, 159, 64, 1)',
                                'rgba(210, 199, 199, 1)',
                                'rgba(78, 52, 199, 1)'],
                    borderWidth: 1
                }
            ]
        })
        }
        catch(error){
          console.log(error);
        }
    }
      
    fetchData();
      
    function buildGraph(data1){
        let temp_array = [];
        data1.forEach(element => {
          let family = element.family;
          if (family === "" || family === "None" || family === "Unknown") {
            family = "None";      
            }
          else if (family.indexOf("House") < 0) {
            family = "House " + family;
            }
          if (family === "House Lanister") {
            family = "House Lannister";
            }
          temp_array.push(family);
          
        });
      
        let reducer = (acc, curr) => {
          if (acc.hasOwnProperty(curr)) {
            acc[curr]++;
            }else{
                acc[curr] = 1;
            }
          return acc;
        }
        let familyName = temp_array.reduce(reducer, {});
      
        for(const num in familyName){
          if (familyName[num] >=2) {
            charFamily.push(num);
            charCount.push(familyName[num]);
            }
        }

    };
    };

    useEffect(() => {
        chart();
    }, []);

    return (
        <div className="container w-75 mx-auto">
            <h1>Houses of Characters</h1>
            <div className="container border rounded bg-light" style={{width: "45%"}}>
                <Doughnut data={chartData}/>
            </div>
        </div>
    );
}

export default Houses;