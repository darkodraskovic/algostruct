// import { MyArray } from './array';

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// console.log(newArray);
// newArray.delete(0);
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(1);
// console.log(newArray);


// function reverse(str) {
//   let arr = str.split("");
//   let i = 0;
//   let j = arr.length-1;
//   while(i < j) {
//     let tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
//     i++;
//     j--;
//   }
//   return arr.join("");
// }

// let str = "Hello World!";
// let str = "Hello Worldz!";
let str = "zappa";
// let revStr = reverse(str);
// console.log( revStr );

// const reverse3 = str => str.split('').reverse().join('');
const reverse3 = str => [...str].reverse().join('');
console.log( reverse3(str) );

