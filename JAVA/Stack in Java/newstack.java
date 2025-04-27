
class mystack<T>{
    T[] stack;
    int capacity;
    int top;

    @SuppressWarnings("unchecked")
    public mystack(int capactity){
        this.capacity = capactity;
        this.stack = (T[]) new Object[capactity];
        this.top = -1;
    }

    public void newpush(T val){
        if(top==capacity){
            System.out.println("STack is fill buffer overflow");
            return;
        }
        top +=1;
        stack[top] = val;
    }

    public T newpop(){
        if(top==-1){
            System.out.println("Stack is Empty");
            return null;
        }
        T temp = stack[top];
        top-=1;
        return temp;
    }
    
    public T newpeek(){
        if(top==-1){
            System.out.println("Stack is empty ");
            return null;
        }
        return stack[top];
    }
    public void display(){
        for (T stack1 : stack) {
            System.out.println(stack1);
        }
    }
}

public class newstack {
    public static void main(String[] args) {
        mystack<Integer> count = new mystack<>(5);
        count.newpush(34);
        count.newpush(54);
        count.newpush(64);
        count.display();
        System.out.println(count.newpop());
        System.out.println(count.newpeek());
    }
}
