import {
    bubbleSort, selectionSort, insertionSort
} from '../src/algorithms/sort.js'

describe("Function", function () {
    const createNumbers = () => [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sorted = [0, 1, 2, 4, 5, 6, 44, 63, 86, 99, 283];

    let sortFuncs = [bubbleSort, selectionSort, insertionSort];
    sortFuncs.forEach(func => {
        it(func.name + " which sorts numbers", function () {
            let numbers = createNumbers();
            func(numbers);
            expect(numbers).toEqual(sorted);
        });
    });
});
