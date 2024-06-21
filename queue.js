/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
    this._list = new LinkedList();
  }


  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this._list.head = newNode;
      this._list.tail = newNode;
      this.first = this._list.head;
      this.last = this._list.tail;
    } else {
      this._list.tail.next = newNode;
      this._list.tail = newNode;
      this.last = this._list.tail;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null || this.size === 0) {
      throw new Error("Error: Queue is empty!");
    } else {
      let firstNode = this._list.head;
      this._list.head = this._list.head.next;
      this.size--;
      if (this.size === 0){
        this._list.tail = null;
        this.last = null;
      } else {
        this.first = this._list.head;
      }
      return firstNode.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first === null) {
      throw new Error("Error: Queue is empty!");
    }
    return this._list.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first === null && this.last === null;
  }
}
module.exports = Queue;
