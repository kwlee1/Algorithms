// Task: Inheritance

// You are given two classes, Person and Student, where Person is the base class 
// and Student is the derived class. Completed code for Person and a declaration 
// for Student are provided for you in the editor. Observe that Student inherits 
// all the properties of Person. 
// Complete the student class by writing the following: 
// - A student class constructor which has 4 parameters: 
//   1. A string, firstName. 
//   2. A string, lastName. 
//   3. An integer, id. 
//   4. An integer array (or vector) of test scores, scores. 
// - A char calculate() method that calculates a Student object's average and
//   returns the grade characters representative of their calculated average: 
//   Grading Scale 
//   Average (a)
//   O: 90<=a<=100
//   E: 80<=a<90
//   A: 70<=a<80
//   P: 55<=a<70
//   D: 40<=a<55
//   T: a<40 

class Student extends Person {

    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName,lastName,identification,scores){
        super(firstName,lastName,identification)
        this.scores=scores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        var sum=0; 
        for(var i=0;i<this.scores.length;i++){
            sum+=this.scores[i];
        }
        switch(true){
                case(sum/this.scores.length<=100&&sum/this.scores.length>=90):
                    return "O";
                    break;
                case(sum/this.scores.length>=80):
                    return "E";
                    break;
                case(sum/this.scores.length>=70):
                    return "A";
                    break;
                case(sum/this.scores.length>=55):
                    return "P";
                    break;
                case(sum/this.scores.length>=40):
                    return "D";
                    break;
                default:
                    return "T"; 
                    break; 
        }
    }

}