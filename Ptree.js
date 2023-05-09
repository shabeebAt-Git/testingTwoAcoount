class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinaryST {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
         if(this.isEmpty()){
            this.root = newNode 
         }else{
            this.insertNode(this.root,newNode)
         }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value ){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    search(root,target){
        if(!root){
            return false
        }else{
            if(root.value === target){
                return true
            }else if(target < root.value){
                this.search(root.left,target)
            }else{
                this.search(root.right,target)
            }
        }
    }

    validateBST() {
        return this.toValidateBST(this.root, -Infinity, Infinity);
    }

    toValidateBST(root, min, max) {
        if (!root) {
            return true;
        }

        if (root.value <= min || root.value >= max) {
            return false;
        }

        return (
            this.toValidateBST(root.left, min, root.value) &&
            this.toValidateBST(root.right, root.value, max)
        );
    }

}


const testBst  =  new BinaryST()

testBst.insert(10)
testBst.insert(20)
testBst.insert(4)
testBst.insert(1)
testBst.insert(16)


testBst.postOrder(testBst.root)

console.log(testBst.validateBST());