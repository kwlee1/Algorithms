function helper(k,arr){
    var check=true; 
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])%k===0){
                check=false; 
                break; 
            }
        }
        if((arr[i]+arr[j])%k===0){
            break; 
        }
    }
    return check; 
}
// console.log(helper(3,[1,7,2,4]))
// console.log(helper(3,[1,7,4]))

function nonDivisibleSubset(k,arr){
    if(helper(k,arr)){
        return arr.length; 
    }else{
        var newarrs=[];
        for(var k=0;k<arr.length;k++){
            var newarr=arr.slice(0);
            newarr[k]=newarr[newarr.length-1];
            newarr.pop();
            newarrs.push(newarr);
        }
        console.log(newarrs);
        for(var m=0;m<newarrs.length;m++){
            if(helper(k,newarrs[m])){
                console.log(newarrs[m].length)
                return newarrs[m].length; 
            }
        }
        for(var x=0;x<newarrs.length;x++){
            nonDivisibleSubset(newarrs[x]); 
        }
    }
}
nonDivisibleSubset(3,[1,7,2,4]); 


// function nonDivisibleSubset(k, arr) {
//     // Complete this function
//     var check=true; 
//     for(var i=0;i<arr.length-1;i++){
//         for(var j=i+1;j<arr.length;j++){
//             if((arr[i]+arr[j])%k===0){
//                 check=false; 
//                 break; 
//             }
//         }
//         if((arr[i]+arr[j])%k===0){
//             break; 
//         }
//     } 
//     if(check){
//         var max=arr.length; 
//     }else{
//         var result=[]; 
//         for(var k=0;k<arr.length;k++){
//             var newarr=arr.slice(0);
//             newarr[k]=newarr[newarr.length-1];
//             newarr.pop();
//             result.push(nonDivisibleSubset(k,newarr)); 
//         }
//         var max=result[0]
//         for(var m=0;m<result.length;m++){
//             if(result[m]>max){
//                 max=result[m];
//             }
//         }
//     }
//     return max; 
// }
// var test=nonDivisibleSubset(3,[1,7,2,4])
// console.log(test); 