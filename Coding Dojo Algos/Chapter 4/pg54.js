//Coin Change with Object
function coinobject(chg){
    var quarter=0;
    var dime=0;
    var nickel=0;
    var penny=0; 
    while(chg>25){
        chg-=25; 
        quarter++; 
    }
    while(chg>10){
        chg-=10;
        dime++; 
    }
    while(chg>5){
        chg-=5;
        nickel++; 
    }
    while(chg>0){
        chg--;
        penny++
    }
    var result={
        quarter:quarter,
        dime:dime,
        nickel:nickel,
        penny:penny
    }
    console.log(result);
    return result;
}
coinobject(240)



//Max/Min/Average with Object
function objectmma(arr){
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
    var result={
        max:max,
        min:min,
        avg:sum/arr.length
    }
    console.log(result);
    return result; 
}
objectmma([1,4,6,9,15])
