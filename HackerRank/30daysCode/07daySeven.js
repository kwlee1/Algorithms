// Task: Arrays 

// Given an array, A, of N integers, print A's elements 
// in reverse order as a single line of space-separated numbers. 

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr.reverse(); 
    var result=arr.join(" ")
    console.log(result); 
    return result; 

}