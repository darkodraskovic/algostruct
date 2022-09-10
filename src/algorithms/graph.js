const g_connected = [
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

const g_disconnected = [
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

(function () {
    dfs(g_connected);
    dfs(g_disconnected);
})()