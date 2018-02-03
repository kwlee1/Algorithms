// Task: Arithmetic Operators

// 1. getArea(length, width): Calculate and return the area 
// of a rectangle having sides length and width. 

// 2. getPerimeter(length, width): Calculate and return the 
// perimeter of a rectangle having sides length and width. 

function getArea(length, width) {
    let area;
    // Write your code here
    area=length*width; 
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter=(length*2)+(width*2)
    return perimeter;
}

// Task: Functions

// Implement a function named factorial that has one parameter: 
// an integer, n. It must return the value of n! (i.e., n factorial). 

function factorial(n){
    var result=1; 
    while(n>1){
        result*=n; 
        n--; 
    }
    return result; 
}

// Task: Let and Const

// 1. Declare a constant variable, PI, and assign it the value Math.PI. 
// You will not pass this challenge unless the variable is declared 
// as a constant and named PI(uppercase). 

// 2. Read a number, r, denoting the radius of a cricle from stdin. 

// 3. Use PI and r to calculate the area and perimeter of a circle 
// having radius r. 

// 4. Print area as the first line of output and print perimeter 
// as the second line of output. 

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI=Math.PI
    let r=inputString
    // Print the area of the circle:
    console.log(r[0]*r[0]*PI)
    
    // Print the perimeter of the circle:
    console.log(2*r[0]*PI)
}