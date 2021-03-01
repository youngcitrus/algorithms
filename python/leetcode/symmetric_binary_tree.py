# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def symmetricLevel(self, level: List) -> bool:
        reverse_level = list(reversed(level))
        return level == reverse_level

    def isSymmetric(self, root: TreeNode) -> bool:
        queue = [root]
        while len(queue) > 0:
            length = len(queue)
            level = []

            for i in range(0, length):
                current = queue.pop(0)
                if current.left != None:
                    queue.append(current.left)
                    level.append(current.left.val)
                else:
                    level.append(None)
                if current.right != None:
                    queue.append(current.right)
                    level.append(current.right.val)
                else:
                    level.append(None)

            if self.symmetricLevel(level) == False:
                return False

        return True


# https://leetcode.com/problems/symmetric-tree/
