export class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    this.tail.next = {
      value: value,
      next: null,
    },
    this.tail = this.tail.next;
    this.length++;
    return this;
  }
  prepend(value) {
    this.head = {
      value: value,
      next: this.head,
    }
    this.length++;
    return this;
  }
  
  insert(index, value) {
    if (index <= 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const current = this.traverse(index-1);
    current.next = {
      value: value,
      next: current.next
    }
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
    }    
    else if (index === this.length-1) {
      this.tail = current;
      current.next = null;
    } else {
      current.next = current.next.next;
    }
    this.length--;
    return this;
  }
  
  traverse(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
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

  reverse() {
    let current = this.head;
    let next = current.next;
    this.head.next = null;
    this.head = this.tail;
    
    while(next) {
      const tmp = next.next;
      next.next = current;
      current = next;
      next = tmp;
    }
    this.head = current;
    return this;
  }
}

export function test() {
  const linkedList = new LinkedList(10);
  linkedList.append(16);
  linkedList.append(22);
  linkedList.append(43);
  linkedList.append(81);
  linkedList.append(-1);
  linkedList.prepend(55);
  linkedList.prepend(25);
  console.log(linkedList.array()); // => 25 -> 55 -> 10 -> 16 -> 22 -> 43 -> 81 -> -1

  linkedList.insert(-1000, -100); // insert before the first(=0) index
  linkedList.insert(0, 1); // insert at the first(=0) index
  linkedList.insert(linkedList.length + 2, 1000); // insert after the last(=len-1) index
  linkedList.insert(3, 3);
  linkedList.insert(9, 9);
  linkedList.insert(linkedList.length-1, 99); // insert at the last(len-1) index
  console.log(linkedList.array());

  linkedList.remove(0);
  linkedList.remove(-1);
  linkedList.remove(4);
  linkedList.remove(linkedList.length-1);
  linkedList.remove(linkedList.length);
  console.log(linkedList.array());

  linkedList.reverse();
  console.log(linkedList.array());
}
