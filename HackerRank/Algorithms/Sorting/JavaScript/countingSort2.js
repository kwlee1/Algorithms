function countingSort(arr) {
    // Complete this function
    var counter=[]; 
    var result=[]; 
    for(var i=0;i<100;i++){
        counter[i]=0; 
    }
    for(var k=0;k<arr.length;k++){
        counter[arr[k]]++; 
    }
    // console.log(counter); 
    for(var m=0;m<counter.length;m++){
        while(counter[m]>0){
            result.push(m);
            counter[m]--; 
        }
    }
    return result; 
}