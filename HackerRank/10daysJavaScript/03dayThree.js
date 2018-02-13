// Task: Arrays

// Complete the getSecondLargest function in the editor 
// below. It has one parameter: an array, nums, of n 
// numbers. The function must find and return the second 
// largest number in nums. 

function getSecondLargest(nums) {
    // Complete the function
    var max=nums[0];
    var secmax=nums[0];
    for(var i=1;i<nums.length;i++){
        if(nums[i]>max){
            secmax=max;
            max=nums[i];
        }else if(nums[i]<max&&nums[i]>secmax){
            secmax=nums[i];
        }
    }
    return secmax; 
}

// Task: Try, Catch, and Finally 

// Complete the reverseString function; it has one 
// parmeter, s. You must perform the following actions: 
// 1. Try to reverse string s using the split, reverse, 
//    and join methods. 
// 2. If an exception is thrown, catch it and print the 
//    contents of the exception's message on a new line. 
// 3. Print s on a new line. If no exception was thrown, 
//    then this should be the reversed string; if an 
//    exception was thrown, this should be the original string. 

function reverseString(s) {
    try{
        s.split("");
    }
    catch(err){
        console.log(err.message);
        console.log(s); 
    }
    s=s.split("");
    s=s.reverse(); 
    s=s.join("");
    console.log(s);   
}

// Task: Throw 

// Complete the isPositive function below. It has one 
// integer parameter, a. If the value of a is positive, 
// it must return the string YES. Otherwise, it must 
// throw an Error according to the following rules: 
// - If a is 0, throw an Error with message = Zero Error. 
// - If a is negative, throw an Error with message = Negative Error. 

function isPositive(a) {
    if(a>0){
        return 'YES';
    }else if(a<0){
        return "Negative Error";
    }else{
        return "Zero Error"
    }
}
