// eslint-disable-next-line import/extensions
import Bst from './bst.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.rightCh, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.leftCh, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

function pN(node) {
  console.log(node);
}
function pNv(node) {
  if (!node) return;
  console.log(node.value);
}

// Tree - array of random numbers < 100.
const list = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 88, 24];
const tree = new Bst(list);

pN(tree.isBalanced());
prettyPrint(tree.root);

// print out elements
/*
pN('Level Order');
pN(tree.levelOrder(pNv));
pN(' ');
pN('Preorder');
pN(tree.preOrder(pNv));
pN(' ');
pN('Postorder');
pN(tree.postOrder(pNv));
pN(' ');
pN('Inorder');
pN(tree.inOrder(pNv));
*/

// insert elements to unbalance tree
for (let i = 0; i < 20; i++) {
  tree.insert(Math.floor(Math.random() * 300));
}
pN(tree.isBalanced());
prettyPrint(tree.root);

// rebalance the tree
tree.rebalance();
prettyPrint(tree.root);
pN(tree.isBalanced());

// print out elements
/*
pN('Level Order');
pN(tree.levelOrder(pNv));
pN(' ');
pN('Preorder');
pN(tree.preOrder(pNv));
pN(' ');
pN('Postorder');
pN(tree.postOrder(pNv));
pN(' ');
pN('Inorder');
pN(tree.inOrder(pNv));
*/
