function solve(grades){
    // Complete this function
    for(var i=0;i<grades.length;i++){
        if(grades[i]>37){
            if(grades[i]%5==3){
                grades[i]+=2;
            }else if(grades[i]%5==4){
                grades[i]+=1; 
            }
        }
    }
    return grades; 
}