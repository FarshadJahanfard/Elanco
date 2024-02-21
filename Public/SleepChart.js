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
        }
      },
      points: [{ y: 0}]
    }
  ],

  
},
function() {
  playPause();
}
);

function updateChart(chrt) {
chrt = chart || chrt;

var series = chrt.series(0),
  rValue = 60;

series.options({ shape_label: [{}, { text: labelText(rValue) }] }, { animation: false });
series.points(0).options({ y: rValue });
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