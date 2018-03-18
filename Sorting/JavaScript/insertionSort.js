// Swap helper function used to swap items as I go through the insertion sort. 

function swap(arr,idx1,idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var run=i; 
        while(arr[run]<arr[run-1]&&run>0){
            swap(arr,run,run-1);
            run--; 
        }
    }
    return arr; 
}



var testArr=[2,18,5,4,3,19,4,2,1,9,8,28]
var result=insertionSort(testArr)
console.log(result)