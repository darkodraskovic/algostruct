import {
    BinarySearchTree
} from '../src/data-structures/binary-search-tree.js'

describe("BST search that ", function () {
    const values = [9, 4, 6, 20, 170, 15, 1];
    const bfs = [9, 4, 20, 1, 6, 15, 170];
    const dfs = [9, 4, 1, 6, 20, 15, 170];

    it("breadth first traverses the binary search tree", function () {
        const tree = new BinarySearchTree();
        values.forEach(val => {
            tree.insert(val);
        });
        expect(tree.bfs()).toEqual(bfs);
    });

    // TODO: write preorder, inorder and postorder traverse tests
});