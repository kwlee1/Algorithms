// Task: Hello, World

// 1. Use console.log() to print Hello, World! on a new line in the console, 
// which is also konwn as stdout or standard HTMLOutputElement. The code 
// for this portion of the task is already provided in the editor. 

// 2. User console.log() to print the contents of parameterVariable 
// (i.e., the argument passed to main). 

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}

//Task: Data Types

// 1. Convert secondInteger to an integer (Number type), then sum it
// with firstInteger and print the result on anew line using console.log. 

// 2. Convert secondDecimal to a floating-point number (Number type), 
// then sum it with firstDecimal and print the result on a new line 
// using console.log. 

// 3. Print the concatenation of firstString and secondString on a new
// line using console.log. Note that firstString must be printed first. 

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger+parseInt(secondInteger))
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal+parseFloat(secondDecimal));
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+secondString)
    
}