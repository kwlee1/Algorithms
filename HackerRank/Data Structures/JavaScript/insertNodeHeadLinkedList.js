function insert(head, data) {
    var newHead = new Node(data);
    if(head){
        newHead.next=this.head; 
         
    }
    this.head=newHead;
    return this.head;
}