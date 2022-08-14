const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swapArrayElements(array, i1, i2) {
    let tmp = array[i1];
    array[i1] = array[i2];
    array[i2] = tmp;
}

// not used in real life; used to teach sorting
export function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) {
                swapArrayElements(array, j - 1, j);
            }
        }
    }
}

// not used in real life; used to teach sorting
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

// use when only few items and with mostly sorted data
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

// use this if worst is probable: O(n log(n)) in worst
// however, space complexity is O(n)
export function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    const half = Math.ceil(array.length / 2);
    const left = array.slice(0, half)
    const right = array.slice(half)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

export function merge(left, right) {
    const array = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array.push(left[i]);
            i++;
        } else {
            array.push(right[j]);
            j++;
        }
    }
    array.push(...left.slice(i))
    array.push(...right.slice(j));
    return array;
}

// O(n log(n)) in best and average
// space complexitiy is O(log(n)) (better than merge sort)
export function quickSort(array, left, right) {
    if (left >= right) return;

    let start = left;
    let end = right;

    let pivot = array[right]
    while (left < right) {
        if (array[left] > pivot) {
            array[right] = array[left];
            array[left] = array[right - 1];
            array[right - 1] = pivot;

            right--;
        } else {
            left++;
        }
    }

    quickSort(array, start, left - 1)
    quickSort(array, left + 1, end)
}
