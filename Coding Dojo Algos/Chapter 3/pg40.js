//Array: Reverse
function reverse(arr){
    var i=0; 
    var j=arr.length-1; 
    while(j>i){
        var temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp; 
        j--;
        i++; 
    }
    return arr; 
}
console.log(reverse([1,5,4,3]))
console.log(reverse([9,8,7,1,5]))

//Array: Rotate
function rotateArr(arr,shiftBy){
    while(shiftBy>0){
        var temp=arr[arr.length-1];
        for(var i=arr.length-1;i>0;i--){
            arr[i]=arr[i-1];
        }
        arr[0]=temp; 
        shiftBy--; 
    }
}

//Array: Filter Range 
function filterRange(arr,min,max){
    var runner=0; 
    while(runner<arr.length){
        if(arr[runner]>min&&arr[runner]<max){
            runner++; 
        }else{
            for(var i=runner;i<arr.length-1;i++){
                arr[i]=arr[i+1];
            }
            arr.length--; 
        }
    }
    console.log("filter",arr);
    return arr; 
}
filterRange([2,8,4,7,6,5,13,9,7,51,2],6,20)

//Array: Concat
function concat(arr1,arr2){
    var result = []; 
    for(var i=0;i<arr1.length;i++){
        result.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
        result.push(arr2[j]);
    }
    console.log(result);
    return result; 
}
concat([1,5,7,9],[7,9,6,3])

//Skyline Heights
function skyline(arr){
    var vision=0; 
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>vision){
            result.push(arr[i]);
            vision=arr[i];
        }
    }
    console.log(result);
    return result; 
}
skyline([-1,7,3]);
skyline([-1,1,1,7,3]);
skyline([0,4]);