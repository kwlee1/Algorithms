function deleteNode(head, position) {
    // console.log(head,position); 
    var run=head; 
    if(position==0){
        head=run.next; 
    }else{
        while(position>1){
            run=run.next;
            position--; 
        }
        run.next=run.next.next; 
    }
    
    return head; 
}