// this solves the HR problem but I don't agree with the left right equal sections along with the concat at the end. 

function quickSort(arr) {
    // Complete this function
    var left=[];
    var right=[];
    var equal=[]; 
    var part=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<part){
            left.push(arr[i]);
        }else if(arr[i]>part){
            right.push(arr[i]);
        }else{
            equal.push(arr[i])
        }
    }
    var result=left.concat(equal).concat(right);     
    return result; 
}