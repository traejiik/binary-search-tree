// eslint-disable-next-line import/extensions
import Bst from './bst.js';

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

function printNode(node) {
  console.log(node);
}

// Tree 1 - array of random numbers < 100.
const list = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 88, 24];
const tree = new Bst(list);
