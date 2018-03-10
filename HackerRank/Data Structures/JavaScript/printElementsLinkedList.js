function print(head) {
    if(head){
        var run=head; 
        while(head){
            console.log(head.data);
            head=head.next; 
        }
    }

}