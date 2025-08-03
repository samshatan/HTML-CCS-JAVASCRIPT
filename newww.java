import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

class User_Exception extends Exception{
    public User_Exception(String msg){
        super(msg);
    }
}

public class newww{
    // private isPrime(int n){
    //     if (n<=1){
    //         return false;
    //     }
    //     if (n<=3){
    //         return true;
    //     }
    //     if(n%2==0 || num%3==0){
    //         return false;
    //     }
    //     int i=5;
    //     while(i*i<=n){
    //         if(n%i==0 || n%(i+2)==0){
    //             return false;
    //         i+=6;
    //     return true;
    //         }
    //     }
    // }

    public static void main(String[] args){
        // String s1 = "this apple is sweet";
        // String s2 = "this apple is sour";
        // String[] arr1 = s1.split(" ");
        // String[] arr2 = s2.split(" ");
        // HashMap<String, Integer> count=new HashMap<>();
        // for(int i=0; i<arr1.length; i++)
        // {
        //     count.put(arr1[i],count.getOrDefault(arr1[i],0)+1);
        // }
        // for(int i=0; i<arr2.length; i++)
        // {
        //     count.put(arr2[i],count.getOrDefault(arr2[i],0)+1);
        // }
        // System.out.println(count);
        // int counti = 0;
        // for(String s : count.keySet()){
        //     if(count.get(s)==1){
        //         counti++;
        //     }
        // }
        // String ans[] = new String[counti];
        // int p = 0;
        // for(String s : count.keySet()){
        //     if(count.get(s)==1){
        //         ans[p] = s;
        //         p++;
        //     }
        // }
        // for(int i=0;i<counti;i++){
        //     System.out.println(ans[i]);
        // }
        // try{
        //     Scanner sc = new Scanner(System.in);
        //     FileReader r = new FileReader("Comma.txt");
        //     int a = sc.nextInt();
        //     if(a%2!=0){
        //         throw new ArithmeticException("Cannot take odd number");
        //     }
        // }catch(ArithmeticException e){
        //     System.out.println(e);
        // }catch(FileNotFoundException e){
        //     System.out.println("File Not Found");
        // }finally{
        //     System.out.println("All error occured");
        // }

        // FileReader r = new FileReader("Comma.txt");

        // try {
        //     int a = 30;
        //     if(a<40){
        //         throw new User_Exception("Less than 40");
        //     }
        // } catch (User_Exception e) {
        //     System.out.println(e);
        // }

        List<Integer> count = new ArrayList<>();
        count.add(34);
        count.add(453);
        count.addAll(count);
        System.out.println(count);
        Iterator<Integer> i = count.iterator();
        while(i.hasNext()){
            System.out.println(i.next());
        }
        Collections.sort(count);
        System.out.println(count);
        List<Integer> counting = new LinkedList<>();
        counting.add(34);
        counting.add(453);
        counting.addAll(count);
        System.out.println(count);
        Iterator<Integer> j = counting.iterator();
        while(j.hasNext()){
            System.out.println(j.next());
        }
        Collections.sort(count);
        System.out.println(counting);
    }
}