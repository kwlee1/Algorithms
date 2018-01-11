function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    if(v2>=v1){
        return "NO"
    }else{
        while(x2>x1){
            x2+=v2;
            x1+=v1;
        }
        if(x2==x1){
            return "YES"
        }else{
            return "NO"
        }
    }
}