//Assignment: Print 1-255
function print255(){
    for(var i=1;i<256;i++){
        console.log(i);
    }
}
// print255();

//Assignment: Odd Numbers
function oddnums(){
    for(var i=1;i<1001;i+=2){
        console.log(i);
    }
}
// oddnums(); 

//Assignment: Print Sum
function printsum(){
    var sum=0; 
    for(var i=1;i<5001;i+=2){
        sum+=i; 
    }
    console.log(sum);
    return sum; 
}
// printsum(); 

//Assignment: Iterating Through the Array
function iterate(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
// var arr1=[1,3,5,7,9,13]
// iterate(arr1); 

//Assignment: Find Max
function findmax(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max);
    return max; 
}
// var arr2=[-3,3,5,7]
// findmax(arr2); 

//Assignment: Find Average
function findavg(arr){
    var sum=0; 
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length; 
    console.log(avg);
    return avg; 
}
// var arr3=[1,3,5,7,20]
// findavg(arr3);

//Assignment: Array with Odd Numbers
function oddArr(){
    var y=[]; 
    for(var i=1;i<256;i+=2){
        y.push(i);
    }
    console.log(y);
    return y; 
}
// oddArr(); 

//Assignment: Greater Than Y
function greaterThanY(arr,y){
    var count=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count++; 
        }
    }
    console.log(count);
    return count; 
}
// var arr4=[1,3,5,7];
// greaterThanY(arr4,3)

//Assignment: Square the Values
function squares(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]*=arr[i];
    }
    console.log(arr);
    return arr; 
}
// var arr5=[1,5,10,-2];
// squares(arr5)

//Assignment: Eliminate Negative Numbers
function elimNeg(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0; 
        }
    }
    console.log(arr);
    return arr; 
}
// var arr6=[1,5,10,-2]
// elimNeg(arr6)

//Assignment: Max, Min, and Average
function mma(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
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
// var arr6=[1,5,10,-2]
// mma(arr6)

//Assignment: Shifting the values in the array
function shift(arr){
    for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=0; 
    console.log(arr);
    return arr; 
}
// shift([1,5,10,7,-2])

//Assignment: Number to String
function NtoS(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    console.log(arr);
    return arr; 
}
// NtoS([-1,-3,2])

//Assignment: Random Array
function randomArr(){
    var array=[];
    for(var i=0;i<10;i++){
        array.push(Math.round(Math.random()*100))
    }
    console.log(array);
    return array; 
}
// randomArr(); 

//Assignment: Swapping two values 
function swapTwo(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    console.log(arr);
    return arr;  
}
// swapTwo([2,3,5,7,6])

//Assignment: Reversing 
function reverse(arr){
    for(var i=0;i<arr.length/2;i++){
        var temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp; 
    }
    console.log(arr);
    return arr; 
}
// reverse([-3,5,1,3,2,10])
// reverse([-3,5,1,3,2])

//Assignment: Insert X in Y 
function insertXY(arr,x,y){
    for(var i=arr.length;i>y;i--){
        arr[i]=arr[i-1];
    }
    arr[y]=x;
    console.log(arr);
    return arr; 
}
// insertXY([1,3,5,7],10,2)

//Assignment: Removing Negatives
function removeNegs(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            for(var k=i;k<arr.length-1;k++){
                arr[k]=arr[k+1];
            }
            arr.pop(); 
        }
    }
    console.log(arr);
    return arr; 
}
// removeNegs([0,-1,2,-3,4,-5,6])

//without nested for loop
function removeNegs2(arr){
    var count=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++; 
        }else{
            arr[i-count]=arr[i];
        }
    }
    while(count--){
        arr.pop(); 
    }
    console.log(arr);
    return arr; 
}
// removeNegs2([0,-1,2,-3,4,-5,6])
