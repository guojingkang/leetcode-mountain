
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {
  const firstNum = reversal(l1);
  const secondNum = reversal(l2);

  return reversal(l1) + reversal(l2);
};


function reversal(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index] * (Math.pow(10, index));
  }
  return sum;
}


console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

