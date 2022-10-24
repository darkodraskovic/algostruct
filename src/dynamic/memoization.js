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

(function () {
    console.log(addTo80(5));
    const fn = memoizedAddTo80();

    console.log(fn(7));

    console.log(fn(5));
    console.log(fn(5));
    console.log(fn(5));
})()