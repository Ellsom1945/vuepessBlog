

public class reverseBetween {
    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode to=null;
        ListNode ans =new ListNode(0,head);
        ListNode tmp = null;
        ListNode tmp2=null;
        ListNode from=null;
        if (left==1){
            from=ans;
        }
        if (head.next != null) {
            while (left!=1) {
                if (left==2){
                    from=head;
                }
               head = head.next;
               left--;
               right--;
            }
            to=head;
            while (right!=0){
                tmp2=head.next;
                head.next=tmp;
                tmp=head;
                head=tmp2;
                right--;
            }
            from.next=tmp;
            to.next=head;
        }
        return ans.next;
    }
}
