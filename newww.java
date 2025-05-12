import java.util.HashMap;

public class newww{
    public static void main(String[] args) {
        String s1 = "this apple is sweet";
        String s2 = "this apple is sour";
        String[] arr1 = s1.split(" ");
        String[] arr2 = s2.split(" ");
        HashMap<String, Integer> count=new HashMap<>();
        for(int i=0; i<arr1.length; i++)
        {
            count.put(arr1[i],count.getOrDefault(arr1[i],0)+1);
        }
        for(int i=0; i<arr2.length; i++)
        {
            count.put(arr2[i],count.getOrDefault(arr2[i],0)+1);
        }
        System.out.println(count);
        int counti = 0;
        for(String s : count.keySet()){
            if(count.get(s)==1){
                counti++;
            }
        }
        String ans[] = new String[counti];
        int p = 0;
        for(String s : count.keySet()){
            if(count.get(s)==1){
                ans[p] = s;
                p++;
            }
        }
        for(int i=0;i<counti;i++){
            System.out.println(ans[i]);
        }
    }
}