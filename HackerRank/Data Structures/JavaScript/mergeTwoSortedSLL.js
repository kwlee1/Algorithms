function mergeLinkedLists( headA, headB) {
    if(headA==null){
        return headB; 
    }else if(headB==null){
        return headA; 
    }else if(headA.data>headB.data){
        var newHead=headB; 
        var runA=headA; 
        var runB=headB.next; 
    }else{
        var newHead=headA; 
        var runB=headB; 
        var runA=headA.next; 
    }
    var runNew=newHead; 
    while(runA&&runB){
        if(runA.data>runB.data){
            runNew.next=runB;
            runNew=runNew.next; 
            runB=runB.next; 
        }else{
            runNew.next=runA; 
            runNew=runNew.next; 
            runA=runA.next; 
        }
    }
    while(runA){
        runNew.next=runA; 
        runNew=runNew.next;
        runA=runA.next; 
    }
    while(runB){
        runNew.next=runB; 
        runNew=runNew.next; 
        runB=runB.next; 
    }
    return newHead; 
}