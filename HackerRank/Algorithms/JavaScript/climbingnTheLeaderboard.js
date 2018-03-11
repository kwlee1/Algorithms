function climbingLeaderboard(scores, alice) {
    // Complete this function
    var ranks=[0];
    var run1=0; 
    while(run1<scores.length){
        if(scores[run1]==ranks[ranks.length-1]){
            run1++; 
        }else{
            ranks.push(scores[run1]);
            run1++
        }
    }
    // console.log(ranks); 
    var result =[]; 
    var run1=0; 
    var run2=ranks.length-1; 
    while(run1<alice.length&&run2>1){
        if(ranks[run2]>alice[run1]){
            result.push(run2+1); 
            run1++; 
        }else if(ranks[run2]==alice[run1]){
            result.push(run2);
            run2--;
            run1++; 
        }else{
            run2--; 
        }
    }
    while(run1<alice.length){
        if(alice[run1]>=ranks[run2]){
            result.push(1);
            run1++; 
        }else{
            result.push(2);
            run1++; 
        }
    }
    return result; 
}

// Ask friends about possible BST solution