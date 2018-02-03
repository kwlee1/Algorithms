function nonDivisibleSubset(k, arr) {
    // Complete this function
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]%k;
    }
    var result={}; 
    for(var m=0;m<arr.length;m++){
        if(result[arr[m]]){
            result[arr[m]]++; 
        }else{
            result[arr[m]]=1; 
        }
    }
    var count=0; 
    if(result[0]){
        count=result[0]-1
    }
    // console.log(result); 
    for(num1 in result){
        for(num2 in result){
            if(parseInt(num1)+parseInt(num2)==k){
                // console.log("eliminate!",num1,num2,k)
                if(parseInt(num1)==parseInt(num2)){
                    count+=(result[num1]-1)
                }else if(result[num1]>result[num2]){
                    count+=result[num2];
                    delete result[num2];
                }else{
                    count+=result[num1];
                    delete result[num1]; 
                }
            }
            // console.log(count,"check count")
        }
    }
    // console.log(arr.length-count,"answer"); 
    return arr.length-count; 
}
nonDivisibleSubset(3,[1,7,2,4]); 
nonDivisibleSubset(9,[422346306,940894801,696810740,862741861,85835055,313720373])
