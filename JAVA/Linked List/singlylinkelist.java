class Node{
    int data;
    Node next;
}

public class singlylinkelist {

    static Node head = null;
    static Node end = null;
    
    public static void insertAtBeginning(int val){
        Node node = new Node();
        node.data = val;
        if(head==null){
            head = node;
            end = node;
        }
        else{
            node.next = head;
            head = node;
        }
    }

    public static void insertAtLast(int val){
        Node node = new Node();
        node.data = val;
        if(head==null){
            head = node;
        }
        else{
            end.next = node;
        }
        end = node;
    }

    public static void insertAfterSpecificPoint(int val,int point){
        Node node = new Node();
        node.data = val;
        Node temp = head;
        while(temp.data!=point){
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next = node;
    }

    public static void insertBeforeSpecificPoint(int val,int point){
        Node node = new Node();
        node.data = val;
        Node temp = head;
        while(temp.next.data!=point){
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next = node;
    }

    public static void deleteNode(int val){
        Node temp = head;
        while(temp.next.data != val){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    public static void middleElement(){
        Node fast = head;
        Node slow = head;
        while(fast!=null && fast.next!=null){
            fast = fast.next.next;
            slow = slow.next;
        }
        System.out.println(slow.data);
    }

    public static void print(){
        Node temp = head;
        while(temp!=null){
            System.out.print(temp.data+"-> ");
            temp=temp.next;
        }
    }
    public static void main(String[] args) {
        insertAtBeginning(45);
        insertAtBeginning(43);
        insertAtBeginning(23);
        insertAtBeginning(87);
        insertAtLast(90);
        insertAtLast(89);
        insertAtLast(100);
        insertAfterSpecificPoint(10,43);
        insertBeforeSpecificPoint(20, 10);
        deleteNode(20);
        middleElement();
        print();
        System.out.println();
        insertAtLast(567);
        middleElement();
        print();
    }
}
