// Task: 2D Arrays

// Given a 6x6 2D Array, A: 
// [[1,1,1,0,0,0],
//  [0,1,0,0,0,0],
//  [1,1,1,0,0,0],
//  [0,0,0,0,0,0],
//  [0,0,0,0,0,0],
//  [0,0,0,0,0,0]]
// We define an hourglass in A to be the subset of values
// with indices falling in this pattern in A's graphical 
// representation: 
// a b c 
//   d  
// e f g 
// There are 16 hourglasses in A, and an hourglass sum is 
// the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in A, 
// then print the maximum hourglass sum. 

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var max=arr[0][0]+arr[0][1]+arr[0][2]+arr[1][1]+arr[2][0]+arr[2][1]+arr[2][2]; 
    for(var i=0;i<4;i++){
        for(var k=0;k<4;k++){
            var temp=arr[i][k]+arr[i][k+1]+arr[i][k+2]+arr[i+1][k+1]+arr[i+2][k]+arr[i+2][k+1]+arr[i+2][k+2]
            if(temp>max){
                max=temp; 
            }
        }
    }
    console.log(max); 
}