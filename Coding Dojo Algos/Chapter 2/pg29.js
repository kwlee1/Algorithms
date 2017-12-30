//Threes and Fives 
function threeFives(){
    var sum = 0; 
    for(var i=100;i<=4000000;i++){
        if(i%15===0){
            sum = sum; 
        }else if(i%3===0 || i%5===0){
            sum += i; 
        }
    }
    console.log(sum);
    return sum; 
}
threeFives(); 

function betterThreeFives(start,end){
    var sum = 0; 
    for(var i=start;i<=end;i++){
        if(i%15===0){
            sum = sum; 
        }else if(i%3===0 || i%5===0){
            sum += i; 
        }
    }
    console.log(sum);
    return sum; 
}

function generateCoinChange(cents){
    console.log(cents+" cents can be represented by:");
	console.log("dollars: "+((cents-cents%100)/100));
	cents=cents%100;
	console.log("half-dollars: "+((cents-cents%50)/50));
	cents=cents%50;
	console.log("quarters: "+((cents-cents%25)/25));
	cents=cents%25;
	console.log("dimes: "+((cents-cents%10)/10));
	cents=cents%10;
	console.log("nickels: "+((cents-cents%5)/5));
	console.log("pennies: "+cents%5);
}
generateCoinChange(104);

//Messy Math Mashup
function messyMath(num){
    var sum=0; 
    for(var i=0;i<=num;i++){
        if(i == num/3){
            console.log(-1)
            return -1; 
        }else if(i%3===0){
            sum = sum; 
        }else if(i%7===0){
            sum += (i*2);
        }else{
            sum += i; 
        }
    }
    console.log(sum);
    return sum; 
}
messyMath(4);
messyMath(8);
messyMath(15);