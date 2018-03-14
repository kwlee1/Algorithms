function countingSort(arr) {
    // Complete this function
    var result=[]; 
    for(var i=0;i<100;i++){
        result[i]=0; 
    }
    for(var k=0;k<arr.length;k++){
        result[arr[k]]++; 
    }
    return result; 
}