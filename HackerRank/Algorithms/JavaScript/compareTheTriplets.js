function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var resa=0;
    var resb=0;
    if(a0>b0){
        resa++;
    }else if(b0>a0){
        resb++;
    }
    if(a1>b1){
        resa++;
    }else if(b1>a1){
        resb++;
    }
    if(a2>b2){
        resa++;
    }else if(b2>a2){
        resb++; 
    }
    return [resa,resb]
}