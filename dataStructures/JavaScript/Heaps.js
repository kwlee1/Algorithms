// Store elements using a zero-index array 
// From current index to left child: index*2+1
// From current index to right child: index*2+2
// From current index to parent: (index-2)/2

// functions
// - peek: look at min element
// - poll: remove min value and find new value 
//         move last element to top and shift down as needed 
// - add: new element to heap 
//        add new element to last spot and move up as needed 
//        if array/list length does not adjust automatically size needs to be adjusted as well 

class minHeap {
    constructor(){
        // this.minHeap=[10,15,20,17,25,18];
        this.minHeap=[];  
    }
    swap(index1,index2){
        // helper method to swap elements as needed
        var swaptemp=this.minHeap[index1];
        this.minHeap[index1]=this.minHeap[index2];
        this.minHeap[index2]=swaptemp; 
    }
    peek(){
        // look at min element without removing it
        if(this.minHeap.length==0){
            return "empty Heap"
        }else{
            return this.minHeap[0];
        }
    }
    poll(){
        // remove and return min element from heap
        // readjust heap as needed 
        if(this.minHeap.length==0){
            return "empty Heap" 
        }else{
            this.swap(0,this.minHeap.length-1); 
            var result=this.minHeap.pop(); 
            // swap last item in heap with current min and pop it
            // then readjust heap starting from index 0 
            var idx1=0;
            // check for a left child
            // if no left child you are done moving the element 
            while(this.minHeap[idx1*2+1]){
                // if right child exists and is less than left child set that to second index
                if(this.minHeap[idx1*2+2]!=undefined&&this.minHeap[idx1*2+2]<this.minHeap[idx1*2+1]){
                    var idx2=idx1*2+2;
                }else{
                    // else set left child to second index
                    idx2=idx1*2+1
                }
                // if element is greater than element below
                // swap the two elements and move index down to continue check
                if(this.minHeap[idx1]>this.minHeap[idx2]){
                    this.swap(idx1,idx2); 
                    idx1=idx2; 
                }else{
                    break; 
                }
            }
        }
        return result; 
    }
    addElem(num){
        var idxx=this.minHeap.length; 
        // console.log(idxx,num)
        this.minHeap[idxx]=num;
        // console.log(this.minHeap,"added num")
        // will continue swap until newest value is min value
        // (if it is min value, otherwise will break) 
        while(idxx>0){
            // if current index reaches 1 compare against index 0 
            if(idxx==1){
                var idxy=0; 
            }else{
                var idxy=Math.floor((idxx-2)/2)
            }
            // console.log(idxy,'idxy')
            if(this.minHeap[idxx]>this.minHeap[idxy]){
                break; 
            }else{
                this.swap(idxx,idxy);
                idxx=idxy; 
            }
        }
    }
}

// var testHeap = new minHeap 
// testHeap.addElem(2); 
// testHeap.addElem(4); 
// testHeap.addElem(3);
// testHeap.addElem(9);
// testHeap.addElem(8);
// testHeap.addElem(28);
// console.log(testHeap.minHeap) 
// testHeap.poll(); 
// console.log(testHeap.minHeap)
// testHeap.poll(); 
// console.log(testHeap.minHeap)
// testHeap.poll(); 
// console.log(testHeap.minHeap)
// testHeap.poll(); 
// console.log(testHeap.minHeap)