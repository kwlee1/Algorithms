function diagonalDifference(a) {
    // Complete this function
    var sum1=0;
    var sum2=0;
    for(var i=0;i<a.length;i++){
        sum1+=a[i][i]
        sum2+=a[i][a.length-i-1]
    }
    return Math.abs(sum1-sum2)
}