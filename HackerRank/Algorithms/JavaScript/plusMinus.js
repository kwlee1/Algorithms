function plusMinus(arr){
    var plus=0;
    var minus=0;
    var zero=0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            plus++;
        }else if(arr[i]<0){
            minus++; 
        }else{
            zero++; 
        }
    }
    console.log(plus/arr.length);
    console.log(minus/arr.length);
    console.log(zero/arr.length);
}