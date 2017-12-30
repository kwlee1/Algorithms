//Parens Valid
function parensValid(str){
    var count=0; 
    for(var i=0;i<str.length;i++){
        if(str[i]=="("){
            count++
        }else if(str[i]==")"){
            count--
        }
        if(count<0){
            console.log("false")
            return false; 
        }
    }
    if(count>0){
        console.log("false")
        return false; 
    }else{
        console.log("true");
        return true; 
    }
}

//Braces Valid
function bracesValid(str){
	var stack=[];
	for(var i=0; i<str.length; i++){
		if(str[i]=="("||str[i]=="{"||str[i]=="["){
			stack.push(str[i]);
        }else if(str[i]==")"&&stack.pop()!="("){
            console.log("false")
			return false;
		}else if(str[i]=="}"&&stack.pop()!="{"){
            console.log("false")
			return false;
		}else if(str[i]=="]"&&stack.pop()!="["){
            console.log("false")
			return false;
		}
    }
    if(stack.length===0){
        console.log("true");
        return true; 
    }else{
        console.log("false");
        return false; 
    }
}

//String: Is Palindrome
function isPalin(str){
    var run1=0; 
    var run2=str.length-2; 
    while(run1<(str.length/2)-1&&run2>str.length/2){
        if(str[run1]===str[run2]){
            run1++;
            run2--; 
        }else{
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true; 
}

function isPalin2(str){
    var run1=0; 
    var run2=str.length-2; 
    while(run1<(str.length/2)-1&&run2>str.length/2){
        if(str[run1]==" "||str[run1]=="."||str[run1]=="!"||str[run1]=="?"){
            run1++; 
        }else if(str[run2]==" "||str[run2]=="."||str[run2]=="!"||str[run2]=="?"){
            run2--; 
        }else if(str[run1].toLowerCase()===str[run2].toLowerCase()){
            run1++;
            run2--; 
        }else{
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true; 
}

//Longest Palindrome
