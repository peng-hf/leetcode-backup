/*
* @lc app=leetcode id=707 lang=javascript
*
* [707] Design Linked List
*/

// @lc code=start

function ListNode(value) {
  this.value = value
  this.next = null
}

function MyLinkedList() {
  this.size = 0
  this.head = null
}

/**
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1
  var cur = this.head
  for (let i = 0; i < index; ++i) {
    cur = cur.next
  }
  return cur.value
}

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) { // Time O(1)
  this.addAtIndex(0, val)
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) { // Time O(N) where N is the size of the linked list
  this.addAtIndex(this.size, val)
};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) { // Time O(k) where k is the index to add
  if (index > this.size || index < 0) return

  const newNode = new ListNode(val)
  var pred = this.head

  if (index == 0) {
    newNode.next = this.head
    this.head = newNode
  } else {
    for (let i = 0; i < index - 1; ++i) { // Find predecessor of the node to add
      pred = pred.next
    }
    newNode.next = pred.next
    pred.next = newNode
  }
  this.size++
};

/**
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) { // Time O(k) where k is the index to delete
  if (index >= this.size || index < 0) return
  var pred = this.head
  if (index === 0) {
    this.head = pred.next
  } else {
    for (let i = 0; i < index - 1; ++i) { // Find predecessor of the node to delete
      pred = pred.next
    }
    pred.next = pred.next.next
  }
  this.size--
};

MyLinkedList.prototype.print = function() {
  var idx = this.size
  cur = this.head.next // Skip sentinel

  while (idx-- >= 0) {
    console.log(cur)
    cur = cur.next
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
// @lc code=end

