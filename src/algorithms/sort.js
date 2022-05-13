const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swapArrayElements(array, i1, i2) {
    let tmp = array[i1];
    array[i1] = array[i2];
    array[i2] = tmp;
}

export function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) {
                swapArrayElements(array, j - 1, j);
            }
        }
    }
}

export function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[smallestIdx] > array[j]) {
                smallestIdx = j;
            }
        }
        swapArrayElements(array, i, smallestIdx);
    }
}

function findGreater(array, end) {
    for (let i = 0; i < end; i++) {
        if (array[i] > array[end]) {
            return i;
        }
    }
    return end;
}
function shiftRight(array, start, end) {
    for (let i = end; i > start; i--) {
        array[i] = array[i - 1];
    }
}

export function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            let tmp = array[i];
            let greater = findGreater(array, i);
            shiftRight(array, greater, i);
            array[greater] = tmp;
        }
    }
}

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    // Split Array in into right and left
    const half = Math.ceil(list.length / 2);
    let left = array.slice(0, half)
    let right = array.slice(-half)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    // TODO: 
}


// bubbleSort(numbers);
// selectionSort(numbers);
// insertionSort(numbers);
// console.log(numbers);

// const answer = mergeSort(numbers);
// console.log(answer);