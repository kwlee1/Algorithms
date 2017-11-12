//Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function threefive(x){
    var sum = 0; 
    var run = 0; 
    while(run < x){
      if(run % 5 === 0){
        sum += run;
      }else if(run % 3 === 0){
        sum += run; 
      }
      run ++; 
    }
    return sum; 
}
// Answer: 233168

