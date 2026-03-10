function selectionSort(arr){

    for(let i=0;i<arr.length-1;i++){

        for(let j=i+1; j<arr.length; j++){

            if(arr[i] > arr[j]){
                arr[i] = arr[j] + arr[i]
                arr[j] = arr[i] - arr[j]
                arr[i] = arr[i] - arr[j]
            }

        }

    }

    console.log(arr)
}

var arr = [5, 6, 1, 3];
selectionSort(arr);