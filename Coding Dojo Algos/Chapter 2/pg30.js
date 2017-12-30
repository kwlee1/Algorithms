//Twelve-Bar Blues
function twelveBars(){
    for(var i=1;i<13;i++){
        console.log(i + ", chick, boom, chick");
    }
}
twelveBars(); 

//Fibonacci 
function fibonacci(x){
    if(x===0){
        console.log(0);
        return 0;
    }else if(x===1){
        console.log(1);
        return 1; 
    }
    var num1=0;
    var num2=1;
    for(var i=0; i<x-1;i++){
        var sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    console.log(sum); 
    return sum; 
}
fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);

//Sum to One Digit
function sumToOne(num){
	while(num>9){
		var sum=0;
		while(num>0){
			sum+=num%10;
			num=(num-num%10)/10;
		}
		num=sum;
    }
    console.log(num); 
	return num;
}

sumToOne(4);
sumToOne(14);
sumToOne(114); 
sumToOne(1115); 

//Clock Hand Angles
function clockHandAngles(sec){
    // console.log(sec/3600,"hours");
    var minsinsecs = sec%3600; //number of minutes, but still counted in seconds, not converted yet
    // console.log(minsinsecs/60, "minutes"); //converted for readibility 
    var seconds = minsinsecs % 60; 
    // console.log(seconds, "seconds");
    var hours = (sec/3600)%12;
    // console.log(hours,"hours minus extras");  
    var hourdegs = (hours/12)*360; //could also be hours*30, this shows percent of hours times 360 degrees full circle
    var mindegs = (minsinsecs/3600)*360; //or minsinsecs/100 , divide by 3600 secs in an hours (to get minutes value) times full circle
    var secdegs = (seconds/60)*360; //or seconds*6; 
    var message = "Hour hand: " + hourdegs + " degs. Minute hand: " + mindegs + " degs. Second hand: " + secdegs + " degs." 
    console.log(message); 
}
clockHandAngles(3601); 
clockHandAngles(119730); 

//Is Prime
function isPrime(num){
    if(num==2){return true};
    if(num==3){return true};
    if(num%2===0){return false};
    if(num%3===0){return false};
    var i = 5; 
    var w = 2; 
    while(i*i<=num){
        if(num%i===0){return false};
        i += w; 
        w = 6 - w; 
    }
    return true; 
}
console.log(isPrime(5))
console.log(isPrime(253))
console.log(isPrime(557))

