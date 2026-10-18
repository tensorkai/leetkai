// Problem 12: Boolean Checks
// Complete isPassing so it returns true when score is at least 75.
// Otherwise, return false. Assume score is between 0 and 100.
// Hint: A comparison such as >= already produces a boolean.
// Examples:
// isPassing(90) -> true
// isPassing(75) -> true
// isPassing(74) -> false
// isPassing(0) -> false

export function isPassing(score: number): boolean {
    if (score >= 75) {
        return true;
    }

    else {
        return false;
    }
}
