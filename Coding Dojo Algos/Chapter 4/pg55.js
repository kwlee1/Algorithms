//Zip Arrays into Map
function ziparray(arr1,arr2){
    var run=0;
    var result={}; 
    while(run<arr1.length){
        result[arr1[run]]=arr2[run];
        run++; 
    }
    console.log(result);
    return result; 
}
// ziparray(["abc",3,"yo"],[42,"wassup",true])

//Invert Hash
function invert(obj){
    var result={};
    for(i in obj){
        result[obj[i]]=i;
    }
    console.log(result);
    return result; 
}
var testobj={"name":"Zaphod","charm":"high","morals":"dicey"}
// invert(testobj)

//Associative Array: Number of Values (without .Length)
function objlength(obj){
    var count=0; 
    for(i in obj){
        count++; 
    }
    console.log(count); 
    return count; 
}
objlength(testobj)