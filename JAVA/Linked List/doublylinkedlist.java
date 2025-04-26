class Node{
    int val;
    Node prev;
    Node next;
    
    public Node(int data){
        this.val = data;
        this.prev = null;
        this.next = null;
    }
}

public class doublylinkedlist {
    
    Node head, tail;
    int size;
    
    public doublylinkedlist(){
        head = new Node(-1);
        tail = new Node(-1);
        head.next = tail;
        tail.prev = head;
        size = 0;
    }

    public void insertAtBeginning(Node node){
        node.next = head.next;
        node.next.prev = node;
        node.prev = head;
        head.next = node;
        size+=1;
    }

    public void insertAtLast(Node node){
        node.prev = tail.prev;
        tail.prev.next = node;
        node.next = tail;
        tail.prev = node;
        size+=1;
    }

    public void insertAfterSpecific(Node node, int val){
        Node temp = head;
        while(temp.val!=val){
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next.prev = node;
        node.prev = temp;
        temp.next = node;
    }

    public void insertBeforeSpecific(Node node, int val){
        Node temp = head;
        while(temp.next.val!=val){
            temp = temp.next;
        }
        node.next = temp.next;
        temp.next.prev = node;
        node.prev = temp;
        temp.next = node;
    }

    public void deleteFirst(){
        head = head.next.next;
        head.next.prev = head;
        size-=1;
    }

    public void deleteLast(){
        tail.prev = tail.prev.prev;
        tail.prev.next = tail;
        size-=1;
    }

    public void deleteSpecific(int val){
        Node temp = head;
        while(temp.next.val!=val){
            temp = temp.next;
        }
        temp.next = temp.next.next;
        temp.next.prev = temp;
        size-=1;
    }

    public void display(){
        Node temp = head.next;
        while(temp!=tail){
            System.out.print(temp.val+"-> ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        doublylinkedlist count = new doublylinkedlist();
        count.insertAtBeginning(new Node(45));
        count.insertAtBeginning(new Node(36));
        count.insertAtBeginning(new Node(98));
        count.insertAtBeginning(new Node(23));
        count.display();
        count.insertAfterSpecific(new Node(78), 36);
        count.insertAtLast(new Node(98));
        count.display();
        count.deleteFirst();
        count.display();
        count.deleteLast();
        count.display();
        count.deleteSpecific(36);
        count.display();
        System.out.println(count.size);
    }
}
