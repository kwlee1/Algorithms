//Countdown
function countdown(num){
    var result = []; 
    while(num>=0){
        result.push(num);
        num--; 
    }
    console.log(result);
    console.log(result.length);
    return result; 
}
countdown(10)

//Print and Return
function printReturn(arr){
    console.log(arr[0]);
    return arr[1]; 
}

//First Plus Length
function fpl(arr){
    var result = arr[0] + arr.length; 
    return result; 
}
console.log(fpl([10,4,2,5]))
//string returns concatenated string, bollean is summated based on value 

//Values Greater than Second
function greaterSecond(arr){
    var count = 0; 
    for(var i=0; i<arr.length;i++){
        if(arr[i]>arr[1]){
            console.log(arr[i]); 
            count++; 
        }
    }
    return count; 
}
console.log(greaterSecond([1,3,4,7,9,13]))

//Values Greater than Second, Generalized
function greaterGeneral(arr){
    var result = []; 
    if(arr.length<2){
        return "array too short";
    }else{
        for(var i=0;i<arr.length;i++){
            if(arr[i]>arr[1]){
                result.push(arr[i]);
            }
        }
        console.log(result.length);
        return result; 
    }
}
console.log(greaterGeneral([1,3,4,7,9,13]));

//This Length, That Value
function jinx(x,y){
    if(x==y){
        console.log("Jinx!");
    }else{
        var run=0; 
        var result=[]; 
        while(run<x){
            result.push(y);
            run++; 
        }
        return result; 
    }
}

//Fit the First Value
function fitsFirst(arr){
    if(arr[0]>arr.length){
        console.log("Too big!");
    }else if(arr[0]<arr.length){
        console.log("Too small!");
    }else{
        console.log("Just right!");
    }
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(temp){
    var celc = (temp - 32) * 5 / 9; 
    console.log(celc+"C");
}
fahrenheitToCelsius(98);

//Celius to Fahrenheit
function celsiusToFahrenheit(temp){
    var fahr = (temp * 9 / 5) + 32; 
    console.log(fahr+"F");
}
celsiusToFahrenheit(0);
celsiusToFahrenheit(20);