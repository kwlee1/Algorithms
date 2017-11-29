// Setting and Swapping
var myNumber = 42; 
var myName = "Keith"; 
console.log("myNumber =",myNumber,"myName =",myName);
var temp = myName; 
myName = myNumber; 
myNumber = temp; 
console.log("myNumber =",myNumber,"myName =",myName);

//Print and Count
//v1
var count = 0; 
for(var i = 512; i <= 4096; i++){
    if(i%5===0){
        console.log(i);
        count++; 
    }
}
console.log(count);
//v2
var count2 = 0; 
for(var i = 515; i < 4096; i += 5){
    console.log(i);
    count2++; 
}
console.log(count2); 

//Print -52 to 1066
for(var i = -52; i <= 1066; i++){
    console.log(i);
}

//Multiples of Six
var i = 0; 
while(i<=60000){
    if(i%6===0){
        console.log(i);
    }
    i++; 
}

//Don't Worry, Be happy
function beCheerful(){
    console.log("good morning",i)
}
for(var i = 0;i < 98; i++){
    beCheerful(); 
}

//Counting, the Dojo Way
for(var i = 1; i < 101; i++){
    if(i%10===0){
        console.log("Coding Dojo");
    }else if(i%5===0){
        console.log("Coding")
    }else{
        console.log(i); 
    }
}

//Multiples of Three - but Not All
for(var i = -300; i < 1; i++){
    if(i == -3 || i == -6){
        continue; 
    }else if(i%3===0){
        console.log(i);
    }
}

//What Do You Know? 
function wdyk(incoming){
    console.log(incoming); 
}
wdyk("this value");

//Printing Integers with While
var piww = 2000; 
while(piww<5281){
    console.log(piww);
    piww++; 
}

//Whoa, That Sucker's Huge...
var sum = 0; 
for(var i = -29999;i<30000;i+=2){
    sum += i; 
}
console.log(sum); 

//You Say It's Your Birthday
function birthday(x,y){
    if(x==3&&y==14){
        console.log("How did you know?");
    }else if(x==14&&y==3){
        console.log("How did you know?");
    }else{
        console.log("Just another day...")
    }
}

//Countdown by Fours
var fours = 2016; 
while(fours > 0){
    console.log(fours);
    fours-=4; 
}

//Leap Year
function leapYear(year){
    if(year%400===0){
        console.log("It is a leap year!");
    }else if(year%100===0){
        console.log("Normal year...");
    }else if(year%4===0){
        console.log("It is a leap year!");
    }else{
        console.log("Normal year...")
    }
}
leapYear(2016);
leapYear(2400);
leapYear(2200);
leapYear(2017);

//Flexible Countdown
function flexCount(low,high,mult){
    for(var i = high; i > low; i--){
        if(i%mult===0){
            console.log(i); 
        }
    }
}
flexCount(2,9,3)

//The Final Countdown
function finalCount(p1,p2,p3,p4){
    var runner = p2; 
    while(runner <= p3){
        if(runner%p1===0 && runner != p4){
            console.log(runner); 
        }
        runner++; 
    }
}
finalCount(3,5,17,9)