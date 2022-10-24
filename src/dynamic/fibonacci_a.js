function fibonacci(n) {
    let numbers = [1, 2];
    while (n > 2) {
        numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
        n--;
    }
    return numbers;
}

function fibonacciMemoize() {
    let numbers = [1, 2];

    return function (n) {
        let length = numbers.length;
        let upper = n;
        while (n > length) {
            numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
            n--;
        }
        return numbers.slice(0, upper);
    }
}

var timer = function (name) {
    var start = new Date();
    return {
        stop: function () {
            var end = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

(function () {
    let n = 10e6;

    var t = timer('non memoized fibonacci 1');
    fibonacci(n);
    t.stop();
    var t = timer('non memoized fibonacci 2');
    fibonacci(n);
    t.stop();

    const fibMemo = fibonacciMemoize();
    var t = timer('memoized fibonacci 1');
    fibMemo(n);
    t.stop()
    var t = timer('memoized fibonacci 2');
    fibMemo(n);
    t.stop()
})()