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

export function test() {
    console.log(inception(3));
}