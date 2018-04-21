
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

function createChart (selector) {
  var ctx = document.querySelector(selector).getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "History",
        backgroundColor: 'rgba(0, 255, 0, 0.01)',
        borderColor: '#21cf98',
        data: [0, 80, 5, 70, 20, 30, 45],
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: "History",
        position: "top"
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
  });
}

createChart('.chartTeam canvas');
createChart('.chartSummary canvas');
