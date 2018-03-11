function solve(n, s, d, m){
    // Complete this function
    var count=0; 
    for(var i=0;i<s.length-m+1;i++){
        var sum=0;
        for(var k=0;k<m;k++){
            sum+=s[k+i];
        }
        if(sum==d){
            count++; 
        }
    }
    return count; 
}