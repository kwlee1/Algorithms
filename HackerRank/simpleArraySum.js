function simpleArraySum(n, ar) {
    var res=ar[0];
    for(var i=1;i<ar.length;i++){
        res+=ar[i];
    }
    // console.log(res);
    return res; 
}
