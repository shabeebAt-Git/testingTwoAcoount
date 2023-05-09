class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
         delete this.items[this.front]
         this.front++
         return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return  this.rear - this.front
    }

    print (){
        console.log(this.items);
    }


}


const q = new Queue()

console.log(q.isEmpty());

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

q.print()

console.log(q.dequeue());
console.log(q.peek());

q.print()