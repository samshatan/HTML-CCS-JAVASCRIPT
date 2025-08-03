public class threading extends Thread {

  public void run(){
    // for(int i=0;i<5;i++){
    //   try {
    //     Thread.sleep(1000);
    //   } catch (InterruptedException e) {
    //     System.out.println("Thread is sleeping");
    //   }
    // }
    System.out.println("Thread is running");
    System.out.println(Thread.currentThread().getName());
    System.out.println(Thread.currentThread().getPriority());
  }

  public static void main(String[] args) {
    threading t1 = new threading();
    t1.setName("Hello");
    t1.setPriority(MIN_PRIORITY);
    t1.start();
    threading t2 = new threading();
    t2.setPriority(MAX_PRIORITY);
    t2.start();
  }
}
