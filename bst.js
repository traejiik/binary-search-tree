class Node {
  constructor(vale) {
    this.value = vale;
    this.leftCh = null;
    this.rightCh = null;
  }
}

export default class Tree {
  constructor(list) {
    this.array = this.sortArr(list);
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  sortArr(uList) {
    if (uList.length === 0 || uList.length === 1) {
      return uList;
    }
    const mid = Math.floor(uList.length / 2);
    const leftHalf = uList.slice(0, mid);
    const rightHalf = uList.slice(mid, uList.length);

    const sortedLeft = this.sortArr(leftHalf);
    const sortedRight = this.sortArr(rightHalf);

    function merge(left, right) {
      const sorted = [];
      let leftIndex = 0;
      let rightIndex = 0;
      let lastAdded = null;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          if (left[leftIndex] !== lastAdded) {
            sorted.push(left[leftIndex]);
            lastAdded = left[leftIndex];
          }
          leftIndex++;
        } else {
          if (right[rightIndex] !== lastAdded) {
            sorted.push(right[rightIndex]);
            lastAdded = right[rightIndex];
          }
          rightIndex++;
        }
      }

      while (leftIndex < left.length) {
        if (left[leftIndex] !== lastAdded) {
          sorted.push(left[leftIndex]);
          lastAdded = left[leftIndex];
        }
        leftIndex++;
      }

      while (rightIndex < right.length) {
        if (right[rightIndex] !== lastAdded) {
          sorted.push(right[rightIndex]);
          lastAdded = right[rightIndex];
        }
        rightIndex++;
      }

      return sorted;
    }

    return merge(sortedLeft, sortedRight);
  }

  buildTree(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);

    const root = new Node(array[mid]);
    root.leftCh = this.buildTree(array, start, mid - 1);
    root.rightCh = this.buildTree(array, mid + 1, array.length - 1);

    return root;
  }

  insert(value) {
    let current = this.root;
    let parent = null;
    while (current) {
      parent = current;
      if (value < current.value) {
        current = current.leftCh;
      } else {
        current = current.rightCh;
      }
    }

    if (value < parent.value) {
      parent.leftCh = new Node(value);
    } else {
      parent.rightCh = new Node(value);
    }
  }

  deleteItem(value) {}

  find(value) {}

  levelOrder(callback) {}

  inOrder(callback) {}

  preOrder(callback) {}

  postOrder(callback) {}

  height(node) {}

  depth(node) {}

  isBalanced() {}

  rebalance() {}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
