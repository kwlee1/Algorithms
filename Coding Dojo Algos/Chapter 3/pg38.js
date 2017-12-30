//Array: Push Front
function pushFront(arr,val){
    for(var i=arr.length;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=val; 
    console.log(arr);
    return arr; 
}
testarray1 = [1,2,3];
pushFront(testarray1,0)

//Array: Pop Front 
function popFront(arr){
    var result = arr[0];
    for(var i=0; i<arr.length-1; i++){
        arr[i]=arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr); 
    console.log(result);
    return result; 
}
popFront(testarray1)

//Array: Insert At
function insertAt(arr,idx,val){
    for(var i=arr.length;i>idx;i--){
        arr[i]=arr[i-1];
    }
    arr[idx]=val; 
    console.log(arr);
}
var testarray2 = [2,6,8,3]
insertAt(testarray2,2,90)

//Array: Remove At
function removeAt(arr,idx){
    var result = arr[idx];
    for(var i=idx;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.length=arr.length-1;
    // console.log(arr); 
}
removeAt(testarray2,2);

//Array: Swap Pairs
function swapPairs(arr){
    for(var i=1;i<arr.length;i+=2){
        var temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp; 
    }
    console.log(arr);
    return arr; 
}
swapPairs([1,2,3,4]);
swapPairs(["Brendan",true,42]);

//Array: Remove Duplicates
function removeDupes(arr){
    var i=0; 
    var j=1; 
    var count=0; 
    while(j<arr.length){
        if(arr[i]==arr[j]){
            removeAt(arr,j);
            count++; 
        }else{
            i=j;
            j=i+1;
        }
    }
    console.log(arr);
    return arr; 
}
removeDupes([1,2,2,3,3,3,4,4,4,4])