#### This Project contains every data structure in Javascript.

- Array
    - Arrays are often used to store data sets.
        - For Ex: `const langauges = ['English', 'French', 'Spanish', 'Hindi']`
        - the array above can be used to show options to user for selection.
        - In javascript be declared with `Array()` or simply by using `[]`.
        - In JavaScript and Python, arrays are not bound to specific data types. This means that unlike some statically typed languages, these programming languages allow arrays to contain elements of different data types within the same array. **However, using typescript we can ensure types.**
        - For Ex: `const Array = Array(1, 'two', true, [3, 4], { key: 'value' });`

- Hash Table
    - Hash tables are simple key value pair that can be declared in JS. like this `const fruit = { apple: 10, mango: 5, pineapple: 20, banana: 24 }`. 
    - Searching data in hashtables is easier than the array.
    - For Ex: User wants quantity of apple we can simply get it by writing `fruit.apple`.

- Stack
    - Stack is a data structure that follows LIFO last in first out approach.
    - We can use Array and List in Javascript and Python repspectively to achieve stack.
    - To remove elment, we simply remove the last element in an array.

- Queue 
    - Stack is a data structure that follows FIFO first in first out approach.
    - We can use Array and List in Javascript and Python repspectively to achieve stack.
   - To remove elment, we simply remove the first element in an array.

- LinkedList
    - LinkedList as name suggets, it links each node to its next node.
    - A head represents the first node.
    - Each node has two elements, one is value, and the other is pointer.
    - Value stores data and pointer stores address of the next node.
    - For the last node next node is null.
    - For Ex: `[[10, node(20)], [20, node(30)], [30, null]]`
    - In this `[10, node(20)]` this node is head.
    - Insertion of a node can be done only after a certain node.
    
- Doubly LinkedList
    - Doubly linked list it is similar to a Linked list, but in this each node also stores address to its previous node.   
    - A head represents the first node and a tail represents the last node.
    - Searching can be done from either side of the list.
    - For the first node prev node is null and last node next node is null.
    - For Ex: `[[null, 10, node(20)], [node(10), 20, node(30)], [node(20), 30, null]]`
    - In this `[null, 10, node(20)]` this node is head and `[node(20), 30, null]` this node is tail.
    - Insertion of a node can be done from any side of certain node.

- Circular LinkedList
    - Circular LinkedList is the same as Linkedlist, but in this last node points to the head node. 
    - Traveling in this list ends once head is visited again.
    - A head represents the first node.
    - For Ex: `[[10, node(20)], [20, node(30)], [30, node(10)]]`
    - In this `[10, node(20)]` this node is head.
    - In this travesing will end when a pointer comes to `[10, node(20)]` this head node again.

- Circular Doubly LinkedList
    - Circular Doubly LinkedList is the same as Doubly Linkedlist, but in this last node's next pointer points to the head node and the first node's last pointer points to tail node.
    - Traveling in this list ends once head or tail node is visited again.
    - A head represents the first node and a tail represents the last node.
    - Searching can be done from either side of the list.
    - For Ex: `[[node(30), 10, node(20)], [node(10), 20, node(30)], [node(20), 30, node(10)]]`
    - In this `[node(30), 10, node(20)]` this node is head and `[node(20), 30, node(10)]` this node is tail.

- Tree
    - A tree data structure is a hierarchical structure used to represent and organize data in a way that is easy to navigate and search. It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes. 
    - The topmost node of the tree is called the root, and the nodes below it are called the child nodes. Each node can have multiple child nodes, and these child nodes can also have their own child nodes, forming a recursive structure.
    - Travesing Tree:
        - Inorder: inorder traverse should follow this.
            - traverse left node then root and then right node.
            - it gives elements in sorted in ascending order in the binary tree.
        - Preorder: preorder traverse should follow this.
            - traverse root then left node and then right node.
            - It can be used to evaluate expression. for ex: root can store operator and node can be oprands.
        - Postorder: postorder traverse should follow this.
          - traverse left node then right node and in lst root.
          - It can be used for deleting nodes in the tree it can be used to process node before procesing root.
 
- Binary Tree
    - The Binary tree has these rules:  
        - Each node can have a maximum of two children. 
        - The Left node value should be less than the value of root node.
        - The Right node value should be greater than the value of root node.
        - Each subtree should follow the above rules.
    - Insertion: inserting node in a binary tree will check for the above rules and add data.
    - Deletion: 
        - deleting a leaf node (node without a child) is easy. 
        - deleting a node with one child is also easy as we need to shift root to child node.
        - Deleting node with both children is complex, to remove node we need to find its inorder successor and replace node with that value.
    - Update:
        - while updating, we should maintain a binary tree, so we should remove the node we want to update and add new value as node in the tree.