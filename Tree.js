class Node {
  constructor(element, parent) {
    this.element = element
    if (parent) {
      this.parent = parent
    }
  }
}

class BinarySearchTree {
  constructor(compare = this.compare) {
    this.root = null
    this.size = 0
    this.__proto__.compare = compare
  }

  compare (prev, next) {
    return prev - next
  }

  add (element) {
    if (!this.root) {
      this.root = new Node(element)
      return ++this.size
    }

    let currentNode = this.root
    let parent = null
    let compare = null

    while (currentNode) {
      compare = this.compare(currentNode.element, element)
      parent = currentNode

      if (compare > 0) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    const newNode = new Node(element, parent)
    if (compare > 0) parent.left = newNode
    else parent.right = newNode
    return ++this.size
  }

}

const bst = new BinarySearchTree
let arr = [10, 8, 19, 6, 15, 22]
arr.forEach(item => {
  bst.add(item)
})
console.dir(bst, { depth: Infinity })
