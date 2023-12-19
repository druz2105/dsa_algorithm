class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    returnData(){
        return this.data
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    addData(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    searchNodeByValue(value){
        let current = this.head
        let index = 0
        while(current !== null){
            if(current.returnData() === value){
                return [current, index]
            }
            index += 1
            current = current.next;
        }
        return [null, -1]
    }

    searchNodeByIndex(targetIndex){
        let current = this.head
        let index = 0
        while(current !== null){
            if(index === targetIndex){
                return [current, index]
            }
            index += 1
            current = current.next;
        }
        return [null, -1]
    }

    updateNodeByValue(value, newValue){
        const [node, index] = this.searchNodeByValue(value);
        if(index !== -1 ){
            this.updateNode(node, newValue)
        } else {
            console.log(`${value} is not in list, can not update data.`)
        }
    }

    updateNodeAtIndex(findIndex, newValue){
        const [node, index] = this.searchNodeByIndex(findIndex);
        if(index !== -1 ){
            this.updateNode(node, newValue)
        } else {
            console.log(`Index out of range, can not update data.`)
        }
    }

    updateNode(node, newValue){
        let oldValue = node.data
        node.data = newValue
        console.log(`${oldValue} is updated to ${newValue}.`)
    }

    insertNodeAfterIndex(insertIndex, value){
        const [node, index] = this.searchNodeByIndex(insertIndex);
        if(index !== -1 ){
            this.insertNodeAfter(node, value)
        } else {
            console.log(`Index out of range, can not update data.`)
        }
    }

    insertNodeAfterValue(value, insertValue){
        const [node, index] = this.searchNodeByValue(value);
        if(index !== -1 ){
            this.insertNodeAfter(node, insertValue)
        } else {
            console.log(`Value not found, can't insert data.`)
        }
    }

    insertNodeAfter(node, insertValue){
        const currentHead = this.head
        const newNode = new Node(insertValue)
        if(currentHead === null){
            this.addData(insertValue)
        } else {
            const nextNode = node.next
            node.next = newNode
            newNode.next = nextNode
        }
        console.log("new node had been added successfully.")
    }

    removeDataByValue(value){
        let parent;
        let current = this.head
        while(current !== null){
            if(current.returnData() === value){
                if(parent === undefined){
                    this.head = current.next
                } else {
                    parent.next = current.next
                }
            }
            parent = current
            current = current.next;
        }
    }

    removeDataAtIndex(findIndex){
        let parent;
        let current = this.head
        let currentIndex = 0
        while(current !== null){
            if(currentIndex === findIndex){
                if(parent === undefined){
                    this.head = current.next
                } else {
                    parent.next = current.next
                }
            }
            parent = current
            current = current.next;
            currentIndex += 1;
        }
    }

    displayLinkedList(){
        let current = this.head
        let linkedListString = ""
        while(current !== null){
            if(current.next === null){
                linkedListString += `${current.returnData()}`
            } else {
                linkedListString += `${current.returnData()} => `
            }
            current = current.next
        }
        console.log(linkedListString)
    }
}

const ll = new LinkedList()

ll.addData(5)
ll.addData(4)
ll.addData(3)
ll.displayLinkedList()

ll.updateNodeByValue(4, 6)
ll.displayLinkedList()

ll.updateNodeAtIndex(0, 1)
ll.displayLinkedList()

const searchValue = 6
if(ll.searchNodeByValue(searchValue)[1] !== -1){
    console.log(`${searchValue} is there in the list.`)
} else {
    console.log(`${searchValue} is not in the  list.`)
}


ll.insertNodeAfterValue(6, 7)
ll.displayLinkedList()

ll.insertNodeAfterIndex(0, 2)
ll.insertNodeAfterIndex(10, 2)
ll.displayLinkedList()

ll.removeDataByValue(7)
ll.displayLinkedList()

ll.removeDataAtIndex(0)
ll.displayLinkedList()

ll.removeDataAtIndex(10)