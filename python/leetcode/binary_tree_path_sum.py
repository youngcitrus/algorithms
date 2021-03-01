# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if root == None:
            return False
        if root.val == targetSum and self.isLeafNode(root):
            return True
        left = False
        right = False

        if root.left != None:
            left = self.hasPathSum(root.left, targetSum - root.val)
        if root.right != None:
            right = self.hasPathSum(root.right, targetSum - root.val)

        return left or right

    def isLeafNode(self, root: TreeNode) -> bool:
        return root.left == None and root.right == None

# https://leetcode.com/problems/path-sum/
