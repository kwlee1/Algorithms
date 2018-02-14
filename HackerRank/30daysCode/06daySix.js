// Task: Let's Review

// Given a string, S, of length N that is indexed from 0 to N-1, 
// print its even-indexed and odd-indexed characters as 2 space-separated 
// strings on a single line. 

function processData(input) {
    //Enter your code here
    var arr=input.split("\n");
    for(var i=1;i<arr.length;i++){
        var newstr="";
        var run1=0;
        var run2=1; 
        while(run1<arr[i].length){
            newstr+=arr[i][run1];
            run1+=2; 
        }
        newstr+=" "
        while(run2<arr[i].length){
            newstr+=arr[i][run2];
            run2+=2; 
        }
        console.log(newstr); 
    }
} 