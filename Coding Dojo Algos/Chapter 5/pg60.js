//New Node
function Node(val){
    this.val = val;
    this.next=null; 
}

//New Singly Linked List
function SLL(){
    this.head=null; 
}

// creating a singly linked list of 3 nodes
var mylist = SLL();
mylist.head = new Node(1);
mylist.head.next = new Node(2);
mylist.head.next.next = new Node(3);
// or
var mylist = SLL();
var node1 = Node(1);
var node2 = Node(2);
var node3 = Node(3);
mylist.head = node1;
node1.next = node2;
node2.next = node3;

function SLL(){
    this.head=null; 
    //List: Add Front
    this.addFront=function(node){
        node.next=this.head;
        this.head=node; 
    }
    //List:Contains
    this.contains=function(val){
        var run=this.head;
        while(run){
            if(run.val===val){
                console.log(true);
                return true; 
            }else{
                run=run.next
            }
        } 
        console.log(false);
        return false; 
    }
    //List: Remove Front
    this.removeFront=function(){
        if(this.head==null){
            return null; 
        }else{
            this.head=this.head.next;
            return this.head;
        }
    }
    //List: Front
    if(this.head===null){
        console.log("null");
        return null; 
    }else{
        console.log(this.head.val);
        return this.head.val; 
    }

}