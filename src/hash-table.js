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
}
