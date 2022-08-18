export class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class BinarySearchTree {
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
        // we found value
        // 1. current has two children => replace with successor
        if (current.left && current.right) {
          // detach and rearrange left and right branch
          let successor = current.right;
          let successorParent = null;
          while (successor.left) {
            successorParent = successor;
            successor = successor.left;
          }
          successor.left = current.left;
          if (successorParent) {
            successorParent.left = successor.right;
            successor.right = current.right;
          }
          if (!parent) {
            // we removed root
            this.root = successor;
          } else {
            // attach branch to parent's left
            if (current.value < parent.value) parent.left = successor;
            // attach branch to parent's right
            else parent.right = successor;
          }
          return current;
          // 2. current has one child => bypass current
        } else if (current.left || current.right) {
          // value is at the root
          if (!parent) {
            this.root = current.left || current.right;
            return current.left || current.right;
          }
          // current is left of parent
          if (current.value < parent.value) {
            if (current.left) parent.left = current.left;
            else parent.left = current.right;
          } else {
            if (current.left) parent.right = current.left;
            else parent.right = current.right;
          }
          return current;
          // 3. current has no children => remove current
        } else {
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
  bfs() {
    let list = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      list.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return list;
  }
  dfs() {

  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left ? traverse(node.left) : null;
  tree.right = node.right ? traverse(node.right) : null;
  return tree;
}

(function test() {
  const bst = new BinarySearchTree();
  var tree = traverse(bst.root);
  console.dir(tree, { depth: null });
})()