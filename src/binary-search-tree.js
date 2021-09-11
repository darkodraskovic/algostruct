export class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return;

      if (value < current.value) {
        if (!current.left) {
          current.left = new Node(value);
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Node(value);
          return;
        }
        current = current.right;
      }
    }
  }
  remove(value) {
    if (!this.root) return null;

    let parent = null;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        if (current.left && current.right) { // two children => replace with successor
          let successor = current.right;
          let successorParent = null;
          while(successor.left) {
            successorParent = successor;
            successor = successor.left;
          }
          successor.left = current.left;
          if (successorParent) {
            successorParent.left = successor.right;
            successor.right = current.right;
          }
          if (!parent) {
            this.root = successor;
          } else {
            if (current.value < parent.value) parent.left = successor;
            else parent.right = successor;
          }
          return current;
        } else if (current.left || current.right) { // one child => bypass
          if (!parent) {
            this.root = current.left || current.right;
            return current.left || current.right;
          }
          if (current.value < parent.value) {
            if (current.left) parent.left = current.left;
            else parent.left = current.right;
          } else {
            if (current.left) parent.right = current.left;
            else parent.right = current.right;
          }
          return current;
        } else { // no children => remove
          if (current.value < parent.value) parent.left = null;
          else parent.right = null;
          return current;
        }
      }
    }
    return null
  }
  lookup(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
}

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left ? traverse(node.left) : null;
  tree.right = node.right ? traverse(node.right) : null;
  return tree;
}

export function test() {
  const bst = new BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(6);
  bst.insert(5);
  bst.insert(3);
  bst.insert(20);
  bst.insert(20);
  bst.insert(170);
  bst.insert(15);
  bst.insert(1);
  bst.insert(25);
  bst.insert(300);
  bst.insert(7);
  bst.insert(30);

  bst.remove(9); // root
  bst.remove(300); // leaf
  bst.remove(25); // leaf
  bst.remove(7); // single left child
  bst.remove(25); // single right child
  bst.remove(9); // root
  bst.remove(9); // remove non existing
  bst.remove(170);
  bst.remove(15); // root
  console.dir(traverse(bst.root), {depth: null});

  // console.log("================================")
  // console.log(bst.lookup(20));
}
