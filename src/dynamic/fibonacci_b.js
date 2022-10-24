let computations = 0;
function fibonacci(n) {
    computations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let computationsMemoize = 0;
function fibonacciMemoize() {
    let cache = [];
    return function fib(n) {
        if (cache[n]) {
            return cache[n];
        }

        computationsMemoize++;
        if (n < 2) {
            cache[n] = n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
        }
        return cache[n];
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
    let n = 35;

    var t = timer('non memoized fibonacci');
    console.log('fibonacci: ' + fibonacci(n));
    console.log('computations:' + computations);
    t.stop();

    const fib = fibonacciMemoize();
    var t = timer('memoized fibonacci');
    console.log('fibonacci: ' + fib(n));
    console.log('computations:' + computationsMemoize);
    t.stop();
})()