function staircase(n) {
    // Complete this function
    for(var i=1;i<=n;i++){
        var count=n-i;
        var star=i; 
        var result="";
        while(count--){
            result+=" ";
        }
        while(star--){
            result+="#";
        }
        console.log(result); 
    }
}
staircase(6);