function birthdayCakeCandles(n, ar) {
    // Complete this function
    var max=ar[0];
    var count=1; 
    for(var i=1;i<ar.length;i++){
        if(ar[i]>max){
            max=ar[i];
            count=1; 
        }else if(ar[i]==max){
            count++; 
        }
    }
    return count; 
}