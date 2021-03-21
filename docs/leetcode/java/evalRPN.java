import java.util.Stack;

public class evalRPN {
    public int evalRPN(String[] tokens) {
        Stack<Integer> ss = new Stack<>();
        for (String s : tokens
        ) {
            try {
                ss.push(Integer.parseInt(s));
            } catch (Exception e) {
                switch (s) {
                    case "+":
                        ss.push(ss.pop() + ss.pop());
                        break;
                    case "-": {
                        int tmp = ss.pop();
                        ss.push(ss.pop()-tmp);
                        break;
                    }
                    case "*":
                        ss.push(ss.pop() * ss.pop());
                        break;
                    case "/": {
                        int tmp = ss.pop();
                        ss.push(ss.pop()/tmp);
                        break;
                    }
                }
            }
        }
        return ss.pop();
    }
}
