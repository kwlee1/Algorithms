function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var sums=[]; 
    for(var i=0;i<4;i++){
        for(var k=0;k<4;k++){
            var hour=arr[i][k]+arr[i][k+1]+arr[i][k+2]+arr[i+1][k+1]+arr[i+2][k]+arr[i+2][k+1]+arr[i+2][k+2];
            sums.push(hour); 
        }
    }
    // console.log(sums);
    var max=sums[0];
    for(var x=1;x<sums.length;x++){
        if(sums[x]>max){
            max=sums[x];
        }
    }
    // console.log(arr); 
    console.log(max); 
}