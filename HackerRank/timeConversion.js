function timeConversion(s){
    // Complete this function
    var res=s.split(""); 
    res.pop(); 
    if(res.pop()=="A"){ 
        if(res[0]=="1"&&res[1]=="2"){
            res[0]="0";
            res[1]="0";
        }
        return res.join("")
    }else{
        if(res[1]>7){
            var temp=parseInt(res[0]);
            temp+=2; 
            res[0]=temp.toString(); 
        }else if(res[0]=="1"&&res[1]=="2"){
            res[0]="1";
            res[1]="2";
        }else{
            var temp=parseInt(res[0]);
            temp+=1; 
            res[0]=temp.toString(); 
            var temp2=parseInt(res[1]);
            temp2+=2;
            res[1]=temp2.toString(); 
        }
        return res.join("")
    }
}