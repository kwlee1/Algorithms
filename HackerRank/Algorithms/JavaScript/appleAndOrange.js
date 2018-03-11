function appleAndOrange(s, t, a, b, apple, orange) {
    // Complete this function
    var app=0;
    var ora=0;
    for(var i=0;i<apple.length;i++){
        var adrop=a+apple[i];
        if(adrop>=s&&adrop<=t){
            app++; 
        }
    }
    for(var k=0;k<orange.length;k++){
        var odrop=b+orange[k];
        if(odrop>=s&&odrop<=t){
            ora++; 
        }
    }
    return [app,ora]
}