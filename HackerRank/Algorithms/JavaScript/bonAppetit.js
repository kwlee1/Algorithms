function bonAppetit(n, k, b, ar) {
    // Complete this function
    var sum=0; 
    for(var i=0;i<ar.length;i++){
        sum+=ar[i];
    }
    sum-=ar[k];
    var anna=sum/2;
    if(anna==b){
        // console.log("Bon Appetit");
        return "Bon Appetit";
    }else{
        // console.log(b-anna);
        return b-anna; 
    }
}

bonAppetit(4,1,12,[3,10,2,9])