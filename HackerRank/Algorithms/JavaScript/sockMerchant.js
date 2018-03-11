function sockMerchant(n, ar) {
    // Complete this function
    var socks={};
    for(var i=0;i<ar.length;i++){
        if(socks[ar[i]]){
            socks[ar[i]]++; 
        }else{
            socks[ar[i]]=1; 
        }
    }
    // console.log(socks)
    var count=0; 
    for(sock in socks){
        count+=Math.floor(socks[sock]/2);
    }
    // console.log(count)
    return count; 
}