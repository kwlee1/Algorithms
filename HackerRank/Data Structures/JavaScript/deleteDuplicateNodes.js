function removeDuplicates(head) {
    if(head==null){
        return null; 
    }
    var run=head; 
    var check=head.next; 
    while(check){
        if(run.data==check.data){
            run.next=check.next; 
            check=check.next; 
        }else{
            run=check; 
            check=check.next; 
        }
    }
    return head; 
}