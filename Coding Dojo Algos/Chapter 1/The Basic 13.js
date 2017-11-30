//Print 1-255
function print1To255(){
    for(var i=1;i<256;i++){
        console.log(i);
    }
}
print1To255(); 

//Print Odds 1-255
function printOdds1To255(){
    for(var i=1;i<256;i+=2){
        console.log(i); 
    }
}
printOdds1To255(); 

//Print Ints and Sum 0-255
function printIntsAndSum0To255(){
    var sum = 0; 
    for(var i=0;i<256;i++){
        console.log(i);
        sum+=i;
        console.log(sum);
    }
}
printIntsAndSum0To255(); 

//Print Array Values
function printArrayVals(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

//Print Max of Array
function printMaxOfArray(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max; 
}

//Print Average of Array
function printAverageOfArray(arr){
    var sum=0; 
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length; 
}

//Return Odds Array 1-255
function returnOddsArray1To255(){
    var array=[]; 
    for(var i=1;i<256;i++){
        array.push(i)
    }
    console.log(array);
}
returnOddsArray1To255(); 

//Square Array Values
function squareArrayVals(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
    return arr; 
}

//Return Array Count Greater than Y
function returnArrayCountGreaterThanY(arr,y){
    var count=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++; 
        }
    }
    return count; 
}

//Zero Out Array Negative Numbers
function zeroOutArrayNegativeVals(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr; 
}

//Print Max, Min, Average Array Values
function printMaxMinAverageArrayVals(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=0; 
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }else if(arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];
    }
    console.log(max,min,sum/arr.length);
}

//Shift Array Values Left
function shiftArrayValsLeft(arr){
    for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=0; 
}

//Swap String for Array Negative Values
function swapStringForArrayNegativeVals(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr; 
}