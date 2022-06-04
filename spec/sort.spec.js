import {
    merge,
    bubbleSort, selectionSort, insertionSort, mergeSort, quickSort
} from '../src/algorithms/sort.js'

describe("Function", function () {
    const left = [1, 2, 5, 6, 44, 99];
    const right = [0, 4, 63, 87, 283];

    const createNumbers = () => [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sorted = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

    // in-place algorithms
    it(merge.name + " merges two sorted arrays", function () {
        let merged = merge(left, right);
        expect(merged).toEqual(sorted);

        merged = merge([], []);
        expect(merged).toEqual([]);

        merged = merge([0, 1, 2], []);
        expect(merged).toEqual([0, 1, 2]);
        merged = merge([], [0, 1, 2]);
        expect(merged).toEqual([0, 1, 2]);

        merged = merge([3, 4], [0, 2, 7]);
        expect(merged).toEqual([0, 2, 3, 4, 7]);
        merged = merge([0, 2, 7], [3, 4]);
        expect(merged).toEqual([0, 2, 3, 4, 7]);
    });

    let sortFuncs = [bubbleSort, selectionSort, insertionSort];
    sortFuncs.forEach(func => {
        it(func.name + " which sorts numbers", function () {
            let numbers = createNumbers();
            func(numbers);
            expect(numbers).toEqual(sorted);
        });
    });

    it(mergeSort.name + " which sorts numbers", function () {
        let numbers = createNumbers();
        numbers = mergeSort(numbers);
        expect(numbers).toEqual(sorted);
    });

    it(quickSort.name + " which sorts numbers", function () {
        let numbers = createNumbers();
        quickSort(numbers, 0, numbers.length - 1);
        expect(numbers).toEqual(sorted);
    });
});
