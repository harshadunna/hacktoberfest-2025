/**
 * Task 1: Print the first n Fibonacci numbers.
 */
public class Task1_Fibonacci {

    /**
     * This function prints the first n Fibonacci numbers.
     */
    public static void printFibonacci(int n) {
        // Handle edge cases (n <= 0)
        if (n <= 0) {
            System.out.println("Please enter a positive number.");
            return;
        }

        // Initialize the first two Fibonacci numbers
        int first = 0;
        int second = 1;

        System.out.println("First " + n + " Fibonacci numbers:");

        // Loop to print the first n numbers
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                System.out.print(first + " ");
                continue;
            }
            if (i == 1) {
                System.out.print(second + " ");
                continue;
            }

            // Calculate the next Fibonacci number
            int next = first + second;
            System.out.print(next + " ");

            // Update first and second for the next iteration
            first = second;
            second = next;
        }
        System.out.println(); // Add a newline at the end
    }

    /**
     * Main method to test the printFibonacci function.
     */
    public static void main(String[] args) {
        
        // --- Test Cases ---
        
        // Example 1: Print first 10
        printFibonacci(10);
        // Output: 0 1 1 2 3 5 8 13 21 34 

        // Example 2: Print first 5
        printFibonacci(5);
        // Output: 0 1 1 2 3

        // Example 3: Print first 1
        printFibonacci(1);
        // Output: 0 
    }
}