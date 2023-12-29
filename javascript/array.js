const array = Array();

array.push(1)
array.push(5)
array.push(2)
array.push(4)
array.push(3)
array.push(6)

array.pop() // removes last element
console.log(array.includes(5)) // search for 5
console.log(array.includes(6)) // search for 6

array[0] = 0 // updates array at index 0.

console.log(array.indexOf(2)) // find index

console.log(array)