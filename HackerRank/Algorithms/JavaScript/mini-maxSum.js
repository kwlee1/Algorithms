function miniMaxSum(arr) {
    // Complete this function
    var sum=arr[0];
    var min=arr[0];
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        sum+=arr[i];
        if(arr[i]>max){
            max=arr[i];
        }else if(arr[i]<min){
            min=arr[i];
        }
    }
    return sum-max, sum-min; 
}
