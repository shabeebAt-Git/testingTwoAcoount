class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    emptyOrNot() {
        return this.root === null
    }

    insert(value) {
        const nodeNew = new Node(value) 
        if (this.emptyOrNot()) {
            this.root = nodeNew
        }else{
            this.forInserting( this.root,nodeNew)
        }

    }

    forInserting(root,newNode){
       
        if(newNode.value < root.value){
            
        }
    }

}