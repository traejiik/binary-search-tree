// eslint-disable-next-line import/extensions
import Bst from './bst.js';

const list1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 88, 24];
const tree1 = new Bst(list1);

const list2 = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 200),
);
const tree2 = new Bst(list2);

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
