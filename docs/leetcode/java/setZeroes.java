import java.util.HashSet;
import java.util.Set;

public class setZeroes {
    public void setZeroes(int[][] matrix) {
        Set<Integer> setr = new HashSet<>();
        HashSet<Integer> setc = new HashSet<>();
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                    if (matrix[i][j]==0){
                        setc.add(i);
                        setr.add(j);
                    }
            }
        }
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (setc.contains(i)||setr.contains(j)){
                    matrix[i][j]=0;
                }
            }
        }
    }
}
