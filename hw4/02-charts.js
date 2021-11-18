let backgroundColors = [
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
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
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
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
let charFamily = [];
let charCount = [];

async function fetchData() {
  try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    buildGraph(data);
  }
  catch(error){
    console.log(error);
  }
}

fetchData();

function buildGraph(data){
  let temp_array = [];
  data.forEach(element => {
    let family = element.family;
    if (family == "" || family == "None" || family == "Unknown") {
      family = "None";      
    }
    else if (family.indexOf("House") < 0) {
      family = "House " + family;
    }
    if (family == "House Lanister") {
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

  let renderChart = () => {
    let donutChart = document.getElementById('donut-chart');

    new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: charFamily,
        datasets: [
          {
            label: 'My First Dataset',
            data: charCount,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: 'bottom',
        },
      }
    });
  };

  renderChart();
}