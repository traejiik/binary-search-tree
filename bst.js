class Node {
  constructor(vale, left = null, right = null) {
    this.value = vale;
    this.leftCh = left;
    this.rightCh = right;
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

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          sorted.push(left[leftIndex]);
          leftIndex++;
        } else {
          sorted.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return sorted
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    }

    return merge(sortedLeft, sortedRight);
  }

  buildTree(array) {}

  insert(value) {}

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
