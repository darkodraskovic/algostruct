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

export function findFactorialRecursive(number) {
    if (number < 2) {
        return 1;
    }
    return number * findFactorialRecursive(--number);
}

export function findFactorialIterative(number) {
    var result = 1;
    while (number > 1) {
        result *= number--;
    }
    return result;
}

export function test() {
    const resultRecursive = findFactorialRecursive(5);
    const resultIterative = findFactorialIterative(5);

    return;
}
