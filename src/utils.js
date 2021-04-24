// Check if two arrays contain at least one common element
export function containCommonElement(arr1, arr2) {
  const arr1Map = {};
  for (let i = 0; i < arr1.length; i++) {
    arr1Map[arr1[i]] = true;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1Map[arr2[i]]) return true;
  }
  return false;
}

// arr1.some(item => arr2.includes(item));

export function reverseString(str) {
  const arr = str.split("");
  let i = 0;
  let j = arr.length-1;
  while(i < j) {
    const tmp = arr[i];
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

// Check if two numbers in array add to n
export function doTwoMemSumTo(n, arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(n - arr[i]);
    }
  }
  return false;
}

export function mergeSorted(a, b) {
  if (a.length === 0) return b;
  if (b.length === 0) return a;
  
  const c = [];
  let ai = 0;
  let bi = 0;
  while(ai < a.length && bi <b.length) {
    if (a[ai] < b[bi]) c.push(a[ai++]);
    else c.push(b[bi++]);
  }
  return c.concat(ai < a.length ? b.slice(bi) : a.slice(ai));
}
