// Is Unique: Impelement an algorithm to determine if a string 
// has all unique characters. What if you cannot use additional
// data structures? 

function isUnique(str){
    var ht={}
    for(var i=0;i<str.length;i++){
        if(ht[str[i]]){
            return false;  
        }else{
            ht[str[i]]=1; 
        }
    }
    return true; 
}
console.log(isUnique("test"))
console.log(isUnique("tes"))
console.log(isUnique("hello"))
console.log(isUnique("coding"))