// Problem 7: Arrays
// Create and export a variable named 'scores' with the explicit type number[].
// Give it the values 80, 95, and 70.

export let scores: number[] = [80, 95, 70];

// Complete sumScores so it returns the sum of all numbers in the array.
// An empty array should return 0. Do not change the input array.
// Examples:
// sumScores([80, 95, 70]) -> 245
// sumScores([10]) -> 10
// sumScores([]) -> 0

export function sumScores(scores: number[]): number {
    let total: number = 0;

    // Add each score to the running total.
    for (const score of scores) {
        total += score;
    }

    // If the array is empty, the loop is skipped and total stays 0.
    return total;
}

// NOTE: Problem Solved
