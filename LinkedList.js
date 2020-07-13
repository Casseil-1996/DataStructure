class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

class LinkedList {

  constructor() {
    this.size = 0
    this.head = null
  }

  _node (index) {
    if (index < 0 || index > this.size) return undefined
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  add (index, element) {
    if (arguments.length === 1) {
      element = arguments[0]
      index = this.size
    }

    if (index < 0 || index > this.size) return undefined

    const next = this._node(index)
    const prev = this._node(index - 1)
    const current = new Node(element, next)

    if (prev) prev.next = current
    if (index === 0) this.head = current
    this.size++
  }

  remove (index) {
    if (index < 0 || index > this.size) return undefined

    const prev = this._node(index - 1)
    const next = this._node(index + 1)

    if (index === 0) this.head = next
    if (prev) prev.next = next

    this.size--
  }

  // 递归实现 reverse
  reverseByRecursive () {
    function fn (head) {
      if (!head || !head.next) return head
      let newHead = fn(head.next)

      head.next.next = head
      head.next = null

      return newHead
    }
    this.head = fn(this.head)
    return this.head
  }

  reverseByLoop () {
    // 循环实现 reverse
    const newLinkedList = new LinkedList()
    let i = 0
    do
      newLinkedList.add(0, this._node(i++).element)
    while (i < this.size)

    return this.head = newLinkedList.head
  }

  reverseByPoint () {
    // 思路同上 通过操作指针实现
    let newHead = null
    while (this.head) {
      let pointer = this.head.next
      this.head.next = newHead
      newHead = this.head
      this.head = pointer
    }
    return this.head = newHead
  }

  reverse () {
    // 默认使用操作指针的方式
    this.reverseByPoint()
  }

  get (index) {
    return this._node(index)
  }

  set (index, element) {
    let current = this._node(index)
    if (!current) return null
    current.element = element
    return current
  }

  clear () {
    this.head = null
    this.size = 0
  }
}

const ll = new LinkedList
ll.add(0)
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)

// ll.reverse()
console.dir(ll.reverse(), { depth: Infinity })
