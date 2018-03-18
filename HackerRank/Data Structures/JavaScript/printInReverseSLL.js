function reversePrint(head) {
    if(head==null){return}
    var store=[]; 
    var run=head; 
    while(run){
        store.push(run.data);
        run=run.next; 
    }
    // console.log(store); 
    while(store.length>0){
        console.log(store.pop());
    }
}