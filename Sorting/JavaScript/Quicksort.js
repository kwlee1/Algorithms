// This version uses two helper methods. Swap takes in an array and two indices and swaps those two values. 
// The partition function runs a partition sort and then returns the index that divides the two sorted sides. 
// The quickSort function then uses the index to see if any additional sorting needs to be done 
// with updated left and right edges. 


function swap(arr,idx1,idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
// first call
// var result = quickSort(arr, 0, arr.length - 1);

var testArr=[2,18,5,4,3,19,4,2,1,9,8,28]
var result=quickSort(testArr,0,testArr.length-1)
console.log(result)