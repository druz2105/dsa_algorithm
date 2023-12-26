class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    returnData(){
        return this.data
    }
}

class CircularLinkedList{
    constructor() {
        this.head = null;
    }

    apendData(data){
        console.log(data)
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
        }
        newNode.next = this.head
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
            this.apendData(insertValue)
        } else {
            const nextNode = node.next
            node.next = newNode
            newNode.next = nextNode
        }
        console.log("new node had been added successfully.")
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

    display() {
        if (this.head === null) {
            console.log("Linked List is empty");
            return;
        }

        let current = this.head;
        let linkedListString = '';

        do {
            if (current.next === this.head) {
                linkedListString += `${current.returnData()}`;
            } else {
                linkedListString += `${current.returnData()} => `;
            }

            current = current.next;

        } while (current !== this.head);
        console.log(linkedListString);
    }

}

const cl = new CircularLinkedList()

cl.apendData(5)
cl.apendData(4)
cl.apendData(3)
cl.display()

cl.updateNodeByValue(4, 6)
cl.display()

cl.updateNodeAtIndex(0, 1)
cl.display()

const searchValue = 6
if(cl.searchNodeByValue(searchValue)[1] !== -1){
    console.log(`${searchValue} is there in the list.`)
} else {
    console.log(`${searchValue} is not in the  list.`)
}


cl.insertNodeAfterValue(6, 7)
cl.display()

cl.insertNodeAfterIndex(0, 2)
cl.display()

cl.insertNodeAfterIndex(10, 2)
cl.display()

cl.removeDataByValue(7)
cl.display()

cl.removeDataAtIndex(0)
cl.display()

cl.removeDataAtIndex(10)
