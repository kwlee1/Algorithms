//String: Reverse
function reverseString(str){
    var result=""; 
    for(var i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    console.log(result);
    return result; 
}
// reverseString("creature")

//Remove Even-Length Strings
function removeEven(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i].length%2===0){
            for(var k=i+1;k<arr.length;k++){
                arr[k-1]=arr[k];
            }
            arr.length--; 
            i--; 
        }
    }
    console.log(arr);
    return arr; 
}
// removeEven(["Nope!","Its","Kris","starting","with"])
//using a while loop instead to avoid the janky i-- 
function removeEven2(arr){
    var run=0; 
    while(run<arr.length){
        if(arr[run].length%2===0){
            for(var k=run+1;k<arr.length;k++){
                arr[k-1]=arr[k];
            }
            arr.length--; 
        }else{
            run++; 
        }
    }
    console.log(arr);
    return arr; 
}
// removeEven2(["Nope!","Its","Kris","starting","with"])


//Integer to Roman Numerals
function integerToRomanNumerals(int){
	var bp=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
	var roman="";
	for(var i=0; i<bp.length; i++){
		while(int>=bp[i][0]){
			roman+=bp[i][1];
			int-=bp[i][0];
		}
    }
    console.log(roman)
	return roman;
}

//Roman Numerals to Integer
function romanNumeralstoInteger(str){
	var int=0;
	for(var i=0; i<str.length; i++){
		if(str[i]=="M"){
			int+=1000;
		}else if(str[i]=="C"){
			if(str[i+1]=="M"){
				int+=900;
				i++;
			}else if(str[i+1]=="D"){
				int+=400;
				i++;
			}else{
				int+=100;
			}
		}else if(str[i]=="D"){
			int+=500;
		}else if(str[i]=="X"){
			if(str[i+1]=="C"){
				int+=90;
				i++;
			}else if(str[i+1]=="L"){
				int+=40;
				i++;
			}else{
				int+=10;
			}
		}else if(str[i]=="L"){
			int+=50;
		}else if(str[i]=="I"){
			if(str[i+1]=="X"){
				int+=9;
				i++;
			}else if(str[i+1]=="V"){
				int+=4;
				i++;
			}else{
				int+=1;
			}
		}else if(str[i]=="V"){
			int+=5;
		}
    }
    console.log(int)
	return int;
}