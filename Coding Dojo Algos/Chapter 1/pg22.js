//Biggie Size
function makeItBig(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            arr[i] = "big";
        }
    }
    return arr; 
}
console.log(makeItBig([-1,3,5,-5]));

//Previous Lengths
function previousLengths(arr){
    for(var i=arr.length-1;i>0;i--){
        arr[i] = arr[i-1].length; 
    }
    return arr; 
}
console.log(previousLengths(["coding",'Dojo',"rocks"]))

//Print Low, Return High
function printLow(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }else if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(min);
    return max; 
}

//Add Seven to Most
function addSeven(arr){
    var result = []; 
    for(var i=1;i<arr.length;i++){
        result.push(arr[i]+7);
    }
    return result; 
}

//Print One, Return Another
function printOne(arr){
    console.log(arr[arr.length-2]);
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            return arr[i];
        }
    }
    return "no odd value"
}

//Reverse Array
function reverse(arr){
    for(var i=0, j=arr.length-1; i<j; i++,j--){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp; 
    }
    return arr; 
}

//Double Vision
function double(arr){
    var result = []; 
    for(var i=0; i<arr.length; i++){
        result.push(arr[i]*2);
    }
    return result; 
}

//Outlook: Negative
function outlookNeg(arr){
    var result = []; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            result.push(arr[i]);
        }else{
            result.push(arr[i]*-1);
        }
    }
    return result; 
}

//Count Positives
function countPos(arr){
    var count=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++; 
        }
    }
    arr[arr.length-1]=count; 
}

//Always Hungry
function hungry(arr){
    var count=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
            count++; 
        }
    }
    if(count===0){
        console.log("I'm hungry");
    }
}

//Evens and Odds
function evens(arr){
    var countodd = 0; 
    var counteven = 0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            counteven++; 
            countodd = 0; 
            if(counteven>=3){
                console.log("Even more so!");
            }
        }else{
            countodd++;
            counteven = 0;
            if(countodd>=3){
                console.log("That's odd!")
            }
        }
    }
}

//Swap Toward the Center
function swapTowardsCenter(arr){
    for(var i=0, j=arr.length-1; i<j; i+=2, j-=2){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

//Increment the Seconds
function increment(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            arr[i] = arr[i] +1; 
        }
        console.log(arr[i]);
    }
    return arr; 
}

//Scale the Array
function scale(arr,num){
    for(var i=0; i<arr.length; i++){
        arr[i]*=num; 
    }
    return arr; 
}