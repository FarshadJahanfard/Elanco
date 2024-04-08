

function fetchDogData(dogId) {
    const url = `http://localhost:3001/api/temperature/dog/${dogId}`; 
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}



const temperatureCanvas = document.getElementById('temperatureCanvas');
const ctx3 = temperatureCanvas.getContext('2d');


let myChart2 = new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: [], 
        datasets: [{
            data: [], 
          backgroundColor: 'rgba(88, 100, 241, 0.5)',
            borderColor: "#ffffff",
            borderWidth: 1,
            hoverOffset: 4,
        }]
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        cutout: '75%', 
        plugins: {
            title: {
                display: true,
                text: 'Current Temperature',
                color: "white",
                
            },
            legend: {
                display: false, 
            }
        }
    }
});

let globalTemp = "Loading.."; 


function updateChartData(dogId) {
    fetchDogData(dogId).then(data => {
       
 
        
        if(data.length > 0) {
            const latestTemperature = data[data.length - 1]["Temperature (C)"]; 
            globalTemp = latestTemperature; 
        }

        const labels = data.map((_, index) => `${index + 1}`);
       
        const temperature = data.map(item => item["Temperature (C)"]);

        var temperatureValueElement = document.querySelector('.temperature-value');
        if (temperatureValueElement) {
          temperatureValueElement.textContent = globalTemp + '°C';
        }


        myChart2.data.labels = labels;
        myChart2.data.datasets[0].data = temperature;

       
        document.getElementById('chartCenterText').textContent = `${globalTemp}°C`;

     
        myChart2.update();
    }).catch(error => {
        console.error('Error fetching or updating chart data:', error);
    });
}
var savedUsername = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
 
  updateChartData(savedUsername); 
});