// Problem 8: Union Types and Narrowing
// Complete formatId, which accepts either a string or a number.
// If the ID is a string, return it in uppercase.
// If the ID is a number, return it as a string with the prefix "ID-".
// Use typeof to check the type before working with the value.
// Examples:
// formatId("abc") -> "ABC"
// formatId(42) -> "ID-42"
// formatId(0) -> "ID-0"



export function formatId(id: string | number): string {
    // typeof narrows id to string, so string methods are safe here.
    if (typeof id === "string") {
        return id.toUpperCase();
    }

    // The string branch already returned, so id must be a number here.
    return `ID-${id}`;
}

// NOTE: Problem Solved
