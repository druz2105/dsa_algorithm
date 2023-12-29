const fs = require('fs');
class Node {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }

}

class Tree {
    constructor() {
        this.root = null;
        this.inorderArray = [];
        this.preorderArray = [];
        this.postorderArray = [];
    }
    addData(data){
        const node = new Node(data);
        if(!this.root){
            this.root = node
        } else {
            let root = this.root
            while (true) {
                if(data < root.data){
                    if(root.left){
                        root = root.left
                    } else {
                        root.left = node
                        break
                    }
                } else {
                    if(root.right){
                        root = root.right
                    } else {
                        root.right = node
                        break
                    }
                }
            }

        }
    }

    inOrderTraversal(node){
        if(!this.root){
            console.log("Tree is empty.")
        }
        if(node === this.root){
            this.inorderArray = []
        }
        if(node.left){
            this.inOrderTraversal(node.left)
        }
        this.inorderArray.push(node.data)
        if(node.right){
            this.inOrderTraversal(node.right)
        }
    }

    preOrderTraversal(node){
        if(!this.root){
            console.log("Tree is empty.")
        }
        if(node === this.root){
            this.preorderArray = []
        }
        this.preorderArray.push(node.data)
        if(node.left){
            this.preOrderTraversal(node.left)
        }
        if(node.right){
            this.preOrderTraversal(node.right)
        }
    }

    postOrderTraversal(node){
        if(!this.root){
            console.log("Tree is empty.")
        }
        if(node === this.root){
            this.postorderArray = []
        }
        if(node.left){
            this.postOrderTraversal(node.left)
        }
        if(node.right){
            this.postOrderTraversal(node.right)
        }
        this.postorderArray.push(node.data)
    }

    searchData(data){
        if(!this.root){
            return -1
        }
        tree.inOrderTraversal(this.root);
        if(this.inorderArray.includes(data)){
            return 1
        } else {
            return -1
        }
    }

    searchDataTraverse(node, data){
        if(!node){
            return -1
        }
        if(data===node.data){
            return 1
        } else {
            if(data < node.data){
                return this.searchDataTraverse(node.left, data)
            } else if(data > node.data){
                return this.searchDataTraverse(node.right, data)
            } else {
                return -1
            }
        }
    }

    removeData(node, value){
        if(!this.inorderArray.includes(value)){
            return false
        } else {
            if(value < node.data){
                node.left = this.removeData(node.left, value)
                return node
            }
            else if(value > node.data){
                node.right = this.removeData(node.right, value)
                return node
            }

            if(!node.left){
                return node.right
            }
            else if(!node.right){
                return node.left
            }
            else {
                let parentNode = node;
                let successor = node.right;
                while (successor.left){
                    parentNode = successor
                    successor = successor.left
                }
                if(parentNode !== node){
                    parentNode.left = successor.right;
                } else {
                    parentNode.right = successor.right;
                }
                node.data = successor.data;
                return node
            }
        }
    }
    updateData(value, replaceValue){
        const nodeRemoved = this.removeData(this.root, value);
        if(nodeRemoved){
            this.addData(replaceValue)
            console.log(`${value} is removed and ${replaceValue} is added.`)
        } else {
            console.log(`${value} not found, can not update value.`)
        }
    }

    displayTree(node) {
        if (!node) {
            return;
        }
        return {
            data: node.data,
            left: this.displayTree(node.left) || null,
            right: this.displayTree(node.right) || null
        };
    }

}

const tree = new Tree()
tree.addData(100)
tree.addData(50)
tree.addData(20)
tree.addData(30)
tree.addData(40)
tree.addData(10)
tree.addData(150)
tree.addData(160)
tree.addData(110)

tree.inOrderTraversal(tree.root)
tree.preOrderTraversal(tree.root)
tree.postOrderTraversal(tree.root)

const searchValue_1 = 10
const node_1 = tree.searchData(searchValue_1)
if(node_1===1){
    console.log(`${searchValue_1} is in tree.`)
} else {
    console.log(`${searchValue_1} not found.`)
}


const searchValue_2 = 18880
const node_2 = tree.searchData(searchValue_2)
if(node_2===1){
    console.log(`${searchValue_2} is in tree.`)
} else {
    console.log(`${searchValue_2} not found.`)
}

const treeStructure_1 = tree.displayTree(tree.root)
tree.removeData(tree.root,100)

const treeStructure_2 = tree.displayTree(tree.root)

tree.updateData(10, 5)
const treeStructure_3 = tree.displayTree(tree.root)

tree.updateData(30, 35)

const treeStructure_4 = tree.displayTree(tree.root)

tree.updateData(130, 180)

tree.updateData(150, 120)

const treeStructure_5 = tree.displayTree(tree.root)

fs.writeFileSync('treeStructure_1.json', JSON.stringify(treeStructure_1, null, 2));
fs.writeFileSync('treeStructure_2.json', JSON.stringify(treeStructure_2, null, 2));
fs.writeFileSync('treeStructure_3.json', JSON.stringify(treeStructure_3, null, 2));
fs.writeFileSync('treeStructure_4.json', JSON.stringify(treeStructure_4, null, 2));
fs.writeFileSync('treeStructure_5.json', JSON.stringify(treeStructure_5, null, 2));


const searchValue_3 = 35
const node_3 = tree.searchDataTraverse(tree.root,searchValue_3)
if(node_3===1){
    console.log(`${searchValue_3} is in tree.`)
} else {
    console.log(`${searchValue_3} not found.`)
}