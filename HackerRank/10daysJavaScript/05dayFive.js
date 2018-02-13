// Task: Inheritance

// We provide the implementation for a Rectangle 
// class in the editor. Perform the following tasks: 
// 1. Add an area method to Rectangle's prototype. 
// 2. Create a Square class that satisfies the following: 
//   - It is a subclass of Rectangle. 
//   - It contnains a constructor and no other methods. 
//   - It can use the Rectangle class' area method to print 
//     the area of a Square object. 

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function(){
    return this.w*this.h 
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle{
    constructor(w,h){
        super(w,h)
        this.w=w;
        this.h=w; 
    }
}

// Task: Template Literals 

// The code in the editor has a tagged template literal that passes the 
// area and perimeter of a rectangle to a tag function named sides. 
// Recall that the firust argument of a tag function is an array of string 
// literals from the template, and the subsequent values are the template's 
// respective expression values. 
// Complete the function in the editor so that it does the following: 
// 1. Finds the intial values of s1 and s2 by plugging the area and perimeter 
//    values into the formula: s=(P+-Math.sqrt(per^2)-16*area)/4 where A is 
//    the rectangle's area and P is its perimeter. 
// 2. Creates an array consisting of s1 and s2 and sorts it in ascending order. 
// 3. Returns the sorted array. 

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    var area=expressions[0]
    var per=expressions[1]
    var s1=(per-Math.sqrt((per*per)-(16*area)))/4
    var s2=(per+Math.sqrt((per*per)-(16*area)))/4
    return [s1,s2]
}

// Task: Arrow Functions 

// Complete the function in the editor. It has one parameter: an array, nums. 
// It must iterate through the array performing one of the following actions 
// on each element: 
// - If the element is even, multiply the element by 2. 
// - If the element is odd, multiply the element by 3. 
// The function must then return the modified array. 

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    for(var i=0;i<nums.length;i++){
        if(nums[i]%2===0){
            nums[i]*=2
        }else{
            nums[i]*=3
        }
    }
    return nums; 
    
}