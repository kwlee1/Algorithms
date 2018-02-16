// Task: Binary Numbers

// Given a base-10 integer, n, convnert it to binary (base-2). Then 
// find and print the base-10 integer denoting the maximum number of 
// consecutive 1's in n's binary representation. 

function main() {
    var n = parseInt(readLine());
    var bin=n.toString(2); 
    var max=1; 
    var count=0; 
    for(var i=0;i<bin.length;i++){
        if(bin[i]=="1"){
            count++; 
        }else{
            if(count>max){
                max=count; 
            }
            count=0; 
        }
    }
    if(count>max){
        console.log(count);
    }else{
        console.log(max); 
    }
}