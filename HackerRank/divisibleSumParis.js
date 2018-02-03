function divisibleSumPairs(n, k, ar) {
    // Complete this function
    var count=0; 
    // console.log(ar)
    for(var i=0;i<ar.length-1;i++){
        for(var m=i+1;m<ar.length;m++){
            // console.log(ar[i],ar[m],k)
            if((ar[i]+ar[m])%k===0){
                // console.log("match")
                count++; 
            }
        }
    }
    return count; 
}