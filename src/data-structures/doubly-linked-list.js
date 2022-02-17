export class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    this.tail.next = {
      value: value,
      next: null,
      prev: this.tail,
    },
    this.tail = this.tail.next;
    this.length++;
    return this;
  }
  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
      prev: null,
    }
    this.head.next.prev = this.head;
    this.length++;
    return this;
  }
  
  insert(index, value) {
    if (index <= 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const current = this.traverse(index-1);
    current.next = {
      value: value,
      next: current.next,
      prev: current,
    }
    current.next.next.prev = current.next;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    
    const current = this.traverse(index-1);
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    }    
    else if (index === this.length-1) {
      this.tail = current;
      current.next = null;
    } else {
      current.next = current.next.next;
      current.next.prev = current;
    }
    this.length--;
    return this;
  }
  
  traverse(index) {
    let current = this.head;
    if (index >= 0) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length-1; i > this.length+index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  array() {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export function test() {
  const linkedList = new DoublyLinkedList(0);
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-1).value);
  console.log(linkedList.traverse(-3).value);
  console.log(linkedList.traverse(-linkedList.length).value);

  linkedList.remove(0);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-linkedList.length).value);
  linkedList.remove(1);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-linkedList.length).value);
  linkedList.remove(linkedList.length-1);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-linkedList.length).value);

  linkedList.insert(1, 0);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-linkedList.length).value);

  linkedList.prepend(-1);
  console.log(linkedList.array());
  console.log(linkedList.traverse(-linkedList.length).value);
}
