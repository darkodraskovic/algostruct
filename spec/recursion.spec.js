import { findFactorialRecursive, findFactorialIterative } from '../src/algorithms/recursion.js'

describe("Recursion function which", function () {
    var resultRecursive;
    var resultIterative;

    it("calculates factorial recursively", function () {
        resultRecursive = findFactorialRecursive(5);
        expect(resultRecursive).toBe(120);
    });
    it("calculates factorial iteratively", function () {
        resultIterative = findFactorialIterative(5);
        expect(resultIterative).toBe(120);
    });
});

