function getNodeValue( head, position) {
    var run=head; 
    var stick=head; 
    while(position>0){
        stick=stick.next; 
        position--; 
    }
    while(stick.next){
        run=run.next;
        stick=stick.next; 
        // console.log(run,stick)
    }
    return run.data; 
}