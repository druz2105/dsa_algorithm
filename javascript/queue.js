class Queue{
    constructor() {
        this.container = []
        this.sortedArr = []
    }

    enqueue(data){
        this.container.push(data)
    }

    dequeue(){
        this.container.shift() // remove first element to achive FIFO first in first out.
    }

    readElement(index){
        return this.container[index];
    }

    update(index, data){
        this.container[index] = data;
    }

    size(){
        return this.container.length
    }


    findMin(queue){
        if(!queue){
            queue = this.container
        }
        let min = queue[0]
        for (let i = 1; i < queue.length; i++) {
            const element = queue[i]
            if(element < min){
                min = element
            }
        }
        return min;
    }

    findMax(queue){
        if(!queue){
            queue = this.container
        }
        let max = queue[0]
        for (let i = 1; i < queue.length; i++) {
            const element = queue[i]
            if(element > max){
                max = element
            }
        }
        return max;
    }

    insertionSort(){
        for (let i = 1; i < this.size(); i++) {
            let j = i - 1;
            const temp = this.readElement(i);
            while (j >=0 && this.readElement(j) > temp){
                this.update(j + 1, this.readElement(j))
                j = j - 1;
            }
            this.update(j + 1, temp);
        }
    }
    selectionSort(){
        let i = 0;
        while (i < this.size()){
            const unsortedPart = this.container.slice(i);
            const min = this.findMin(unsortedPart);
            const indexOfmin = this.container.indexOf(min)
            const temp = this.container[i]
            this.container[i] = min
            this.container[indexOfmin] = temp
            i += 1;
        }
    }

}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(5)
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(6)
console.log(queue.container)

queue.selectionSort()
console.log(queue.container)

queue.dequeue()
queue.selectionSort()
console.log(queue.container)