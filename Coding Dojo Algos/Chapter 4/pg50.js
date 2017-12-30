//Remove Blanks
function removeBlanks(str){
    str=str.split(" ");
    str=str.join("")
    console.log(str);
    return str; 
}
// removeBlanks("hello world")

//String: Get Digits
function getDigits(str){
    result="";
    for(var i=0;i<str.length;i++){
        if(Number(str[i])==str[i]){
            result+=str[i]
        }
    }
    console.log(result)
    return Number(result)
}
// getDigits("hell23o3wo24r7l8d")

//Acronyms
function acronyms(str){
    result="";
    str=str.split(" ")
    for(var i=0;i<str.length;i++){
        if(str[i][0]!=undefined){
            result+=str[i][0];
        }
    }
    result=result.toUpperCase(); 
    console.log(result); 
    return result; 
}
acronyms(" live from new york it's saturday night! ")

//Count Non-Spaces
function nonspace(str){
    str=str.split(" "); 
    str=str.join("");
    console.log(str.length); 
    return str.length; 
}
var teststr="You are driving me crazy"
console.log(teststr.length)
nonspace(teststr)

//Remove Shorter Strings 
function removeShort(arr,num){
    for(var i=0;i<arr.length;i++){
        if(arr[i].length<num){
            arr[i]=undefined; 
        }
    }
    console.log(arr);
    return arr; 
}
// removeShort(["hello","my","friend"],5)

