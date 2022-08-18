import {
    BinarySearchTree
} from '../src/data-structures/binary-search-tree.js'

// javascript built in search
var beasts = ['Centaur', 'Godzilla',
    'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

(function test() {
    // javascript built in linear searches; O(n)
    console.assert(beasts.indexOf('Godzilla') == 1);
    console.assert(beasts.indexOf('Cyclope') == -1);

    console.assert(beasts.findIndex(function (item) {
        return item == 'Hydra'
    }) == 4);
    console.assert(beasts.findIndex(function (item) {
        return item == 'Cyclope'
    }) == -1);

    console.assert(beasts.find(function (item) {
        return item == 'Hydra'
    }) == 'Hydra');

    console.assert(beasts.includes('Nessie') == true);
    console.assert(beasts.includes('Cyclope') == false);

    // BFS
    const tree = new BinarySearchTree();
    [9, 4, 6, 20, 170, 15, 1].forEach(val => {
        tree.insert(val);
    });
    let bfs = tree.bfs();
    // BFS result: [9, 4, 20, 1, 6, 15, 170]
    // DFS result: [9, 4, 1, 6, 20, 15, 170]
    console.log();
})()

function traverse(node) {

}