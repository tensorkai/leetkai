// Problem 10: Arrays Practice
// Create and export a variable named 'prices' with the explicit type number[].
// Give it the values 25, 50, and 15.

// TODO: Define and export prices

// Complete sumPrices so it returns the sum of all numbers in the array.
// An empty array should return 0. Do not change the input array.
// Practice the same approach as Problem 7: start a total at 0,
// loop through the array, and add each price to the total.
// Examples:
// sumPrices([25, 50, 15]) -> 90
// sumPrices([20]) -> 20
// sumPrices([]) -> 0

export let prices: number[] = [20, 50, 15];

export function sumPrices(prices: number[]): number {
    let total: number = 0;

    for (const price of prices) {
        total += price;
    }

    return total;
    // TODO: Calculate and return the total
    throw new Error("Not implemented");
}
