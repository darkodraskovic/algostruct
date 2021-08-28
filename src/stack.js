class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    if (this.isEmpty()) {
      this.top = new Node(value);
      this.bottom = this.top;
    } else {
      this.top.next = new Node(value);
      this.top = this.top.next;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) return null;

    if (this.length === 1) {
      this.bottom = this.top = null;
    } else {
      const current = this.traverse(this.length-2);
      this.top = current;
      this.top.next = null;
    }

    this.length--;
    return this;
  }
  isEmpty() {
    return !this.length;
  }
  traverse(index) {
    let current = this.bottom;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  array() {
    const arr = [];
    let current = this.bottom;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export function test() {
  const stack = new Stack();
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
