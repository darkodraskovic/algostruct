// import { MyArray } from './array.js';
import { doTwoMemSumTo } from './utils.js'
import { reverseStringLambda } from './utils.js'
import { mergeSorted } from './utils.js'
import { HashTable } from './hash-table.js'

// const arr1 = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['x', 'y', 'a', 'z', '0'];
// console.log(arr1.some(item => arr2.includes(item)));
// console.log(containCommonElement(arr1, arr2));
// console.log(doTwoMemSumTo(12, [1, 3, 9, 7, 7, 1, 10, 5, 2]));
// console.log(reverseStringLambda('abac'));

// const a = [0, 3, 4, 31];
// const b = [4, 6, 30];
// console.log(mergeSorted(a, b));

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 1000);
// console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9);
// console.log(myHashTable.get('apples'));
myHashTable.set('oranges', 111);
// console.log(myHashTable.get('oranges'));
myHashTable.set('pears', 91);
// console.log(myHashTable.get('pears'));
myHashTable.set('tangerine', 123);
console.log(myHashTable.get('tangerine'));
myHashTable.set('berries', 321);
console.log(myHashTable.get('berries'));
console.log(myHashTable.get('egg'));
