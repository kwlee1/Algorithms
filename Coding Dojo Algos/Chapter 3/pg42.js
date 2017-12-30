//Array: Remove Negatives
function removeNegatives(arr){
    var count=0; 
    var run=0;
    while(run<arr.length){
        if(arr[run]<0){
            for(var i=run+1;i<arr.length;i++){
                arr[i-1]=arr[i];
            }
            count++; 
        }else{
            run++; 
        }
    }
    arr.length=arr.length-count; 
    console.log(arr);
    return arr; 
}
// removeNegatives([1,5,-7,6,10,-749,50])

//Array: Second-to-Last
function secondLast(arr){
    if(arr.length<2){
        console.log("null")
        return null
    }else{
        console.log(arr[arr.length-2]);
        return arr[arr.length-2];
    }
}
// secondLast([1,5,-7,6,10,-749,50])
// secondLast([2,2])
// secondLast([0])
// secondLast([42,true,4,"Kate",7])

//Array: Second-Largest
function secondLargest(arr){
    if(arr.length<2){
        console.log("null")
        return null
    }else{
        if(arr[0]>arr[1]){
            var max=arr[0];
            var result=arr[1];
        }else{
            var max=arr[1];
            var result=arr[0];
        }
        for(var i=2;i<arr.length;i++){
            if(arr[i]>max){
                result=max; 
                max=arr[i];
            }else if(arr[i]>result){
                result=arr[i];
            }
        }
    }
    console.log(result);
    return result; 
}
// secondLargest([1,5,-7,6,10,-749,50])
// secondLargest([2,2])
// secondLargest([0])

//Array: Nth-toLast
function nthToLast(arr,n){
    if(arr.length<n){
        console.log("null");
        return null; 
    }else{
        console.log(arr[arr.length-n]);
        return arr[arr.length-n];
    }
}

//Array: Nth-Largest
function nthLargest(arr,n){
    while(n>1){
        var max=0;
        for(var i=0;i<arr.length;i++){
            if(arr[i]>arr[max]){
                max=i;
            }
        }
        for(var j=max+1;j<arr.length;j++){
            arr[j-1]=arr[j];
        }
        arr.length--; 
        n--; 
    }
    var result=arr[0]
    for(var k=0;k<arr.length;k++){
        if(arr[k]>result){
            result=arr[k];
        }
    }
    console.log("result",result);
    return result; 
}
// console.log("nthlargest")
// nthLargest([1,2,3,4,5,6,7],2)
// nthLargest([1,2,3,4,5,6,7],3)
// nthLargest([1,2,3,4,5,6,7],4)

//Credit Card Validation
function ccv(arr){
    for(var i=arr.length-2;i>=0;i-=2){
        arr[i]*=2;
        if(arr[i]>9)
        arr[i]-=9; 
    }
    var sum=arr[0];
    for(var i=1;i<arr.length;i++){
        sum += arr[i];
    }
    if(sum%10===0){
        console.log("true")
        return true; 
    }else{
        console.log("false")
        return false; 
    }
}
// ccv([8,7,6,5,3,1,8,7,9,5,8,4,7,9,5]);
// ccv([8,4,6,0,0,5,9,4,7,2,4,7,1,3,8]);
// ccv([5,2,2,8,2])