function hurdleRace(k, height) {
    // Complete this function
    var max=height[0];
    for(var i=1;i<height.length;i++){
        if(height[i]>max){
            max=height[i]
        }
    }
    if(max>k){
        return max-k; 
    }else{
        return 0; 
    }
}