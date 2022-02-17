class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = this.top = newNode;
    } else {
      const tmp = this.top;
      this.top = newNode;
      newNode.prev = tmp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) return null;

    const top = this.top;
    
    this.top = this.top.prev;
    this.length--;
    if (this.isEmpty()) this.bottom = null;
    
    return top;
  }
  isEmpty() {
    return !this.length;
  }
  array() {
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.prev;
    }
    return arr.reverse();
  }
}

export class StackArray {
  constructor() {
    this.arr = [];
  }
  peek() {
    // if (!this.arr.length) return null;
    return this.arr[this.arr.length-1];
  }
  push(value) {
    this.arr.push(value);
    return this;
  }
  pop() {
    // if (!this.arr.length) return null;
    return this.arr.pop();
  }
  isEmpty() {
    return !this.arr.length;
  }
  
  array() {
    return this.arr;
  }
  get length() {
    return this.arr.length;
  }
  get bottom() {
    return this.arr[0]
  }
  get top() {
    return this.arr[this.arr.length-1];
  }
}

export function test() {
  // const stack = new Stack();
  const stack = new StackArray();
  const n = 10;
  for (let i = 0; i < n; i++) {
    stack.push(i);
  }
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());

  console.log("\npop 1 item");
  stack.pop()
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());

  console.log("\npop everything except bottom");
  while (stack.length > 1) {
    stack.pop();
  }
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());

  console.log("\npop bottom");
  stack.pop()
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());

  console.log("\npop empty stack");
  stack.pop()
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());

  console.log("\npush " + n + " items");
  stack.push(0);
  for (let i = 1; i < 10; i++) {
    stack.push(i);
  }
  console.log("len: " + stack.length);
  console.log("stack: "+ stack.array());
}
