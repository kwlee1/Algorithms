// Task: Create a Rectangle Object

// Complete the function in the editor. It has 
// two parameters: a and b. It must return an 
// object modeling a rectangle that has the 
// following properties: 
// - length: This value is equal to a. 
// - width: This value is equal to b. 
// - perimeter: This value is equal to 
//   2*(a+b)
// - area: This value is equal to a*b

function Rectangle(a, b) {
    this.length=a; 
    this.width=b; 
    this.perimeter=(2*this.length)+(2*this.width);
    this.area=this.length*this.width;    
}

// Task: Count Objects 

// Complete the function in the editor. It has 
// one parameter: an array, a, of objects. Each object 
// in the array has two integer properties denoted 
// by x and y. The function must return a count of all 
// such objects o in array a that satisfy o.x==oy. 

function getCount(objects) {
    var count=0; 
    for(var i=0;i<objects.length;i++){
        if(objects[i].x==objects[i].y){
            count++; 
        }
    }
    return count;
}

// Task: Classes

// Create a Polygon class that has the following properties: 
// - A constructor that takes an array of integer values 
//   describing the lengths of the polygon's sides. 
// - A perimeter() method that returns the polygon's perimeter. 

function Polygon(arr){
    this.sides=arr; 
    this.perimeter=function(){
        var sum=0;
        for(var i=0;i<this.sides.length;i++){
            sum+=this.sides[i];
        }
        return sum;
    }
}