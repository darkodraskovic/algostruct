class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        if (this.adjacentList[node]) return;
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.addVertex(node1);
        this.addVertex(node2);

        if (!this.adjacentList[node1].includes(node2))
            this.adjacentList[node1].push(node2);
        // undirected graph - add both edge dirs
        if (!this.adjacentList[node2].includes(node1))
            this.adjacentList[node2].push(node1);
    }

    showConnections() {
        console.log("number of nodes: " + this.numberOfNodes);
        console.log(this.adjacentList);
    }
}

export function test() {
    const graph = new Graph();
    for (let i = 0; i < 7; i++) {
        graph.addVertex(i);
    }

    // add existing vertex - noop
    graph.addVertex(3);

    graph.addEdge(3, 1);
    graph.addEdge(3, 4);
    graph.addEdge(4, 2);
    graph.addEdge(4, 5);
    graph.addEdge(1, 2);
    graph.addEdge(1, 0);
    graph.addEdge(0, 2);
    graph.addEdge(6, 5);

    // add existing edge - noop
    graph.addEdge(0, 2);

    graph.showConnections();
}