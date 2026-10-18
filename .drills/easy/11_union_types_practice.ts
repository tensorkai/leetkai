// Problem 11: Union Types and Narrowing Practice
// Complete formatProductCode, which accepts either a string or a number.
// If the code is a string, return it in lowercase.
// If the code is a number, return it as a string with the prefix "PRODUCT-".
// Use typeof to check the type before working with the value.
// Examples:
// formatProductCode("ABC") -> "abc"
// formatProductCode(42) -> "PRODUCT-42"
// formatProductCode(0) -> "PRODUCT-0"

export function formatProductCode(code: string | number): string {
    if (typeof code === "string") {
        return code.toUpperCase();
    }

    return `PRODUCT-${code}`;
}


