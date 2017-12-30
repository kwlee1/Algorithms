function concat(){
    var str="";
	for(x in arguments){
		str+=arguments[x];
    }
    console.log(str)
	return str;
}
concat("hello ","world")

