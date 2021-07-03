function bubbleSort() {
  bubbleSort = function () { }; //disables the function by pointing to an empty function
  let data = chart.data.datasets[0].data;
  let swapped;

  let timeout = 0;
  do {
    swapped = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] > data[i + 1]) {
        swap(data, i);
        timeout += 30;
        this.updateChart(data.slice(0), timeout);
        swapped = true;
      }
    }
  } while (swapped);
}

// swaps i and the next variable afer i
function swap(arr, i) {
  let tmp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = tmp;
}

//updates the chart
function updateChart(data, timeout) {
  setTimeout(() => {
    chart.data.datasets[0].data = data;
    chart.update();
  }, timeout);
}

//creates the bars
var labels = [];
var bar_num = 100;
for (let i = 0; i < bar_num; i++) {
  labels.push(" ");
}

//chart js declaration
const chart = new Chart('myChart', {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      data: labels.map(() => Math.random()),
      backgroundColor: '#3498DB',
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false
        }
      }]
    },
    tooltips: {
      enabled: false
    }
  }

});



