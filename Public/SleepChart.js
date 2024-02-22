async function fetchDogData2(dogId) {
  const url = `http://localhost:3001/api/sleepingPattern/dog/${dogId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const idealHeartRateMidpoint = 90; // base point of the acceptable
    const idealBreathingRateMidpoint = 20;  

    function calculateDeviation(value, midpoint) {
      return Math.abs(value - midpoint) / midpoint;
    }

    const heartRateScores = data.map(item => 1 - calculateDeviation(item["Heart Rate (bpm)"], idealHeartRateMidpoint));
    const breathingRateScores = data.map(item => 1 - calculateDeviation(item["Breathing Rate (breaths/min)"], idealBreathingRateMidpoint));

    const averageScores = heartRateScores.map((hr, index) => (hr + breathingRateScores[index]) / 2);
    const overallSleepQualityScore = averageScores.reduce((acc, curr) => acc + curr, 0) / averageScores.length;

    const sleepPerformanceIndex = overallSleepQualityScore * 100;
    const roundedIndex = Math.round(sleepPerformanceIndex);
    return roundedIndex;
  } catch (error) {
    console.error('Error fetching dog data:', error);
  }
}

var INTERVAL_ID,
animationDuration = 420,
updateInterval = 800;
var chart = JSC.chart(
'chartDiv',
{
  debug: true,
  type: 'gauge ',
  legend_visible: false,
  animation_duration: animationDuration,
  xAxis: {
    scale: {
      // Helps position the marker on top of the y Axis.
      range: [0, 1]
    }
  },
  palette: {
    pointValue: '%yValue',
    ranges: [
      { value: [0, 30], color: '#FF5353' },
      { value: [30, 70], color: '#FFD221' },
      { value: [70, 100], color: '#77E6B4' }

    ]
  },
  yAxis: {
    defaultTick: {
      // Pads around the gauge
      padding: 13,
      label_visible: false
    },
    line: {
      width: 15,
      // Gaps occur at tick intervals defined below.
      breaks_gap: 0.03,
      color: 'smartPalette'
    },
    scale: { range: [0, 100], interval: 10 }
  },

  defaultSeries: {
    opacity: 1,
    mouseTracking_enabled: false,
    shape: {
      label: [
        {
          text: '%value%',
          style: { fontSize: 48 },
          align: 'center',
          verticalAlign: 'middle'
        },
        {
          text: labelText(50),
          style: { fontSize: 48 },
          align: 'center',
          verticalAlign: 'middle'
        }
      ]
    }
  },
  series: [
    {
      type: 'marker',
      defaultPoint: {
        marker: {
          outline: { width: 10, color: 'currentColor' },
          fill: 'white',
          type: 'circle',
          size: 30
        },
      }, // Add a comma here
      points: [{ y: 0 }],
    },
  ],

  
},
function() {
  playPause();
}
);

async function updateChart(chrt) {
  chrt = chart || chrt;
  
  try {
    var value3 = await fetchDogData2('CANINE001');
    var series = chrt.series(0);

    series.options({ shape_label: [{}, { text: labelText(value3) }] }, { animation: false });
    series.points(0).options({ y: value3 });
  } catch (error) {
    console.error('Error updating chart:', error);
  }
}

function playPause(val) {
if (val) {
  clearInterval(INTERVAL_ID);
} else {
  INTERVAL_ID = setInterval(function() {
    updateChart(chart);
  }, updateInterval);
}
}
// logic 
function labelText(value) {
var fgg = value >= 70 ? 'Great!' : value >= 30 ? 'Good' : 'Fair';
return '<span style="fontSize: 32px">' + fgg + '</span>';
}