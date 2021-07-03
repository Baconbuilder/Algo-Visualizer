function insertionSort() {
  insertionSort = function () { }; //disables the function by pointing to an empty function
  let data = chart.data.datasets[0].data;
  let swapped;
  let timeout = 0;

  do {
    swapped = false;
    for (let i = 1; i < data.length; i++) {
      if (data[i - 1] > data[i]) {
        insert(data, i);
        timeout += 150;
        this.updateChart(data.slice(0), timeout);
        swapped = true;
      }
    }
  } while (swapped);
}

//insert i into the sorted array
function insert(arr, i) {
  let tmp = arr[i];
  let j = i - 1;

  while (j >= 0 && tmp < arr[j]) {
    arr[j + 1] = arr[j];
    j -= 1;
  }
  arr[j + 1] = tmp;

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
      backgroundColor: '#FFC300',
      borderWidth: 1,

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

