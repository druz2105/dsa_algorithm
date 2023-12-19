class Node {
    constructor(data) {
        this.data = data;
        this.last = null;
        this.next = null;
    }
    returnData(){
        return this.data
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addDataFirst(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let currentHead = this.head;
            currentHead.last = newNode
            newNode.next = currentHead
            this.head = newNode
        }
    }

    addDataLast(data){
        const newNode = new Node(data);
        if(this.tail === null){
            this.addDataFirst(data);
        } else {
            let current = this.tail;
            current.next = newNode
            newNode.last = current
            this.tail = newNode
        }
    }

    searchNodeByIndex(targetIndex){
        let current = this.head
        let index = 0
        while(current !== null){
            if(index === targetIndex){
                return [current, index]
            }
            current = current.next
            index += 1
        }
        return [null, -1]
    }

    searchNodeByValue(value){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.returnData() === value){
                return [current, index]
            }
            current = current.next
            index += 1
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

    insertNodeBeforeIndex(insertIndex, value){
        const [node, index] = this.searchNodeByIndex(insertIndex);
        if(index !== -1 ){
            this.insertNodeBefore(node, value)
        } else {
            console.log(`Index out of range, can not update data.`)
        }
    }

    insertNodeBeforeValue(value, insertValue){
        const [node, index] = this.searchNodeByValue(value);
        if(index !== -1 ){
            this.insertNodeBefore(node, insertValue)
        } else {
            console.log(`Value not found, can't insert data.`)
        }
    }


    insertNodeBefore(node, insertValue){
        let prevNode = node.last;
        let newNode = new Node(insertValue);

        if (prevNode === null) {
            this.head = newNode
        } else {
            prevNode.next = newNode
        }
        newNode.next = node
        newNode.last = prevNode
        node.last = newNode
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
            console.log(`Index out of range, can not update data.`)
        }
    }

    insertNodeAfter(node, insertValue){
        let nextNode = node.next;
        let newNode = new Node(insertValue);
        if (nextNode === null) {
            this.tail = newNode
        } else {
            nextNode.last = newNode
        }
        newNode.last = node
        newNode.next = nextNode
        node.next = newNode
        console.log("new node had been added successfully.")
    }

    removeNode(node) {
        let current = node;
        let prevNode = current.last;
        let nextNode = current.next;

        if (prevNode === null) {
            this.head = nextNode; // Update head if removing the first node
        } else {
            prevNode.next = nextNode;
        }

        if (nextNode === null) {
            this.tail = prevNode; // Update tail if removing the last node
        } else {
            nextNode.last = prevNode;
        }
    }


    removeByValue(value){
        const [node, index] = this.searchNodeByValue(value)
        if(index !== -1 ){
            this.removeNode(node)
            console.log(`${value} is removed from list.`)
        } else {
            console.log(`${value} not found, can not remove data.`)
        }
    }

    removeByIndex(removeIndex){
        const [node, index] = this.searchNodeByIndex(removeIndex)
        if(index !== -1 ){
            this.removeNode(node)
            console.log(`${node.returnData()} is removed from list.`)
        } else {
            console.log(`Index out of range, can not remove data.`)
        }
    }

    displayLinkedList(reversed = false){
        let linkedListString = ''
        if(reversed){
            let current = this.tail
            while(current !== null){
                if(current.last === null){
                    linkedListString += `${current.returnData()}`
                } else {
                    linkedListString += `${current.returnData()} <=> `
                }
                current = current.last
            }
        } else {
            let current = this.head
            while(current !== null){
                if(current.next === null){
                    linkedListString += `${current.returnData()}`
                } else {
                    linkedListString += `${current.returnData()} <=> `
                }
                current = current.next
            }
        }
        console.log(linkedListString)
    }
}

const dl = new DoublyLinkedList()


dl.addDataFirst(8)
dl.addDataFirst(6)
dl.addDataFirst(5)
dl.addDataFirst(4)
dl.addDataFirst(3)

dl.addDataLast(10)

dl.displayLinkedList()
dl.displayLinkedList(true)

dl.updateNodeByValue(3, 2)

dl.displayLinkedList()
dl.displayLinkedList(true)

dl.updateNodeByValue(7, 2)

dl.updateNodeAtIndex(0, 1)

dl.displayLinkedList()
dl.displayLinkedList(true)

const searchValue = 6
if(dl.searchNodeByValue(searchValue)[-1] !== -1){
    console.log(`${searchValue} is there in list.`)
} else {
    console.log(`${searchValue} is not found in list.`)
}

dl.displayLinkedList()
dl.displayLinkedList(true)

dl.insertNodeAfterValue(8,  9)
dl.insertNodeBeforeValue(8,  7)

dl.displayLinkedList()
dl.displayLinkedList(true)

dl.insertNodeAfterValue(10,  11)
dl.insertNodeAfterIndex(8,  12)

dl.displayLinkedList()
dl.displayLinkedList(true)

dl.insertNodeBeforeValue(3,  2)
dl.insertNodeBeforeIndex(0,  1)

dl.displayLinkedList()
dl.displayLinkedList(true)