class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        visited = set()
        current = head
        while (current != None):
            if (current in visited):
                return True
            visited.add(current)
            if (current.next == None):
                break
            else:
                current = current.next
        return False


# https://leetcode.com/problems/linked-list-cycle/
