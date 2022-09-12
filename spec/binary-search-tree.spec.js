import { BinarySearchTree } from "../src/data-structures/binary-search-tree.js";

describe("BinarySearchTree methods", function () {
    const insert = [9, 4, 6, 5, 3, 20, 20, 170, 15, 1, 25, 300, 7, 30];
    const remove = [9, 300, 25, 7, 25, 9, 9, 170, 15];

    it(BinarySearchTree.name + " constructs binary search tree", function () {
        const bst = new BinarySearchTree();
        insert.forEach((value) => bst.insert(value));

        insert.forEach((value) => expect(bst.lookup(value)).not.toBeNull());

        remove.forEach((value) => bst.remove(value));

        let difference = insert.filter((x) => !remove.includes(x));

        difference.forEach((value) => expect(bst.lookup(value)).not.toBeNull());

        remove.forEach((value) => expect(bst.lookup(value)).toBeNull());
    });

    it("BinarySearchTree.bfs does a breadth first search traversal", function () {
        const res = [9, 4, 20, 3, 6, 15, 170, 1, 5, 7, 25, 300, 30];
        const bst = new BinarySearchTree();
        insert.forEach((value) => bst.insert(value));

        const bfs = bst.bfs();
        expect(bfs).toEqual(res);

        const bfsRecursive = bst.bfsRecursive([bst.root], []);
        expect(bfsRecursive).toEqual(res);
    });

    it("BinarySearchTree.dfsInorder traverses bst in order", function () {
        const bst = new BinarySearchTree();
        insert.forEach((value) => bst.insert(value));

        const res = [...new Set(insert)];
        res.sort(function (a, b) { return a - b });
        const inOrder = bst.traverseInorder(bst.root, []);
        expect(inOrder).toEqual(res);
    });

    it("BinarySearchTree.dfsPreorder traverses bst in preorder", function () {
        const bst = new BinarySearchTree();
        insert.forEach((value) => bst.insert(value));

        const res = [9, 4, 3, 1, 6, 5, 7, 20, 15, 170, 25, 30, 300];
        const inOrder = bst.traversePreorder(bst.root, []);
        expect(inOrder).toEqual(res);
    });

    it("BinarySearchTree.dfsPostorder traverses bst in postorder", function () {
        const bst = new BinarySearchTree();
        insert.forEach((value) => bst.insert(value));

        const res = [1, 3, 5, 7, 6, 4, 15, 30, 25, 300, 170, 20, 9];
        const inOrder = bst.traversePostorder(bst.root, []);
        expect(inOrder).toEqual(res);
    });
});
