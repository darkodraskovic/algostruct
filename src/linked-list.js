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
    if (index < 0 || index >= this.length) return;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.next = {
      value: value,
      next: current.next
    }
    this.length++;
    return this;
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
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(16);
  myLinkedList.append(22);
  myLinkedList.append(43);
  myLinkedList.append(81);
  myLinkedList.append(-1);
  myLinkedList.prepend(55);
  myLinkedList.prepend(25);
  console.log(myLinkedList.array()); // => 25 -> 55 -> 10 -> 16 -> 22 -> 43 -> 81 -> -1

  myLinkedList.insert(0, 1);
  myLinkedList.insert(3, 4);
  myLinkedList.insert(9, 10);
  console.log(myLinkedList.array());
}
