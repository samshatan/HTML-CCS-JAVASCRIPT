public class NSER {
    public static void main(String[] args) {
        int arr[]={7,3,5,1,5,1,6,4,2,5,10};
        int ans[]=new int [11];
        for(int i=0; i<arr.length; i++)
        {
            for(int j=i+1; j<arr.length; j++)
            {
                if(arr[j]<arr[i])
                {
                    ans[i]=arr[j];
                    break;
                }
                else{
                    ans[i]=-1;
                }
            }
        }
        for(int i=0; i<ans.length; i++)
        {
            System.out.print(ans[i]+" ");
        }
    }
}
