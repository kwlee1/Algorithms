function utopianTree(n) {
    // Complete this function 
    var hgt=1; 
    while(n>0){
        hgt*=2;
        n--; 
        if(n>0){
            hgt+=1; 
            n--; 
        }
    }
    return hgt; 
}
