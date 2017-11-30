//Only Keep the Last Few
function keepLastFew(arr,num){
    for(var i=0;i<num;i++){
        arr[i]=arr[arr.length-num+i];
    }
    arr.length=num; 
    return arr; 
}

//Math Help
function mathHelp(M,B){
    return -B/M; 
}

//Poor Kenny
function whatHappensToday(){
    var rand=Math.random(); 
    if(rand<0.1){
        return "volcano";
    }else if(rand<0.25){
        return "tsunami";
    }else if(rand<0.45){
        return "earthquake";
    }else if(rand<0.7){
        return "blizzard";
    }else{
        return "meteor";
    }
}

//What Really Happened? 
function whatHappensToday(){
    var rand=Math.random(); 
    if(rand<0.1){
        console.log( "volcano");
    }else if(rand<0.15){
        console.log( "tsunami");
    }else if(rand<0.2){
        console.log( "earthquake");
    }else if(rand<0.25){
        console.log( "blizzard");
    }else if(rand<0.3){
        console.log( "meteor");
    }
}

//Soaring IQ
function soar(iq){
    for(var i=0.01;i<=0.98;i+=0.01){
        iq+=i; 
    }
    return iq; 
}
console.log(soar(101)); 

//Letter Grade
function letterGrade(score){
    if(score>90){
        console.log("Score: "+score+". Grade: A");
    }else if(score>80){
        console.log("Score: "+score+". Grade: B");
    }else if(score>70){
        console.log("Score: "+score+". Grade: C");
    }else if(score>60){
        console.log("Score: "+score+". Grade: D");
    }else{
        console.log("Score: "+score+". Grade: F");
    }
}
letterGrade(95);
letterGrade(68)

//More Accurate Grades
function accurateGrade(score){
    var message = "Score: "+score;
    if(score>90){
        message += ". Grade: A";
    }else if(score>80){
        message += ". Grade: B";
    }else if(score>70){
        message += ". Grade: C";
    }else if(score>60){
        message += ". Grade: D";
    }else{
        message += ". Grade: F";
    }
    if(score>60 && score<95){
        if(score%10>7){
            message += "+"
        }else if(score%10<3){
            message += "-"
        }
    }
    console.log(message); 
}
accurateGrade(95)
accurateGrade(62)
accurateGrade(89)