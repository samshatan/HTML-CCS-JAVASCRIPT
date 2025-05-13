class Node{
    int data;
    Node next;
}
public class singlylinkedlist {
    static Node head = null;
    public static void  addFirst(int data){
        Node temp=new Node();
        temp.data=data;
        if(head==null)
        {
            head=temp;
        }
        else{
            temp.next=head;
            head=temp;
        }
    }
    public static void addLast(int data) {
        Node temp = new Node();
        temp.data = data;
        if(head==null)
        {
            head=temp;
        }
        else{
            Node temp1 = head;
            while(temp1!=null)
            {
                temp=temp.next;
            }
            temp1.next = temp;
            temp.next = null;
        }
        public static void deleteFirst(){
            if(head==null)
            {
                System.out.println("List is empty");
            }
            else{
                head=head.next;
            }
        }
    }
    public static void main(String[] args) {
        addFirst(5);
        addFirst(10);
        addFirst(15);
        addFirst(20);
        addLast(50);
        deleteFirst();
    }
}

}
