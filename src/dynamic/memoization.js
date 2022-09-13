function addTo80(n) {
    console.log('addTo80 takes long time');
    return n + 80;
}

function memoizedAddTo80() {
    let cache = {
        7: 87
    }
    return function (n) {
        if (n in cache) {
            console.log(n, '+ 80 found in cache');
            return cache[n];
        }

        console.log('caching', n, '+ 80');
        cache[n] = n + 80;
        return cache[n];
    }
}

function fibonacci(n) {
    let numbers = [1, 2];
    while (n > 2) {
        numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
        n--;
    }
    return numbers;
}

function memoizedFibonacci() {
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
    // console.log(addTo80(5));
    // const fn = memoizedAddTo80();

    // console.log(fn(7));

    // console.log(fn(5));
    // console.log(fn(5));
    // console.log(fn(5));

    let n = 10e6;

    var t = timer('non memoized fibonacci 1');
    fibonacci(n);
    t.stop();
    var t = timer('non memoized fibonacci 2');
    fibonacci(n);
    t.stop();

    const memoFib = memoizedFibonacci();
    var t = timer('memoized fibonacci 1');
    memoFib(n);
    t.stop()
    var t = timer('memoized fibonacci 2');
    memoFib(n);
    t.stop()
})()