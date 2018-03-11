// This version uses a merge helper function. 
// The recursive function breaks down the arrays until they're all single element arrays. 
// Then they return those elements, merge, and buid back up. 

function mergeSort(arr){
    if(arr.length==1){
        return arr; 
    }else{
        var mid=Math.floor(arr.length/2);
        var arrx=arr.slice(0,mid);
        var arry=arr.slice(mid,arr.length);
        arrx=mergeSort(arrx);
        arry=mergeSort(arry);
        return merge(arrx,arry); 
    }
}

function merge(arr1,arr2){
    var result=[]; 
    var run1=0;
    var run2=0; 
    while(run1<arr1.length&&run2<arr2.length){
        if(arr1[run1]<arr2[run2]){
            result.push(arr1[run1]);
            run1++; 
        }else{
            result.push(arr2[run2]);
            run2++; 
        }
    }
    while(run1<arr1.length){
        result.push(arr1[run1]);
        run1++; 
    }
    while(run2<arr2.length){
        result.push(arr2[run2]);
        run2++; 
    }
    return result; 
}

var testArr=[2,18,5,4,3,19,4,2,1,9,8,28]
var test=mergeSort(testArr)
console.log(test,'mergesort'); 