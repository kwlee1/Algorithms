//New Node
function Node(val){
    this.val = val;
    this.next=null; 
}

//New Singly Linked List
function SLL(){
    this.head=null; 
}

//SList: Back
function back(ListNode){
    if(ListNode){
        var run=ListNode; 
        while(run.next){
            run=run.next; 
        }
        return run.val; 
    }else{
        return "empty list"; 
    }
}


function SLL(){
    this.head=null; 
    //SList: Remove Back
    this.removeBack=function(){
        var run=this.head;
        while(run.next.next){
            run=run.next; 
        } 
        run.next=null; 
        return this; 
    }
    //SList: Add Back
    this.addBack=function(newValue){
        var run=this.head; 
        while(run.next){
            run=run.next; 
        }
        run.next=Node(newValue); 
    }
}


//SList: Move Min to Front 
function minToFront(list){
    var prev=list.head;
    var min=list.head.val;  
    var run=list.head;
    while(run.next){
        if(run.next.val<min){
            prev=run; 
            min=run.next.val; 
        }
    }
    if(prev==list.head){
        return list; 
    }else{
        var minnode=prev.next; 
        prev.next=prev.next.next; 
        minnode.next=list.head; 
        list.head=minnode; 
        return list; 
    }
}

//SList: Move Max to Back 
function maxToBack(list){
    var prev=list.head; 
    var max=list.head.val;
    var run=list.head; 
    while(run.next){
        if(run.next.val>max){
            prev=run; 
            max=run.next.val; 
        }
    }
    if(prev.val==max){
        run.next=prev; 
        list.head=prev.next; 
        prev.next=null; 
    }else{
        var maxnode=prev.next; 
        prev.next=prev.next.next; 
        run.next=prev.next; 
        maxnode.next=null; 
    }
}