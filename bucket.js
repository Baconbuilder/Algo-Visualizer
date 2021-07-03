function bucketSort() {
    bucketSort = function () { }; //disables the function by pointing to an empty function
    const data = chart.data.datasets[0].data;
    let timeout = 0;
    let n = data.length;

    let bucket = new Array(n); // creates an empty bucket

    for(let i = 0; i < n; i++){
        bucket[i] = [];
    }
      
      //adds elements in the same range into the bucket
    for(let i = 0; i < n; i++) {
    let bucketIndex = Math.floor(data[i]) * n;
    bucket[bucketIndex].push(data[i]);
    }
    
    //sorts each bucket
    for(let i = 0; i < n; i++) {
    bucket[i].sort();
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0, size = bucket[i].length; j < size; j++) {
            data[index++] = bucket[i][j];
            timeout += 100;
            this.updateChart(data.slice(0), timeout);
      }
    }
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
        backgroundColor: '#8E44AD',
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
  
  