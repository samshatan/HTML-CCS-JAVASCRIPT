
import java.io.FileInputStream;
import java.io.FileOutputStream;



public class charcterbyte {
  public static void main(String[] args) {
    try {
        // FileInputStream file = new FileInputStream("abc.txt");
        // int i=0;
        // while((i=file.read())!=-1){
        //   System.out.print((char)(i));
        // }
        // FileOutputStream fileOut = new FileOutputStream("abc.txt");
        // String s = "Hi i m Sam";
        // byte[] b = s.getBytes();
        // fileOut.write(b);
        // System.out.println();
        // i=0;
        // while((i=file.read())!=-1){
        //   System.out.println((char)(i));
        // }
        FileInputStream file = new FileInputStream("abc.txt");
        FileOutputStream fout = new FileOutputStream("Hello.ved");
        int i=0;
        int count =0;
        while((i=file.read())!=-1){
          fout.write((byte)(i));
          count++;
        }
        System.out.println(count);
    } catch (Exception e) {
    }
  }
}
