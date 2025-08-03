
import java.util.function.Consumer;

@FunctionalInterface
interface newinterface{
  void printm(String msg);
}

public class intefaces implements Consumer<Integer>{
  // public void printm(String msg){
  //   System.out.println(msg);
  // }
  @Override
  public void accept(Integer s){
    System.out.println(s);
  }
  public static void main(String[] args) {
    intefaces fi = new intefaces();
    fi.accept(3);
  }
}
