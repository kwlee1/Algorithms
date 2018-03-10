function isValid(s){
    // Complete this function
    // console.log(s); 
    var hash={}; 
    for(var i=0;i<s.length;i++){
        if(hash[s[i]]){
            hash[s[i]]++; 
        }else{
            hash[s[i]]=1
        }
    }
    // console.log(hash); 
    var hash2={};
    var arr=[];
    for(var letter in hash){
        if(hash2[hash[letter]]){
            hash2[hash[letter]]++;
        }else{
            hash2[hash[letter]]=1;
            arr.push(hash[letter])
        }
    }
    // console.log(hash2); 
    // console.log(arr); 
    if(arr.length>2){
        return "NO"
    }else if(arr.length==1){
        return "YES"
    }else if(hash2['1']==1){
        return "YES"
    }else if(Math.abs(arr[0]-arr[1])==1&&(hash2[arr[0]]==1||hash2[arr[1]]==1)){
        return "YES"
    }else{
        return "NO"
    }
}