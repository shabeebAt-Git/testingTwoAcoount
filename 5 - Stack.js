 class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(element){
       return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }

 }





 const stk = new Stack()

 console.log(stk.isEmpty());

 stk.push(20)
 stk.push(30)
 stk.push(40)
 stk.push(50)

 console.log(stk.size());

 stk.print()