function Node(val){
    this.val=val; 
    this.next=null; 
}

function SLL(){
    this.head=null; 
    //SList: Length
    this.length=function(){
        if(this.head===null){
            console.log("0");
            return 0;
        }else{
            var count=0; 
            var run=this.head; 
            while(run){
                run=run.next; 
                count++; 
            }
        }
        console.log(count);
        return count; 
    }
    //SList: Display
    this.display=function(){
        if(this.head===null){
            console.log("empty list");
        }else{
            var run=this.head; 
            while(run){
                console.log(run.val);
                run=run.next; 
            }
        }
    }
    //SList: Max
    this.max=function(){
        if(this.head===null){
            console.log("empty list");
        }else{
            var max=this.head.val; 
            var run=this.head; 
            while(run){
                if(run.val>max){
                    max=run.val; 
                }
                run=run.next; 
            }
            console.log("max",max); 
            return max; 
        }
    }
    //SList: Min
    this.min=function(){
        if(this.head===null){
            console.log("empty list");
        }else{
            var min=this.head.val; 
            var run=this.head; 
            while(run){
                if(run.val<min){
                    min=run.val;
                }
                run=run.next; 
            }
            console.log("min",min)
            return min; 
        }
    }
    //SList: Average
    this.avg=function(){
        if(this.head===null){
            console.log("empty list"); 
        }else{
            var sum=0; 
            var count=0; 
            var run=this.head;
            while(run){
                count++; 
                sum+=run.val; 
                run=run.next; 
            }
            console.log("avg", sum/count); 
            return sum/count; 
        }
    }
}


var mylist = new SLL();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
mylist.head = node1;
node1.next = node2;
node2.next = node3;

// mylist.length(); 
// mylist.display(); 
mylist.max(); 
mylist.min(); 
mylist.avg(); 