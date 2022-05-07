// 1. identify base case
// 2. identify recursion case
// 3. usually, there are 2 returns, one for each case
// function gets closer and closers to the base case
function inception(counter) {
    if (counter < 0) {
        return 'done';
    }
    return inception(--counter);
}

export function factorialRecursive(n) {
    if (n < 2) {
        return 1;
    }
    return n * factorialRecursive(--n);
}

export function factorialIterative(n) {
    var result = 1;
    while (n > 1) {
        result *= n--;
    }
    return result;
}

export function fibonacciRecursive(limit, a, b, counter) {
    if (a === undefined) { // true on the first iteration
        a = 0, b = 1, counter = 2;
    }
    if (limit < 2) {
        return limit;
    }
    if (counter === limit) {
        return a + b;
    }
    let temp = a;
    a = b;
    b = temp + a;
    return fibonacciRecursive(limit, a, b, ++counter);
}

export function fibonacciRecursiveSimple(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursiveSimple(n - 1) + fibonacciRecursiveSimple(n - 2);
}

export function fibonacciIterative(n) {
    if (n < 1) return n;
    let a = 0;
    let b = 1;

    while (n-- > 1) {
        let temp = a;
        a = b;
        b = temp + a;
    }

    return b;
}

export function fibonacciIterativeSimple(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}

export function test() {
    // let result = factorialRecursive(5);
    // let result = factorialIterative(5);

    // let result = fibonacciIterative(8);
    // let result = fibonacciRecursive(2);
    // let result = fibonacciRecursiveSimple(8);
    let result = fibonacciIterativeSimple(8);

    return;
}
