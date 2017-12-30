//Sigma
function sigma(num){
    var sum=0; 
    for(var i=num; i>0; i--){
        sum += i; 
    }
    console.log(sum);
    return sum; 
}

sigma(3);
sigma(5);

//Factorial
function factorial(num){
    var result=1;
    for(var i=num; i>0; i--){
        result *= i; 
    }
    console.log(result);
    return result; 
}

factorial(3);
factorial(5);

//Star Art
function drawLeftStars(num){
	var starart="";
	for(var i=0; i<num; i++){
		starart+="*";
	}
	console.log(starart);
}
function drawRightStars(num){
	var starart="";
	for(var i=0; i<75-num; i++){
		starart+=" ";
	}
	for(var j=0; j<num; j++){
		starart+="*";
	}
	console.log(starart);
}
function drawCenterStars(num){
	var starart="";
	for(var i=0; i<(75-num)/2; i++){
		starart+=" ";
	}
	for(var j=0; j<num; j++){
		starart+="*";
	}
	for(var k=0; i<(76-num)/2; k++){
		starart+=" ";
	}
	console.log(starart);
}

//Character Art
function drawLeftChars(num, char){
	var charart="";
	for(var i=0; i<num; i++){
		charart+=char;
	}
	console.log(charart);
}
function drawRightChars(num, char){
	var charart="";
	for(var i=0; i<75-num; i++){
		charart+=" ";
	}
	for(var j=0; j<num; j++){
		charart+="char";
	}
	console.log(charart);
}
function drawCenterChars(num, char){
	var charart="";
	for(var i=0; i<(75-num)/2; i++){
		charart+=" ";
	}
	for(var j=0; j<num; j++){
		charart+="char";
	}
	for(var k=0; i<(76-num)/2; k++){
		charart+=" ";
	}
	console.log(charart);
}

