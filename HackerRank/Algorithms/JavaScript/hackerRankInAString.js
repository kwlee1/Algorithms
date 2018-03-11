function hackerrankInString(s) {
    // Complete this function
    var test="hackerrank";
    var run=0; 
    for(var i=0;i<s.length;i++){
        if(s[i]==test[run]){
            run++; 
        }else if(run==test.length){
            return "YES"
        }
    }
    if(run==test.length){
        return "YES"
    }else{
        return "NO"
    }
}