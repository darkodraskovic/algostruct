import { Stack } from './stack.js'

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    if (!this.length) {
      this.first = this.last = new Node(value);
    } else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
    this.length++;
  }
  dequeue() {
    if (!this.length) return null;
    
    const first = this.first;
    this.first = this.first.next;
    this.length--;

    if (!this.length) this.last = null;
    
    return first;
  }
  array() {
    const arr = [];
    let current = this.first;
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

class QueueStack {
  constructor() {
    this.stack = new Stack();    
  }
  enqueue(value) {
    this.stack.push(value);
  }
  dequeue() {
    if (this.stack.isEmpty()) return null;
    
    const tmp = new Stack();
    while (this.stack.length > 1) {
      tmp.push(this.stack.pop().value);
    }
    const first = this.stack.pop();
    while (tmp.length > 0) {
      this.stack.push(tmp.pop().value);
    }
    return first;
  }
  peek() {
    // TODO:
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  array() {
    return this.stack.array();
  }
  get length() {
    return this.stack.length;
  }
}

export function test() {
  // const queue = new Queue();
  const queue = new QueueStack();
  const n = 10;
  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());

  console.log("\ndequeue 1 item");
  queue.dequeue()
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());

  console.log("\ndequeue everything except last");
  while (queue.length > 1) {
    queue.dequeue();
  }
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());

  console.log("\ndequeue last");
  queue.dequeue()
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());

  console.log("\ndequeue empty queue");
  queue.dequeue()
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());

  console.log("\nenqueue " + n + " items");
  queue.enqueue(0);
  for (let i = 1; i < 10; i++) {
    queue.enqueue(i);
  }
  console.log("len: " + queue.length);
  console.log("queue: "+ queue.array());
}
