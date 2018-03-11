function insert(head, data) {
    // console.log(head,data,'input');
    // console.log(this.head,'SLL')
    if(head){
        var run=head;
        while(run.next){
            run=run.next; 
        }
        run.next=new Node(data); 
    }else{
        this.head=new Node(data); 
    }
    return this.head; 
}