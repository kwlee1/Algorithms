function migratoryBirds(n, ar) {
    // Complete this function
    var check={};
    for(var i=0;i<ar.length;i++){
        if(check[ar[i]]){
            check[ar[i]]++;
        }else{
            check[ar[i]]=1; 
        }
    }
    var max="1";
    for(num in check){
        if(check[num]>check[max]){
            max=num;
        }
    }
    return max; 
}