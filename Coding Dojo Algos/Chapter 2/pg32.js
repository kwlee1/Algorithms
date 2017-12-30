//Extract-o-matic
function extractDigit(num,digit){
    num=Math.floor(num/Math.pow(10,digit))%10;
    console.log(num);
    return num; 
}

//or
// function extractDigit(num, digitNum){
// 	while(digitNum>0){
// 		num/=10;
// 		digitNum--;
// 	}
// 	while(digitNum<0){
// 		num*=10;
// 		digitNum++;
// 	}
// 	return Math.trunc(num%10);
// }

//Most Significant Digit 
function mostSignificantDigit(num){
    if(num>1){
        while(num>10){
            num=num/10; 
        }
        console.log(Math.floor(num%10));
        return Math.floor(num%10); 
    }else if(num<1&&num>0){
        while(num<1){
            num=num*10; 
        }
        console.log(Math.floor(num));
        return Math.floor(num); 
    }else if(num<0){
        num *= -1;
        mostSignificantDigit(num); 
    }
}
mostSignificantDigit(145);
mostSignificantDigit(54);
mostSignificantDigit(3592.76);
mostSignificantDigit(0.000093);
mostSignificantDigit(0.0395);
mostSignificantDigit(0.02805);