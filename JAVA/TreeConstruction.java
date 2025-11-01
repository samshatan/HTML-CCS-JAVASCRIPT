import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  public TreeNode(int val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

public class TreeConstruction {

  private static List<Integer> bfs(TreeNode root){
    List<Integer> ans = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while(!queue.isEmpty()){
      TreeNode node = queue.poll();
      if(node.left!=null) queue.add(node.left);
      if(node.right!=null) queue.add(node.right);
      ans.add(node.val);
    }
    return ans;
  }


  private static List<List<Integer>> bfsInList(TreeNode root){
    List<List<Integer>> ans = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while(!queue.isEmpty()){
      int size = queue.size();
      List<Integer> list = new ArrayList<>();
      for(int i=0;i<size;i++){
        TreeNode node = queue.poll();
        if(node.left!=null) queue.add(node.left);
        if(node.right!=null) queue.add(node.right);
        list.add(node.val);
      }
      ans.add(list);
    }
    return ans;
  }

  private static List<Integer> leftView(TreeNode root){
    List<Integer> ans = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while(!queue.isEmpty()){
      int size = queue.size();
      for(int i=0;i<size;i++){
        TreeNode node = queue.poll();
        if(node.left!=null) queue.add(node.left);
        if(node.right!=null) queue.add(node.right);
        if(i==0) ans.add(node.val);
      }
    }
    return ans;
  }

  private static List<Integer> rightView(TreeNode root){
    List<Integer> ans = new ArrayList<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while(!queue.isEmpty()){
      int size = queue.size();
      for(int i=0;i<size;i++){
        TreeNode node = queue.poll();
        if(node.left!=null) queue.add(node.left);
        if(node.right!=null) queue.add(node.right);
        if(i==size-1) ans.add(node.val);
      }
    }
    return ans;
  }

  private static List<Integer> boundary(TreeNode root){
    List<Integer> ans = new ArrayList<>();
    Set<TreeNode> set = new HashSet<>();
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while(!queue.isEmpty()){
      int size = queue.size();
      for(int i=0;i<size;i++){
        TreeNode node = queue.poll();
        if(node.left!=null) queue.add(node.left);
        if(node.right!=null) queue.add(node.right);
        if(i==0 || i==size-1) set.add(node);
        if(node.left==null && node.right == null) set.add(node);
      }
    }
    set.stream().forEach(node -> ans.add(node.val));
    return ans;
  }

  private static void preOrder(TreeNode node){
    if(node==null){
      return;
    }
    System.out.print(node.val + " ");
    preOrder(node.left);
    preOrder(node.right);
  }


  private static void inOrder(TreeNode node){
    if(node==null){
      return;
    }
    inOrder(node.left);
    System.out.print(node.val + " ");
    inOrder(node.right);
  }

  private static void postOrder(TreeNode node){
    if(node==null){
      return;
    }
    postOrder(node.left);
    postOrder(node.right);
    System.out.print(node.val + " ");
  }

  private static boolean solveFindPathMatch(TreeNode root, int[] arr, int idx){


    if(root==null){
      return false;
    }

    if(root.left==null && root.right==null && idx == arr.length-1 && root.val == arr[idx]){
      return true;
    }

    if(idx>=arr.length){
      return false;
    }

    if(root.val==arr[idx]){
      boolean left = solveFindPathMatch(root.left, arr, idx+1);
      boolean right = solveFindPathMatch(root.right, arr, idx+1);
      return left || right;
    }
    return false;
  }

  private static boolean matchPath(TreeNode root, int[] arr){
    return solveFindPathMatch(root, arr, 0);
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(2);
    root.left = new TreeNode(7);
    // root.left.left = new TreeNode(17);
    // root.left.right = new TreeNode(22);
    root.right = new TreeNode(8);
    root.right.left = new TreeNode(9);
    root.right.right = new TreeNode(4);
    root.right.left.left = new TreeNode(6);
    // root.right.left.left.left = new TreeNode(12);
    // root.right.left.left.right = new TreeNode(14);
    root.right.right.left = new TreeNode(2);
    root.right.right.right = new TreeNode(7);
    root.right.right.right.left = new TreeNode(10);
    root.right.right.left.right = new TreeNode(8);

    List<Integer> ans = bfs(root);
    ans.stream().forEach(ele -> System.out.println(ele));
    List<List<Integer>> ans2 = bfsInList(root);
    for(List<Integer> list: ans2){
      list.stream().forEach(ele -> System.out.print(ele + " "));
      System.out.println();
    }

    List<Integer> ans3 = leftView(root);
    System.out.println(ans3);

    List<Integer> ans4 = rightView(root);
    System.out.println(ans4);

    List<Integer> ans5 = boundary(root);
    System.out.println(ans5);

    preOrder(root);
    System.out.println();
    inOrder(root);
    System.out.println();
    postOrder(root);

    System.out.println(matchPath(root, new int[]{2,8,9,6}));
  }
}
