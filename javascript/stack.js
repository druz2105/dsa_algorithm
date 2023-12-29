class Stack{
    constructor() {
        this.container = []
        this.sortedArr = []
    }

    push(data){
        this.container.push(data)
    }

    pop(){
        this.container.pop()
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


    findMin(array){
        if(!array){
            array = this.container
        }
        let min = array[0]
        for (let i = 1; i < array.length; i++) {
            const element = array[i]
            if(element < min){
                min = element
            }
        }
        return min;
    }

    findMax(array){
        if(!array){
            array = this.container
        }
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            const element = array[i]
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

const stack = new Stack();

stack.push(1)
stack.push(5)
stack.push(2)
stack.push(4)
stack.push(3)
stack.push(6)
console.log(stack.container)
stack.selectionSort()
console.log(stack.container)