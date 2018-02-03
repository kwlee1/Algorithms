function solve(n, p){
    // Complete this function
    var front=Math.floor(p/2);
    if(n%2==1){
        var back=Math.floor((n-p)/2);
    }else{
        var back=Math.ceil((n-p)/2);
    }
    if(front<back){
        return front; 
    }else{
        return back; 
    }
}