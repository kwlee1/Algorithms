function breakingRecords(score) {
    // Complete this function
    var max=score[0];
    var min=score[0];
    var maxbreak=0;
    var minbreak=0; 
    for(var i=1;i<score.length;i++){
        if(score[i]>max){
            max=score[i];
            maxbreak++;
        }else if(score[i]<min){
            min=score[i];
            minbreak++; 
        }
    }
    return [maxbreak,minbreak]; 
}