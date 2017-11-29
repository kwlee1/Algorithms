// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
function factorsOf(num){
    var limit = num; 
    var run = 2; 
    var result = []; 
    var hold = []; 
    while(run<limit){
        if(num%run===0){
            result.push(num/run);
            hold.push(run);
            limit = num/run; 
        }
        run++; 
    }
    while(hold.length>0){
        result.push(hold.pop());
    }
    return result; 
}
  
function isPrime(num){
    if(num==2){return true};
    if(num==3){return true};
    if(num%2===0){return false};
    if(num%3===0){return false};
    var i = 5; 
    var w = 2; 
    while(i*i<=num){
        if(num%i===0){return false};
        i += w; 
        w = 6 - w; 
    }
    return true; 
}
  
 function largestPrimeFactor(num){
    var factors = factorsOf(num);
    for(var i=0;i<factors.length;i++){
      if(isPrime(factors[i])){
        return factors[i];
      }
    }
}

console.log(largestPrimeFactor(600851475143));
// Answer: 6857