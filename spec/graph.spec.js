import { bfs, dfs } from "../src/algorithms/graph.js";

describe("Function", function () {
    const connectedGraph = [
        [2, 6, 10], // 0
        [3, 7, 8, 9], // 1
        [0, 3, 6], // 2
        [1, 2, 4, 6], // 3
        [3, 5], // 4
        [4, 11], // 5
        [0, 2, 3], // 6
        [1, 8], // 7
        [7, 1], // 8
        [1], // 9
        [0], // 10
        [5], // 11
    ];

    const disconnectedGraph = [
        [2, 6, 10], // 0
        [7, 8, 9], // 1
        [0, 3, 6], // 2
        [2, 4, 6], // 3
        [3, 5], // 4
        [4, 11], // 5
        [0, 2, 3], // 6
        [1, 8], // 7
        [7, 1], // 8
        [1], // 9
        [0], // 10
        [5], // 11
    ];

    // in-place algorithms
    it(dfs.name + " depth first searches a graph", function () {
        let count = dfs(connectedGraph);
        expect(count).toEqual(1);

        count = dfs(disconnectedGraph);
        expect(count).toEqual(3);
    });

    it(bfs.name + " breadth first searches a graph", function () {
        expect(bfs(connectedGraph, 0, 9)).toEqual([0, 2, 3, 1, 9]);
        expect(bfs(connectedGraph, 9, 0)).toEqual([0, 2, 3, 1, 9].reverse());
        expect(bfs(connectedGraph, 6, 11)).toEqual([6, 3, 4, 5, 11]);
        expect(bfs(connectedGraph, 11, 6)).toEqual([6, 3, 4, 5, 11].reverse());

        expect(bfs(disconnectedGraph, 2, 7)).toEqual([7]);
        expect(bfs(disconnectedGraph, 7, 2)).toEqual([2]);
        expect(bfs(disconnectedGraph, 0, 4)).toEqual([0, 2, 3, 4]);
        expect(bfs(disconnectedGraph, 4, 0)).toEqual([0, 2, 3, 4].reverse());
    });
});
