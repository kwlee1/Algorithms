//Array: Min to Front
function minToFront(arr){
    var minidx=0
    for(var i=1;i<arr.length;i++){
        if(arr[i]<arr[minidx]){
            minidx=i;
        }
    }
    var min=arr[minidx];
    for(var j=minidx;j>0;j--){
        arr[j] = arr[j-1];
    }
    arr[0]=min; 
    return arr; 
}
console.log(minToFront([4,2,1,3,5]));

