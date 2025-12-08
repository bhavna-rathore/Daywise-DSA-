class myQueue {
    constructor(n) {
        // Define Data Structures
        
      this.array= new Array(n)
       this.start=0
       this.end=0
       this.n= n
       this.size=0
       this.capacity=n
        
    }

    isEmpty() {
        // Check if queue is empty
       return this.size===0? true:false
    }

    isFull() {
        // Check if full
        return this.size===this.capacity?true:false
    }

    enqueue(x) {
        // Enqueue
        if (this.isFull()) return -1;
        this.array[this.end]= x
       this.end = (this.end + 1) % this.capacity; // wrap around
         this.size++
        
    }

    dequeue() {
        if (this.isEmpty()) return -1;
     let el= this.array[this.start]
        this.start = (this.start + 1) % this.capacity; // wrap around
   
        this.size--
        return el


        // Dequeue
    }

    getFront() {
        // Get front element
       if (this.isEmpty()) return -1;

        return this.array[this.start]
    }

    getRear() {
        // Get rear element
          if (this.isEmpty()) return -1;

        return this.array[(this.end - 1 + this.capacity) % this.capacity]
    }
}