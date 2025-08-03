
public class lamdaa{
  public static void main(String[] args) {
    newinterfac fi = (d,e) -> d+e;
    System.out.println(fi.oper(6,7));

  }
}
@FunctionalInterface
interface newinterfac{
  int oper(int a, int b);
} 