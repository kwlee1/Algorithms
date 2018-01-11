function aVeryBigSum(n, ar) {
    // Complete this function
    var res=ar[0];
    for(var i=1;i<ar.length;i++){
        res+=ar[i];
    }
    return res; 
}
