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

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
                
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    toTravere(root){
        if(!root){
            return null
        }else{
            console.log(root.value);
            this.toTravere(root.left)
            this.toTravere(root.right)
        }

    }



}

const test = new BST()

console.log(test.isEmpty());

test.insert(10)

test.insert(5)
test.insert(15)
test.insert(20)
test.toTravere(this.root)