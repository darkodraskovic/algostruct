const connectedGraph = [
    [2, 6, 10],  // 0
    [3, 7, 8, 9],  // 1
    [0, 3, 6],  // 2
    [1, 2, 4, 6],  // 3
    [3, 5],  // 4
    [4, 11],  // 5
    [0, 2, 3],  // 6
    [1, 8],  // 7
    [7, 1],  // 8
    [1],  // 9
    [0],  // 10
    [5],  // 11
]

const disconnectedGraph = [
    [2, 6, 10],  // 0
    [7, 8, 9],  // 1
    [0, 3, 6],  // 2
    [2, 6],  // 3
    [3, 5],  // 4
    [4, 11],  // 5
    [0, 2, 3],  // 6
    [1, 8],  // 7
    [7, 1],  // 8
    [1],  // 9
    [0],  // 10
    [5],  // 11
]

function _dfs_visit(node, graph, visited) {
    visited[node] = true;
    graph[node].forEach(neighbor => {
        if (!visited[neighbor]) _dfs_visit(neighbor, graph, visited);
    });
}

function dfs(graph) {
    let count = 0;
    let visited = Array(graph.length).fill(false);
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            count++;
            _dfs_visit(i, graph, visited);
        }
    }
    return count;
}

function _bfs_solve_path(graph, startNode, endNode) {
    let enqueued = Array(graph.length).fill(false);
    let parents = Array(graph.length).fill(undefined);
    let queue = [];

    queue.push(startNode);
    enqueued[startNode] = true;
    while (queue.length) {
        let node = queue.shift();
        if (node == endNode) break;
        for (let i = 0; i < graph[node].length; i++) {
            const neighbor = graph[node][i];
            if (enqueued[neighbor]) continue;
            queue.push(neighbor);
            enqueued[neighbor] = true;
            parents[neighbor] = node;
        }
    }

    return parents;
}

function _bfs_reconstruct_path(parents, endNode) {
    let path = [];
    let current = endNode;
    while (current) {
        path.push(current);
        current = parents[current];
    }
    path.reverse();
}

function bfs(graph, startNode, endNode) {
    let parents = _bfs_solve_path(graph, startNode, endNode);
    return _bfs_reconstruct_path(parents, endNode);
}

(function () {
    // dfs(connectedGraph);
    // dfs(disconnectedGraph);

    bfs(connectedGraph, 2, 7);
})()