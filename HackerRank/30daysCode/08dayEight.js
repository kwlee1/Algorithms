// Task: Dictionaries and Maps 

// Given n names and phone numbers, assemble a phone book 
// that maps friends' names to their respective phone 
// numbers. You will then be given an unknown number of 
// names to query your phone book for. For each name queried, 
// print the associated entry from your phone book on a new 
// line in the form name=phoneNumber; if an entry for name 
// is not found, print Not found instead. 

function processData(input) {
    //Enter your code here
    var array=input.split("\n")
    var hashtable={}; 
    for(var i=1;i<=array[0];i++){
        var temp=array[i].split(" ")
        if(hashtable[array[k]]){
            continue; 
        }else{
            hashtable[temp[0]]=temp[1];    
        }
    }
    for(var k=array.length-array[0];k<array.length;k++){
        if(hashtable[array[k]]){
            console.log(array[k]+"="+hashtable[array[k]])
        }else{
            console.log("Not found");
        }
    }
} 

// Out of Test Case #0-#4, #1 was incorrect. n=100000 
// so couldn't figure out problem.

