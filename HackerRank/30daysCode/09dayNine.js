// Task: Recursion

// Write a factorial function that takes a positive integer, N as 
// a parameter and prints the result of N! (N factorial). 
// Note: If you fail to use recursion or fail to name your recursive 
// function factorial or Factorial, you will get a score of 0. 


function factorial(n) {
    // Complete this function
    if(n==2){
        return 2; 
    }else{
        return n*factorial(n-1); 
    }
}