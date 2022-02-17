export class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // % this.data.length => hash is < this.data.length
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const addr = this._hash(key);
    // get or create hash table bucket; use array for bucket (can also use linked list)
    // bucket e.g. [ [ 'tangerine', 123 ], [ 'berries', 321 ] ]
    this.data[addr] = this.data[addr] || [];
    // push key,val pair element to bucket
    this.data[addr].push([key, value]);
  }

  get(key) {
    const addr = this._hash(key);
    const bucket = this.data[addr]
    for (const item of bucket) {
      if (item[0] === key) return item[1];
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

// TESTS

export function test() {
  const myHashTable = new HashTable(10);
  myHashTable.set('grapes', 1000);
  myHashTable.set('apples', 9);
  myHashTable.set('oranges', 111);
  myHashTable.set('pears', 91);
  myHashTable.set('tangerine', 123);
  myHashTable.set('tangerine', 121);
  myHashTable.set('tangerine', 122);
  myHashTable.set('berries', 321);

  console.log(myHashTable.get('berries'));
  console.log(myHashTable.get('grapes'));
  console.log(myHashTable.get('pears'));
  // console.log(myHashTable.get('egg'));
  console.log(myHashTable.keys());
  console.log(myHashTable);
}
