export function containCommonElement(arr1, arr2) {
  let arr1Map = {};
  for (var i = 0; i < arr1.length; i++) {
    arr1Map[arr1[i]] = true;
  }
  for (var i = 0; i < arr2.length; i++) {
    if (arr1Map[arr2[i]]) return true;
  }
  return false;
}

// arr1.some(item => arr2.includes(item));

export function reverseString(str) {
  let arr = str.split("");
  let i = 0;
  let j = arr.length-1;
  while(i < j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr.join("");
}

export function reverseStringLambda(str) {
  return (str => str.split('').reverse().join(''))(str);
}

export function doTwoMemSumTo(n, arr) {
  let set = new Set();

  for (var i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(n - arr[i]);
    }
  }
  return false;
}
