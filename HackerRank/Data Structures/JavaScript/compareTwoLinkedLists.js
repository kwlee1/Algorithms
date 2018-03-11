function compareLinkedLists( headA, headB) {
    if(headA==undefined&&headB==undefined){
        return 1; 
    }
    var run1=headA; 
    var run2=headB;
    while(run1&&run2){
        // console.log(run1.data,run2.data,'data')
        if(run1.data==run2.data){
            run1=run1.next;
            run2=run2.next; 
        }else{
            return 0; 
        }
    }
    if(run1==null&&run2==null){
        return 1; 
    }else{
        return 0; 
    }
}