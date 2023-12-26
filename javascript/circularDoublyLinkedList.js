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

    prependData(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let currentHead = this.head;
            currentHead.last = newNode // update current head

            newNode.last = this.tail // update node to point at tail
            newNode.next = currentHead

            this.head = newNode
            this.tail.next = newNode // update node to point at head (new Node)
        }
    }

    appendData(data){
        const newNode = new Node(data);
        if(this.tail === null){
            this.prependData(data);
        } else {
            let currentTail = this.tail;
            currentTail.next = newNode

            newNode.last = currentTail
            newNode.next = this.head

            this.head.last = newNode
            this.tail = newNode
        }
    }

    searchNodeByValue(value){
        let current = this.head;
        let index = 0;

        do {
            if(current.returnData() === value){
                return [current, index]
            }
            index += 1
            current = current.next;

        } while (current !== this.head);
        return [null, -1]
    }

    searchNodeByIndex(targetIndex){
        let current = this.head
        let index = 0

        do {
            if(index === targetIndex){
                return [current, index]
            }
            index += 1
            current = current.next;

        } while (current !== this.head);
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

        if (node === this.head) {
            this.head = newNode
        }
        prevNode.next = newNode
        newNode.next = node
        newNode.last = prevNode
        node.last = newNode
        console.log(`new node ${insertValue} had been added before ${node.returnData()} successfully.`)
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
        let nextNode = node.next;
        let newNode = new Node(insertValue);
        if (node === this.tail) {
            this.tail = newNode
        }
        nextNode.last = newNode
        newNode.last = node
        newNode.next = nextNode
        node.next = newNode
        console.log(`new node ${insertValue} had been added after ${node.returnData()}.`)
    }

    updateNode(node, newValue){
        let oldValue = node.data
        node.data = newValue
        console.log(`${oldValue} is updated to ${newValue}.`)
    }

    removeDataByValue(value) {
        let parent ;
        let removedHead;
        let current = this.head.next;


        if (!current) {
            console.log("List is empty.");
            return;
        }

        do {
            if (current.returnData() === value) {
                console.log(`${value} is removed from the list.`);
                if (!parent) {
                    removedHead = current
                    this.head = current.next;
                } else {
                    parent.next = current.next;
                }
            }
            parent = current;
            current = current.next;

        } while (current !== this.head);

        if (removedHead && this.head) {
            let current = this.head;
            while (current.next !== removedHead) {
                current = current.next;
            }
            current.next = this.head
        }
    }


    removeDataAtIndex(findIndex){
        let parent;
        let removedHead;
        let currenIndex = 0;
        let current = this.head;

        if (!current) {
            console.log("List is empty.");
            return;
        }

        do {
            if (findIndex === currenIndex) {
                console.log(`${current.returnData()} is removed from the list.`);
                if (!parent) {
                    removedHead = current
                    this.head = current.next;
                } else {
                    parent.next = current.next;
                }
            }
            parent = current;
            current = current.next;
            currenIndex += 1

        } while (current !== this.head);

        if (removedHead && this.head) {
            let current = this.head;
            while (current.next !== removedHead) {
                current = current.next;
            }
            current.next = this.head
        }
    }

    display(reversed = false){
        if (this.head === null) {
            console.log("Linked List is empty");
            return;
        }
        let linkedListString = ''
        if(reversed){
            let current = this.tail
            do {
                if(current.last === this.tail){
                    linkedListString += `${current.returnData()}`
                } else {
                    linkedListString += `${current.returnData()} <=> `
                }
                current = current.last
            } while (current !== this.tail);
        } else {
            let current = this.head
            do {
                if (current.next === this.head) {
                    linkedListString += `${current.returnData()}`;
                } else {
                    linkedListString += `${current.returnData()} <=> `;
                }

                current = current.next;

            } while (current !== this.head);
        }
        console.log(linkedListString)
    }
}

const dl = new DoublyLinkedList()


dl.prependData(8)
dl.prependData(6)
dl.prependData(5)
dl.prependData(4)
dl.prependData(3)

dl.appendData(10)

dl.display()
dl.display(true)

dl.updateNodeByValue(3, 2)

dl.display()
dl.display(true)

dl.updateNodeByValue(7, 2)

dl.updateNodeAtIndex(0, 1)

dl.display()
dl.display(true)

const searchValue = 6
if(dl.searchNodeByValue(searchValue)[-1] !== -1){
    console.log(`${searchValue} is there in list.`)
} else {
    console.log(`${searchValue} is not found in list.`)
}

dl.display()
dl.display(true)

dl.insertNodeAfterValue(8,  9)
dl.display()
dl.display(true)

dl.insertNodeBeforeValue(8,  7)

dl.display()
dl.display(true)

dl.insertNodeAfterValue(10,  11)
dl.insertNodeAfterIndex(8,  12)

dl.display()
dl.display(true)

dl.insertNodeBeforeValue(3,  2)
dl.insertNodeBeforeIndex(0,  0)

dl.display()
dl.display(true)