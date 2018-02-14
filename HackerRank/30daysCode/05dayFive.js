// Task: Day 5: Loops

// Given an integer, n, printn its first 10 multiples. Each multiple 
// n x i (where 1<=i<=10) should be printed on a new line in the form: 
// n x i = result. 

function main() {
    var n = parseInt(readLine());
    for(var i=1;i<11;i++){
        console.log(n+" x "+i+" = "+n*i); 
    }
}