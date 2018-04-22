$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

function createChart(selector, settings) {
  settings = settings || {};

  var defaultSettings = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'History',
        backgroundColor: 'rgba(0, 255, 0, 0.01)',
        borderColor: '#21cf98',
        data: [0, 40, 5, 70, 20, 30, 45],
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'History',
        position: 'top'
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            // drawBorder: false
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            // drawBorder: false
          }
        }]
      }
    }
  };

  settings = Object.assign({}, defaultSettings, settings);

  var ctx = document.querySelector(selector).getContext('2d');
  var chart = new Chart(ctx, settings);
}
createChart('.chartTeam canvas');
createChart('.chartSummary canvas', {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Price',
      backgroundColor: 'rgba(0, 255, 0, 0.01)',
      borderColor: '#21cf98',
      data: [0, 40, 5, 70, 20, 30, 45],
      yAxisID: 'A'
    },
      {
        label: 'Twitter',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#1ea1f2',
        borderWidth: 1,
        data: [270000, 240000, 50000, 70000, 20000, 30000, 45000],
        yAxisID: 'B'
      }]
  },


  options: {
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true
        }
      }],
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {
          display: true
        },
        scaleLabel: {
          display: true,
          labelString: 'Price (USD)'
        }
      },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            display: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Twitter'
          }
        }]
    }
  }
});
createChart('.chartSocial canvas');
createChart('.chartNews canvas');


$(function () {
  $('#dateFrom').datetimepicker({
    defaultDate: new Date()
  });
  $('#dateTo').datetimepicker({
    defaultDate: new Date()
  });
});
