import {
    BinarySearchTree
} from '../src/data-structures/binary-search-tree.js'

describe("Function", function () {

    const insert = [9, 4, 6, 5, 3, 20, 20, 170, 15, 1, 25, 300, 7, 30];
    const remove = [9, 300, 25, 7, 25, 9, 9, 170, 15];

    it(BinarySearchTree.name + " constructs binary search tree", function () {
        const bst = new BinarySearchTree();

        insert.forEach((value) => bst.insert(value));

        insert.forEach((value) => expect(bst.lookup(value)).not.toBeNull());

        remove.forEach((value) => bst.remove(value));

        let difference = insert.filter(x => !remove.includes(x));

        difference.forEach((value) => expect(bst.lookup(value)).not.toBeNull());

        remove.forEach((value) => expect(bst.lookup(value)).toBeNull());
    })
})