var isPalindrome = function(x) {
    var digits=(""+x).split("")
    var i=0; var j=digits.length-1; 
    while(j>i){
        if(digits[i]!=digits[j]){return false}
        i++;
        j--; 
    }
    return true; 
};