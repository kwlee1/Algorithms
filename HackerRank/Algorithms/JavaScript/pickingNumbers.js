function pickingNumbers(a) {
    // Complete this function
    var hash={};
    var nums=[];
    for(var i=0;i<a.length;i++){
        if(hash[a[i]]){
            hash[a[i]]++;
        }else{
            hash[a[i]]=1
            nums.push(a[i])
        }
    }
    nums.sort(); 
    var max=hash[nums[0]]
    for(var k=0;k<nums.length;k++){
        if(hash[nums[k]]+hash[nums[k]+1]>max){
            max=hash[nums[k]]+hash[nums[k]+1]
        }else if(hash[nums[k]]>max){
            max=hash[nums[k]]
        }
    }
    return max; 
}