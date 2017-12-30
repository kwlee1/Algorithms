var reverse = function(x) {
    var digits=(""+x).split("")
    console.log(digits); 
    if(digits[0]=="-"){
        var i=1; 
    }else{
        var i=0; 
    }
    var j=digits.length-1; 
    while(j>i){
        var temp=digits[j];
        digits[j]=digits[i];
        digits[i]=temp; 
        j--;
        i++; 
    }
    console.log(digits); 
    var result = digits.join("");
    console.log(result); 
    result = Number(result); 
    console.log(Number.isInteger(result))
    console.log(result);
    return result; 
};
reverse(123);
reverse(-123)

// Note:
// Assume we are dealing with an environment 
// which could only hold integers 
// within the 32-bit signed integer range. 
// For the purpose of this problem, 
// assume that your function
//  returns 0 when the reversed integer overflows.