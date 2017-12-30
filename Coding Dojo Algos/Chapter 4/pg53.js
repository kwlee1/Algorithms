//Is Word Alphabetical 
function alphabetical(str){
    for(var i=0;i<str.length;i++){
        if(str[i]>str[i+1]){
            console.log("false");
            return false; 
        }
    }
    console.log("true");
    return true; 
}
// alphabetical("bee");
// alphabetical("care");
// alphabetical("ace");

//D Gets Jiggy
function jiggy(name){
    var result=name[1].toUpperCase();
    for(var i=2;i<name.length;i++){
        result+=name[i];
    } 
    result = result + " to the " + name[0] + "!"
    console.log(result);
    return result; 
}
// jiggy("Keith")

//Common Suffix 
function suffix(arr){
    var suffix=""; 
    for(var i=1;i<arr[0].length;i++){
        var check=arr[0][arr[0].length-i];
        var match=true; 
        for(var k=1;k<arr.length;k++){
            if(arr[k][arr[k].length-i]!=check){
                match=false; 
                break; 
            }
        }
        if(match){
            suffix=check+suffix; 
        }else{
            break; 
        }
    }
    console.log(suffix);
    return suffix; 
}
// suffix(["citation","conviction","incarceration"])

//Book Index
function bookIndex(arr){
    var result=""+arr[0]; 
    for(var i=1; i<arr.length; i++){
		if(arr[i]!=arr[i-1]+1){
			result+=", "+arr[i];
		}else if(arr[i]!=arr[i+1]-1){
			result+="-"+arr[i];
		}
	}
    console.log(result);
    return result; 
}
bookIndex([1,13,14,15,37,38,70])

//Drop the Mike
function micDrop(str){
    var result=""; 
	var start=0;
	var end=str.length-1;
	while(str[start]==" "){
		start++;
	}
	while(str[end]==" "){
		end--;
	}
	result+=str[start].toUpperCase();
	for(var j=start+1; j<=end; j++){
        if(str[j]=="M"&&str[j+1]=="i"&&str[j+2]=="k"&&str[j+3]=="e"){
            console.log("stunned silence")
			return "stunned silence";
        }
        if(str[j-1]==" "){
			result+=str[j].toUpperCase();
		}else{
			result+=str[j];
		}
    }
    console.log(result); 
	return result;
}