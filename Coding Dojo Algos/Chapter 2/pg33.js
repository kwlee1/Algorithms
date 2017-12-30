//Gaming Fun(damentals)
function rollOne(){
    var roll = Math.floor((Math.random()*6)+1); 
    // console.log(roll);
    return roll; 
}
// rollOne();
// rollOne();
// rollOne();
// rollOne();
// rollOne();
// rollOne();

function playFives(num){
    while(num>0){
        var newroll = rollOne();
        if(newroll===5){console.log("That's good luck!")};
        num--;  
    }
}
// console.log("playing Fives")
// playFives(15); 

function playStatistics(){
    var firstroll = rollOne(); 
    var max = firstroll; 
    var min = firstroll;
    var num = 7; 
    while(num>0){
        var newroll = rollOne(); 
        if(newroll>max){max=newroll}
        if(newroll<min){min=newroll}
        num--; 
    } 
    console.log("max", max,"min", min)
}
// playStatistics(); 

function playStatistics2(){
    var firstroll = rollOne(); 
    var max = firstroll; 
    var min = firstroll;
    var sum = firstroll; 
    var num = 7; 
    while(num>0){
        var newroll = rollOne(); 
        if(newroll>max){max=newroll}
        if(newroll<min){min=newroll}
        sum += newroll; 
        num--; 
    } 
    console.log("max", max,"min", min, "sum", sum)
}
// playStatistics2(); 

function playStatistics3(num){
    var firstroll = rollOne(); 
    var max = firstroll; 
    var min = firstroll;
    var sum = firstroll; 
    while(num>1){
        var newroll = rollOne(); 
        if(newroll>max){max=newroll}
        if(newroll<min){min=newroll}
        sum += newroll; 
        num--; 
    } 
    console.log("max", max,"min", min, "sum", sum)
}

function playStatistics4(num){
    var firstroll = rollOne(); 
    var max = firstroll; 
    var min = firstroll;
    var sum = firstroll; 
    while(num>1){
        var newroll = rollOne(); 
        if(newroll>max){max=newroll}
        if(newroll<min){min=newroll}
        sum += newroll; 
        num--; 
    } 
    console.log("max", max,"min", min, "sum", sum, "average", sum/num)
}

//Statistics Until Doubles
function rollTSD(){
    var roll = Math.floor((Math.random()*20)+1); 
    // console.log(roll);
    return roll; 
}
function untilDouble(){
    var roll1 = rollTSD(); 
    var roll2 = rollTSD(); 
    var rolls = 2; 
    var min = roll1; 
    var max = roll1; 
    var sum = roll1 + roll2;
    if(roll2<roll1){min = roll2}
    if(roll2>roll1){max = roll2}
    while(roll2!=roll1){
        roll1 = roll2; 
        roll2 = rollTSD();
        rolls++; 
        sum = sum + roll2;  
        if(roll2<min){min = roll2}
        if(roll2>max){max = roll2}
    } 
    console.log(roll1, roll2); 
    console.log("rolls",rolls,"min",min,"max",max,"average",sum/rolls)
}
// untilDouble(); 

//Claire is Where? 