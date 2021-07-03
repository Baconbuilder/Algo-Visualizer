function mergesort() {
    mergesort = function () { }; //disables the function by pointing to an empty function
    let data = chart.data.datasets[0].data;
    let swapped = false;
    let timeout = 0;

    function mergeSort(arr, lower, higher) {
        if (lower < higher) {
            let mid = Math.floor((lower + higher) / 2); // finds the mid point
            mergeSort(arr, lower, mid);
            mergeSort(arr, mid + 1, higher);
            merge(arr, lower, mid, higher);
        }
    }
    
    function merge(arr, lower, mid, higher) {
        let l = mid - lower + 1;
        let r = higher - mid;
        let k = lower;
        let mergearr = [];
        let i = 0;
        let j = 0;
        
        //traverses through i and j and stores values in merge array
        while (i < l && j < r) {
            if (arr[lower + i] <= arr[mid + j + 1]) {
                mergearr[k] = arr[lower + i]; i++;
            } else {
                mergearr[k] = arr[mid + j + 1]; j++;
            }
            k++;
        }
        
        //checks for left over data
        while (j < r) {
            mergearr[k] = arr[mid + j + 1]; k++; j++;
        }
        while (i < l) {
            mergearr[k] = arr[lower + i]; k++; i++;
        }
       
        //moves data from merge array to the original data array
        for (let a = lower; a < k; a++) {
            arr[a] = mergearr[a];
            this.updateChart(data.slice(0), timeout);
            timeout += 30;
        }
    }

    while (swapped == false) {
        if (data.length > 0) {
            mergeSort(data, 0, data.length - 1);
            console.log(data);
            //console.log(arr);
            swapped = true;
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
            backgroundColor: '#2ECC71',
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

