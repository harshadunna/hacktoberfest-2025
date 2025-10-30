//Task 3: Cleaner & More Flexible Version (returns array instead of printing)
function fibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const series = [0, 1];

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

//Example
console.log("Fibonacci Series:", fibonacciIterative(7));
//Output: [0, 1, 1, 2, 3, 5, 8]
