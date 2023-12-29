// Hash tables are simple key value pair which can be represented by object in JS.

// object of fruit and qauntity.

const hashTable = {}

// add data
hashTable["apple"] = 10
hashTable["mango"] = 5
hashTable["pineapple"] = 2
hashTable["banana"] = 24
hashTable["kiwi"] = 10

console.log(hashTable.apple) // read data
console.log(hashTable.lichi) // read data undefined
hashTable.pineapple = 20 // update data
delete hashTable.kiwi // delete a key

console.log(Object.keys(hashTable).includes("apple"))  // search key
console.log(Object.keys(hashTable).includes("kiwi"))  // search key

console.log(hashTable) // list data