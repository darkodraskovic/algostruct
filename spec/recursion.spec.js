import {
    factorialRecursive, factorialIterative,
    fibonacciIterative, fibonacciRecursive,
    fibonacciRecursiveSimple, fibonacciIterativeSimple
} from '../src/algorithms/recursion.js'

describe("Recursion function which", function () {

    let factorialInput = [1, 2, 5];
    let factorialOutput = [1, 2, 120];
    it("calculates factorial recursively", function () {
        for (let i = 0; i < factorialInput.length; i++) {
            expect(factorialRecursive(factorialInput[i])).toBe(factorialOutput[i]);
        }
    });
    it("calculates factorial iteratively", function () {
        for (let i = 0; i < factorialInput.length; i++) {
            expect(factorialIterative(factorialInput[i])).toBe(factorialOutput[i]);
        }
    });
    let fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    it("calculates fibonacci iteratively", function () {
        for (let i = 0; i < fibonacciSequence.length; i++) {
            expect(fibonacciIterative(i)).toBe(
                fibonacciSequence[i]);
        }
    });
    it("calculates fibonacci recursively", function () {
        for (let i = 0; i < fibonacciSequence.length; i++) {
            let result = fibonacciRecursive(i);
            expect(result).toBe(
                fibonacciSequence[i]);
        }
    });
    it("calculates fibonacci recursively simplified", function () {
        for (let i = 0; i < fibonacciSequence.length; i++) {
            let result = fibonacciRecursiveSimple(i);
            expect(result).toBe(
                fibonacciSequence[i]);
        }
    });
    it("calculates fibonacci iteratively simplified", function () {
        for (let i = 0; i < fibonacciSequence.length; i++) {
            let result = fibonacciIterativeSimple(i);
            expect(result).toBe(
                fibonacciSequence[i]);
        }
    });
});

