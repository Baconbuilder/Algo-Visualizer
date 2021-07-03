function selectionSort() {
  selectionSort = function () { }; //disables the function by pointing to an empty function
  let data = chart.data.datasets[0].data;
  let swapped;
  let timeout = 0;

  do {
    swapped = false;
    for (let i = 0; i < data.length; i++) {
      let min_val = i;
      for (let j = i; j < data.length; j++) {
        if (data[min_val] > data[j]) {
          min_val = j; // j becomes the minimum number
        }

      }
      if (min_val != i) {
        swap(data, i, min_val);
        timeout += 150;
        this.updateChart(data.slice(0), timeout);
        swapped = true;

      }
    }
  } while (swapped);
}

// swaps i with the minimum number
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j]
  arr[j] = tmp

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

//chart js delcaration
const chart = new Chart('myChart', {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      data: labels.map(() => Math.random()),
      backgroundColor: '#E74C3C',
      borderWidth: 1,
      //hoverBorderWidth: 1,
      //hoverBorderColor: '#000'

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

