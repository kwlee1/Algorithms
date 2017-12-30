//Array: Shuffle 
function shuffle(arr){
    for(var i=0;i<arr.length;i++){
        var swap=Math.floor(Math.random()*arr.length)
        var temp=arr[i];
        arr[i]=arr[swap];
        arr[swap]=temp; 
    }
    console.log(arr)
    return arr; 
}
// shuffle([4,8,6,3,5,7])

//Array: Remove Range
function removeRange(arr,start,end){
    var count=end-start+1; 
    for(var i=start;i<end+1;i++){
        arr[i]=arr[i+count];
    }
    arr.length=arr.length-count; 
    console.log(arr);
    return arr; 
}
// removeRange([20,30,40,50,60,70],2,4)

//Intermediate Sums
function intermediateSums(arr){
    var run=0; 
    var count=0;
    var sum=0;  
    while(run<arr.length){
        if(count<10){
            sum+=arr[run];
            run++;
            count++; 
        }else{
            for(var i=arr.length;i>run;i--){
                arr[i]=arr[i-1];
            }
            arr[run]=sum; 
            sum=0; 
            count=0; 
            run++; 
        }
    }
    if(sum>0){
        arr.push(sum); 
    }
    console.log(arr);
    return arr; 
}
// intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2])

//Double Trouble
function doubleTrouble(arr){
    var run=0; 
    while(run<arr.length){
        for(var i=arr.length;i>run;i--){
            arr[i]=arr[i-1];
        }
        arr[run+1]=arr[run];
        run+=2; 
    }
    console.log(arr);
    return arr; 
}
doubleTrouble([4,"Ulysses",42,false]);

//Zip It
function zipIt(arr1,arr2){
    var run=0;
    var result=[];  
    while(run<arr1.length && run<arr2.length){
        result.push(arr1[run]);
        result.push(arr2[run]);
        run++;
    }
    if(run==arr1.length && run<arr2.length){
        while(run<arr2.length){
            result.push(arr2[run]);
            run++; 
        }
    }else if(run<arr1.length){
        while(run<arr1.length){
            result.push(arr1[run]);
            run++; 
        }
    }
    console.log(result);
    return result; 
}
zipIt([1,2,3],[10,20,30,40,50])