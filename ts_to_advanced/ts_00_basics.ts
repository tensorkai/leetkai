// ==========================================
// TYPESCRIPT 00: BASIC SYNTAX AND EVERYDAY CODE
// ==========================================
// Start here BEFORE ts_01_fundamentals.ts. Read one numbered section at a time.
// Each section explains what syntax means, when to use it, and example results.
// See README.md in this folder for the learning order and run/check commands.
// Examples are independent blocks so you can reuse names without collisions.
// Lines beginning with // are explanations, not instructions the computer runs.

// ------------------------------------------
// 1. JAVASCRIPT, TYPESCRIPT, AND EXECUTION
// ------------------------------------------
// JavaScript supplies runtime behavior: calculations, loops, functions, etc.
// TypeScript adds checks BEFORE execution. Most type syntax is removed when
// producing JavaScript. Types do not automatically validate incoming data.
// A compiler/type error differs from a runtime error and from a wrong result.
// Example: returning the wrong total can be valid code with incorrect logic.
// Browsers run JavaScript; they do not directly execute TypeScript annotations.

// ------------------------------------------
// 2. STATEMENTS, EXPRESSIONS, COMMENTS, AND PUNCTUATION
// ------------------------------------------
// An expression produces a value: 2 + 3, age >= 18, or a function call.
// A statement performs a step: a declaration, assignment, if, or return.
// ; ends a statement. JavaScript can insert semicolons, but write them clearly.
// {} groups statements into a block; it also encloses object properties.
// () groups expressions, holds function arguments, or surrounds an if condition.
// [] creates an array or accesses a property/index. , separates items.
// . accesses a property. : introduces a type or separates an object key/value.
// Names are case-sensitive: total and Total are different identifiers.
// Use meaningful camelCase names; names cannot start with a digit or be keywords.
/* This is a block comment.
   It can span several lines. */
{
    const total = 2 + 3;
    console.log("2. Total:", total); // 2. Total: 5
    // console.log prints information; it does not return your calculation.
}

// ------------------------------------------
// 3. VARIABLES: const, let, var, AND SCOPE
// ------------------------------------------
// A variable is a name for a value. Declaration creates the name; initialization
// gives its first value; assignment replaces the value held by that variable.
// Prefer const unless you need reassignment. const requires an initial value.
// let and const are block-scoped: usable only within their enclosing block.
// var is older and function-scoped, not block-scoped; avoid it in new code.
// let/const cannot be accessed before their declaration (temporal dead zone).
{
    const name = "Kai";
    let points = 10;
    points = 15;
    // name = "Ana"; // Error: cannot reassign a const binding.
    let answer: number;
    answer = 42; // Assign before reading it.
    if (points > 0) {
        const bonus = 5;
        points += bonus;
    }
    // console.log(bonus); // Error: bonus is outside its scope.
    const bag = ["pen"];
    bag.push("book"); // Allowed: const does NOT freeze the array/object.
    console.log("3.", name, points, answer, bag); // Kai, 20, 42, [pen, book]
}

// ------------------------------------------
// 4. VALUES, TYPES, AND LITERALS
// ------------------------------------------
// A literal is a value written directly in code, such as 12 or "hello".
// Primitive types: string, number, boolean, undefined, null, bigint, symbol.
// Arrays, functions, and other objects are non-primitive values.
// Use lowercase string/number/boolean types, not String/Number/Boolean wrappers.
{
    const label: string = "Kai";
    const count: number = 12; // Integers and decimals both use number.
    const price = 12.5; // Type inferred as number; annotations are often optional.
    const ready: boolean = true; // Boolean values are true or false.
    const absent: undefined = undefined; // Usually means missing/not supplied.
    const empty: null = null; // Often an intentional absence of a value.
    const large: bigint = 9007199254740993n; // Exact integer; no fractions.
    // 1n + 1 is invalid: don't mix bigint and number in arithmetic.
    const unique: symbol = Symbol("id"); // Unique key, even with the same label.
    const hex = 0xff; // 255; 0b1111 is binary, 0o17 is octal.
    const thousand = 1_000; // Underscores improve readability; value is 1000.
    console.log("4.", label, count, price, ready, absent, empty, large, unique, hex, thousand);
}

// ------------------------------------------
// 5. ASSIGNMENT AND COMPOUND ASSIGNMENT
// ------------------------------------------
// = ASSIGNS a value. It does not compare two values!
// x += y means x = x + y. The other compound operators work similarly.
{
    let score = 10;
    score += 5; // 15
    score -= 3; // 12
    score *= 2; // 24
    score /= 4; // 6
    score %= 4; // 2 (remainder)
    score **= 3; // 8 (power)
    console.log("5.", score); // 8
    // if (score = 0) assigns 0 instead of testing it. Use score === 0.
}

// ------------------------------------------
// 6. ARITHMETIC: + - * / % **, ++ AND --
// ------------------------------------------
// Use arithmetic to calculate totals, averages, remainders, and powers.
// / performs regular division, not integer division. % is remainder, not percent.
{
    console.log("6.", 7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 % 2, 7 ** 2);
    // 9, 5, 14, 3.5, 1, 49
    console.log(-7 % 3); // -1: JS remainder can be negative.
    console.log(8 % 2 === 0); // true: check whether an integer is even.
    console.log(Math.trunc(7 / 2)); // 3: remove the fractional part.
    let count = 2;
    const before = count++; // before = 2; count becomes 3 (postfix).
    const after = ++count; // count becomes 4; after = 4 (prefix).
    count--; // 3
    --count; // 2
    console.log(before, after, count); // 2, 4, 2
    console.log(-count, +"12"); // -2, 12: unary minus and numeric conversion.
    // Prefer separate updates rather than clever expressions with several ++.
}

// ------------------------------------------
// 7. COMPARISONS: > >= < <=
// ------------------------------------------
// A comparison produces a boolean. Use it in conditions or return it directly.
// > greater than; >= greater than OR equal to; < less than; <= less OR equal.
{
    const age = 18;
    console.log("7.", age > 18, age >= 18, age < 18, age <= 18);
    // false, true, false, true: >= includes the boundary, > excludes it.
    const isTeenager = age >= 13 && age <= 19;
    // Do NOT write 13 <= age <= 19; comparisons do not chain like mathematics.
    console.log(isTeenager); // true
    console.log("10" < "2"); // true: two strings compare lexicographically.
    console.log(Number("10") < Number("2")); // false: numeric comparison.
}

// ------------------------------------------
// 8. EQUALITY: === !== == != AND OBJECT IDENTITY
// ------------------------------------------
// === strict equality: no conversion between different types.
// !== strict inequality: true if strict equality would be false.
// == and != use coercion rules; prefer === and !== in everyday code.
{
    const actual: number = 5;
    const expected: number = 5;
    console.log("8.", actual === expected, actual !== expected); // true, false
    // JavaScript: 5 === "5" is false; 5 == "5" is true.
    // TypeScript flags this direct number/string comparison, so it stays a comment.
    console.log(actual === Number("5")); // true: convert explicitly.
    console.log(null == undefined, null === undefined); // true, false
    // value == null is a deliberate shortcut for null OR undefined only.
    const first = { score: 5 };
    const same = first;
    const another = { score: 5 };
    console.log(first === same, first === another); // true, false
    // Objects/arrays compare identity, not matching contents. Compare properties
    // or use an appropriate deep comparison when you need structural equality.
    console.log(Number.isNaN(NaN)); // true; NaN === NaN would be false.
    console.log(0 === -0, Object.is(0, -0), Object.is(NaN, NaN)); // true, false, true
}

// ------------------------------------------
// 9. LOGICAL OPERATORS: && || ! AND SHORT-CIRCUITING
// ------------------------------------------
// && AND: for booleans, both sides must be true.
// || OR: for booleans, at least one side must be true.
// ! NOT: convert to boolean and invert it. !! converts to a boolean.
// A && B skips B if A is falsy. A || B skips B if A is truthy.
// && and || return an OPERAND, not necessarily a boolean.
{
    const hasTicket = true;
    const gateOpen = false;
    console.log("9.", hasTicket && gateOpen, hasTicket || gateOpen, !hasTicket);
    // false, true, false
    const suppliedName: string = "";
    console.log(suppliedName || "Guest"); // Guest
    const presentName: string = "Kai";
    console.log(presentName && "Welcome"); // Welcome
    console.log(!!presentName, !!suppliedName); // true, false
    let calls = 0;
    function recordVisit(): boolean { calls++; return true; }
    const skipped = false && recordVisit();
    console.log(skipped, calls); // false, 0: right side never ran.
}

// ------------------------------------------
// 10. TRUTHY, FALSY, AND MISSING VALUES
// ------------------------------------------
// Conditions accept any value and evaluate its truthiness.
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN.
// Other ordinary values are truthy, including "0", "false", " ", [], and {}.
// Historical browser exception: document.all is also falsy; don't use it.
{
    console.log("10.", Boolean("false"), Boolean([]), Boolean({})); // all true
    const items: string[] = [];
    if (items.length === 0) console.log("The array is empty");
    // if (items) would NOT check whether the array contains anything.
    function showScore(score: number | undefined): string {
        if (score === undefined) return "Missing";
        return String(score); // Retains 0 as a valid score.
    }
    console.log(showScore(0), showScore(undefined)); // 0, Missing
}

// ------------------------------------------
// 11. if, else if, else, AND EARLY RETURNS
// ------------------------------------------
// if runs a block when its condition is truthy. else is the fallback.
// In an if/else-if chain, only the FIRST matching branch runs.
// Separate if statements can ALL run. Always use braces for clear grouping.
{
    function grade(score: number): string {
        if (score < 0 || score > 100) return "Invalid score"; // Guard clause.
        if (score >= 90) {
            return "Excellent";
        } else if (score >= 75) {
            return "Passed";
        } else {
            return "Try again";
        }
    }
    console.log("11.", grade(90), grade(75), grade(74), grade(101));
    // Excellent, Passed, Try again, Invalid score
    // Order matters: checking >= 75 before >= 90 would catch 90 too early.
    // Don't place a stray semicolon after if (condition); it ends the statement.
}

// ------------------------------------------
// 12. TERNARY OPERATOR AND switch
// ------------------------------------------
// condition ? whenTrue : whenFalse produces one value. Good for short choices.
// switch compares an expression with case values using strict equality.
// break exits the switch; without break/return, execution falls into later cases.
{
    const age = 20;
    const category = age >= 18 ? "Adult" : "Minor";
    function describeMode(mode: string): string {
        switch (mode) {
            case "jeepney":
            case "bus": // Group cases that share behavior.
                return "Road transport";
            case "lrt":
                return "Rail transport";
            default:
                return "Unknown mode";
        }
    }
    let message = "";
    switch (category) {
        case "Adult": message = "Regular admission"; break;
        default: message = "Youth admission";
    }
    console.log("12.", category, describeMode("bus"), message);
    // Adult, Road transport, Regular admission
}

// ------------------------------------------
// 13. NULLISH COALESCING ??, OPTIONAL CHAINING ?., LOGICAL ASSIGNMENT
// ------------------------------------------
// a ?? b uses b ONLY when a is null/undefined. || also replaces 0/false/"".
// obj?.property, obj?.[key], fn?.() stop on null/undefined and yield undefined.
// Optional chaining does not validate data or protect every later operation.
{
    function volume(value?: number): number { return value ?? 50; }
    console.log("13.", volume(0), volume(undefined)); // 0, 50
    function city(user?: { address?: { city: string } }): string {
        return user?.address?.city ?? "Unknown";
    }
    console.log(city(), city({ address: { city: "Manila" } })); // Unknown, Manila
    function first(items?: string[]): string | undefined { return items?.[0]; }
    function notify(callback?: () => void): void { callback?.(); }
    console.log(first()); // undefined
    notify(); // Safe when no callback is supplied.
    let nickname = "";
    nickname ||= "Guest"; // Assign only if the old value is falsy.
    let limit: number | undefined;
    limit ??= 10; // Assign only if null/undefined.
    let status = "ready";
    status &&= "sent"; // Assign only if the old value is truthy.
    console.log(nickname, limit, status); // Guest, 10, sent
    // Parentheses are required to combine ?? directly with && or ||:
    console.log((nickname || "Guest") ?? "Anonymous");
}

// ------------------------------------------
// 14. PRECEDENCE AND GROUPING
// ------------------------------------------
// Precedence controls how expressions group. Don't rely on memorizing it all.
// Useful order: property access/calls, unary, **, * / %, + -, comparisons,
// equality, &&, ||, ternary, assignment. Bitwise operators have their own levels.
// ** associates right-to-left; most arithmetic associates left-to-right.
{
    console.log("14.", 2 + 3 * 4, (2 + 3) * 4); // 14, 20
    console.log(2 ** 3 ** 2); // 512: 2 ** (3 ** 2)
    console.log((true || false) && false); // false
    // Use (-2) ** 2 for 4; -2 ** 2 without parentheses is invalid syntax.
}

// ------------------------------------------
// 15. STRINGS AND TEMPLATE LITERALS
// ------------------------------------------
// Single and double quotes both create strings. Backticks allow interpolation
// with ${expression} and multiline text. Strings are immutable.
{
    const name = "Kai";
    console.log("15.", `Hello, ${name}!`, "Hi, " + name); // Hello, Kai! / Hi, Kai
    console.log("First\nSecond\tTabbed"); // \n newline; \t tab; \\ literal backslash.
    console.log("She said \"hello\"."); // Escaped quote inside double quotes.
    const text = "  TypeScript  ";
    console.log(text.trim(), text.toUpperCase(), text.toLowerCase());
    console.log(text.includes("Script"), text.startsWith("  Type"), text.endsWith("  "));
    // true, true, true; these checks are case-sensitive.
    const word = "hello";
    console.log(word.length, word[0], word.slice(1, 4)); // 5, h, ell
    console.log(word.indexOf("l"), word.indexOf("z")); // 2, -1 (not found)
    console.log(word.replace("l", "L")); // heLlo: replaces first string match.
    console.log(word.replaceAll("l", "L")); // heLLo
    console.log("a,b,c".split(",").join("-")); // a-b-c
    console.log("ha".repeat(2)); // haha
    // length and [index] use UTF-16 code units, not always visible characters.
    console.log("😀".length, [..."😀"].length); // 2, 1 (code units vs code points).
    // Even code points aren't always whole displayed characters (e.g. accents).
}

// ------------------------------------------
// 16. CONVERSION, NUMBER LIMITS, AND MATH
// ------------------------------------------
// Convert deliberately: Number(value), String(value), Boolean(value).
// Parsing a number and asserting a TypeScript type are different operations.
{
    console.log("16.", Number("42"), String(42), Boolean(0)); // 42, "42", false
    console.log(Number(""), Number("abc")); // 0, NaN; validate input first.
    console.log(Number.parseInt("12px", 10), Number.parseFloat("3.5kg")); // 12, 3.5
    // parseInt/parseFloat accept a leading numeric portion; Number rejects units.
    console.log(Number.isNaN(Number("abc")), Number.isFinite(Infinity)); // true, false
    console.log(1 / 0, 0 / 0); // Infinity, NaN; number division doesn't throw.
    console.log(Math.floor(-1.2), Math.ceil(-1.2), Math.trunc(-1.2)); // -2, -1, -1
    console.log(Math.round(1.6), Math.abs(-5), Math.min(3, 1), Math.max(3, 1));
    // 2, 5, 1, 3
    console.log(Math.sqrt(9), (1.234).toFixed(2)); // 3, "1.23" (a string).
    console.log(Number.isSafeInteger(9007199254740992)); // false
    // number uses floating-point: 0.1 + 0.2 is approximately 0.30000000000000004.
    // Choose a tolerance appropriate to your calculation, not blind exact equality.
    console.log(Math.abs((0.1 + 0.2) - 0.3) < 1e-10); // true
    // Math.random() produces 0 <= value < 1; it is NOT security-grade randomness.
    // Math.floor(Math.random() * 6) + 1 produces an integer from 1 through 6.
}

// ------------------------------------------
// 17. ARRAYS, INDEXES, AND MUTATION
// ------------------------------------------
// Arrays are ordered lists. Indexes start at 0; the last index is length - 1.
// Missing indexes read as undefined; enable noUncheckedIndexedAccess for checks.
{
    const items: string[] = ["pen", "book"];
    console.log("17.", items[0], items.length); // pen, 2
    items[0] = "pencil";
    items.push("bag"); // Add at the end; returns new length.
    console.log(items.pop()); // bag: remove last; undefined if empty.
    items.unshift("ruler"); // Add at the beginning.
    console.log(items.shift()); // ruler: remove first.
    console.log(items.includes("book"), items.indexOf("missing")); // true, -1
    const copy = items.slice(); // New shallow array; original unchanged.
    const removed = items.splice(1, 1, "notebook"); // Mutates: start, delete count, insert.
    console.log(copy, removed, items); // [pencil, book], [book], [pencil, notebook]
    const more = items.concat(["eraser"]); // New array; items unchanged.
    console.log(more.join(", ")); // pencil, notebook, eraser
    console.log(items.at(-1)); // notebook: last element, or undefined if empty.
    // Don't use delete items[0] to remove/shift an item: it leaves an empty slot.
}

// ------------------------------------------
// 18. LOOPS: for, while, do...while, for...of, for...in
// ------------------------------------------
// for(initialization; condition; update): repeat while the condition is truthy.
// while checks before each iteration; do...while runs its body at least once.
{
    const numbers = [10, 20, 30];
    let total = 0;
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        if (value !== undefined) total += value;
    }
    console.log("18. Total:", total); // 60
    for (const value of numbers) console.log(value); // Values: 10, 20, 30.
    for (const letter of "hi") console.log(letter); // h, i
    let remaining = 2;
    while (remaining > 0) { remaining--; }
    let attempts = 0;
    do { attempts++; } while (attempts < 1);
    console.log(remaining, attempts); // 0, 1
    // for...in visits enumerable string keys, INCLUDING inherited keys.
    // For ordinary object data, Object.keys/values/entries are often clearer.
    const profile = { name: "Kai", age: 25 };
    for (const key in profile) console.log(key); // name, age
    for (const [key, value] of Object.entries(profile)) console.log(key, value);
    // Prefer for...of for array VALUES; for...in produces string indexes/keys.
    // Avoid infinite loops: the condition must eventually become false or break.
}

// ------------------------------------------
// 19. break, continue, return, AND LOOP BOUNDARIES
// ------------------------------------------
// break exits the nearest loop/switch. continue skips to the next iteration.
// return exits the entire function. In nested loops, break exits only the inner
// loop unless a label is used; labeled statements are uncommon in basic code.
{
    const selected: number[] = [];
    for (let n = 0; n < 8; n++) {
        if (n === 2) continue;
        if (n === 5) break;
        selected.push(n);
    }
    console.log("19.", selected); // [0, 1, 3, 4]
    // index < array.length is correct; <= reads one item beyond the end.
    const reversed: number[] = [];
    for (let n = 3; n >= 0; n--) reversed.push(n);
    console.log(reversed); // [3, 2, 1, 0]
}

// ------------------------------------------
// 20. FUNCTIONS, PARAMETERS, ARGUMENTS, AND return
// ------------------------------------------
// A function packages reusable steps. Parameters are names in its definition;
// arguments are actual values passed when calling it. Calling uses name(...).
// : number after the parameter list describes the return type.
{
    function add(a: number, b: number): number { return a + b; }
    console.log("20.", add(2, 3)); // 5
    const subtract = function (a: number, b: number): number { return a - b; };
    const double = (value: number): number => value * 2; // Implicit return.
    const triple = (value: number): number => { return value * 3; };
    const makePoint = () => ({ x: 1, y: 2 }); // Parentheses return an object.
    console.log(subtract(5, 2), double(4), triple(4), makePoint()); // 3, 8, 12, object
    function greet(name = "Guest", suffix?: string): string {
        return `Hello, ${name}${suffix ?? "!"}`;
    }
    console.log(greet(), greet("Kai", ".")); // Hello, Guest! / Hello, Kai.
    // Defaults apply to omitted/undefined arguments, not null or "".
    function sum(...values: number[]): number {
        let total = 0;
        for (const value of values) total += value;
        return total;
    }
    console.log(sum(1, 2, 3)); // 6; ... collects the arguments into an array.
    function print(value: string): void { console.log(value); }
    print("A void function does not promise a return value");
    // Keep return and its expression on the same line: a newline after return
    // can insert a semicolon and accidentally return undefined.
    // Function declarations are hoisted; const function expressions/arrow
    // functions cannot be used before their variable has been initialized.
}

// ------------------------------------------
// 21. CALLBACKS, CLOSURES, AND RECURSION
// ------------------------------------------
// Functions are values: store them, pass them, or return them.
// A callback is a function another function calls. A closure remembers access
// to its surrounding variables. Recursion is a function calling itself.
{
    function apply(value: number, transform: (n: number) => number): number {
        return transform(value);
    }
    function makeCounter(): () => number {
        let count = 0;
        return () => ++count;
    }
    const counter = makeCounter();
    console.log("21.", apply(3, n => n * 2), counter(), counter()); // 6, 1, 2
    function factorial(n: number): number {
        if (!Number.isInteger(n) || n < 0) throw new Error("Use a nonnegative integer");
        if (n <= 1) return 1; // Base case stops recursion.
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); // 120; large inputs risk overflow/stack limits.
}

// ------------------------------------------
// 22. ARRAY CALLBACK METHODS AND SORTING
// ------------------------------------------
// map transforms; filter keeps matches; find returns the first match/undefined.
// some checks whether any match; every checks whether all match.
// reduce accumulates a result. forEach visits values and returns undefined.
{
    const numbers = [3, 1, 4, 2];
    console.log("22.", numbers.map(n => n * 2)); // [6, 2, 8, 4]
    console.log(numbers.filter(n => n >= 3)); // [3, 4]
    console.log(numbers.find(n => n > 3), numbers.findIndex(n => n > 3)); // 4, 2
    console.log(numbers.some(n => n < 0), numbers.every(n => n > 0)); // false, true
    console.log(numbers.reduce((total, n) => total + n, 0)); // 10
    numbers.forEach((value, index) => console.log(index, value));
    // Returning inside forEach does NOT return from the surrounding function.
    // You cannot break a forEach; use for...of when you need early exit.
    console.log([].every(() => false), [].some(() => true)); // true, false
    // Always consider empty arrays: reduce without an initial value can throw.
    const sorted = [...numbers].sort((a, b) => a - b); // Ascending numeric order.
    console.log(sorted, numbers); // [1, 2, 3, 4], [3, 1, 4, 2]
    console.log([2, 10, 1].sort()); // [1, 10, 2]: default sort compares strings.
    console.log([...numbers].sort((a, b) => b - a)); // [4, 3, 2, 1]: descending.
    // sort and reverse MUTATE their array; copy first if preserving the original.
    console.log([...numbers].reverse()); // [2, 4, 1, 3]
    console.log([[1], [2, 3]].flat(), [1, 2].flatMap(n => [n, n]));
    // [1, 2, 3], [1, 1, 2, 2]
}

// ------------------------------------------
// 23. OBJECTS, PROPERTIES, METHODS, AND this
// ------------------------------------------
// Objects group named values. Methods are functions stored as properties.
// obj.key and obj["key"] access a property; [] also accepts a variable key.
{
    const name = "Kai";
    const person = {
        name, // Shorthand for name: name.
        age: 25,
        greet(): string { return `Hello, ${this.name}`; },
    };
    const key = "age";
    console.log("23.", person.name, person[key], person.greet()); // Kai, 25, Hello, Kai
    person.age = 26;
    console.log(Object.keys(person)); // [name, age, greet]
    console.log("name" in person, Object.hasOwn(person, "name")); // true, true
    // in includes inherited properties; Object.hasOwn checks only the object.
    const editable: { note?: string } = { note: "temporary" };
    delete editable.note; // Removes an optional property, not a variable.
    console.log(editable.note); // undefined
    // Regular method 'this' depends on HOW it is called. Detaching person.greet
    // from person loses that receiver. bind explicitly fixes the receiver:
    const greet = person.greet.bind(person);
    console.log(greet()); // Hello, Kai
    // Arrow functions capture surrounding this; they do not get a new receiver.
    // Class/new/inheritance details are covered in ts_02_advanced.ts.
}

// ------------------------------------------
// 24. DESTRUCTURING, SPREAD, REST, AND SHALLOW COPIES
// ------------------------------------------
// Destructuring unpacks values. Spread ... expands them. Rest ... collects them.
{
    const [first, second = 0, ...rest] = [10, 20, 30, 40];
    console.log("24.", first, second, rest); // 10, 20, [30, 40]
    const user = { name: "Kai", age: 25, city: "Manila" };
    const { name: displayName, ...details } = user; // Rename while unpacking.
    console.log(displayName, details); // Kai, { age: 25, city: Manila }
    const updated = { ...user, age: 26 }; // Later properties overwrite earlier ones.
    console.log(user.age, updated.age); // 25, 26
    console.log([...rest, 50]); // [30, 40, 50]
    const original = { settings: { dark: false } };
    const shallow = { ...original };
    shallow.settings.dark = true; // Nested object is STILL shared!
    console.log(original.settings.dark); // true
    const independent = { ...original, settings: { ...original.settings } };
    independent.settings.dark = false;
    console.log(original.settings.dark); // still true
    // Destructuring defaults apply to undefined, not null.
    // Arguments are passed by value; an object value refers to an object.
    // Mutating that object can be visible to the caller; reassigning a local
    // parameter does not reassign the caller's variable.
}

// ------------------------------------------
// 25. TYPE CHECKS, UNIONS, AND ASSERTION PITFALLS
// ------------------------------------------
// typeof checks runtime primitive kinds. Array.isArray checks arrays.
// instanceof checks an object's prototype chain against a constructor.
// In a type annotation, | means a UNION, not runtime bitwise OR.
{
    function lengthOrDouble(value: string | number): number {
        if (typeof value === "string") return value.length;
        return value * 2; // Narrowed to number.
    }
    console.log("25.", lengthOrDouble("Kai"), lengthOrDouble(4)); // 3, 8
    console.log(typeof null, typeof [], Array.isArray([])); // object, object, true
    console.log(new Date() instanceof Date); // true
    const input: unknown = "Hello";
    if (typeof input === "string") console.log(input.toUpperCase()); // HELLO
    // any disables many checks; unknown requires you to prove what the value is.
    const text: unknown = "123";
    const asserted = text as number; // Only tells TS to trust you; NO conversion!
    console.log(typeof asserted); // string, despite the TypeScript annotation.
    // value! (postfix non-null assertion) removes null/undefined from the TYPE.
    // It does not check runtime values. Prefer a guard or ?. / ?? instead.
    // !value (prefix) is logical NOT; these two ! forms are very different.
    // Types, aliases, interfaces, tuples, enums, void, and never continue in 01.
}

// ------------------------------------------
// 26. SETS AND MAPS
// ------------------------------------------
// Set stores unique values. Map stores key/value pairs; keys need not be strings.
// Useful for deduplication, membership checks, and counting in coding problems.
{
    const seen = new Set([1, 1, 2]);
    seen.add(3);
    console.log("26.", seen.has(2), seen.size, [...seen]); // true, 3, [1, 2, 3]
    seen.delete(1);
    const counts = new Map<string, number>();
    for (const letter of "banana") counts.set(letter, (counts.get(letter) ?? 0) + 1);
    console.log(counts.get("a"), counts.has("z"), counts.size); // 3, false, 3
    for (const [key, count] of counts) console.log(key, count);
    counts.delete("b");
    counts.clear();
    seen.clear();
    // Both compare objects by identity and treat NaN as equal to NaN; 0 and -0
    // count as the same key/value. Insertion order is preserved during iteration.
}

// ------------------------------------------
// 27. BITWISE OPERATORS (RECOGNIZE THEM; USE WHEN NEEDED)
// ------------------------------------------
// These operate on bits, unlike logical && and ||. For number operands they
// use 32-bit integer representations; don't use them to truncate huge numbers.
// & AND; | OR; ^ XOR; ~ NOT; << left shift; >> signed right shift;
// >>> unsigned right shift. bigint supports bitwise operations except >>>.
{
    console.log("27.", 5 & 3, 5 | 3, 5 ^ 3, ~5); // 1, 7, 6, -6
    // 5 = binary 0101; 3 = binary 0011.
    console.log(5 << 1, 5 >> 1, -1 >>> 1); // 10, 2, 2147483647
    let flags = 0;
    flags |= 1; // Add bit 1.
    flags |= 2; // Add bit 2; flags is 3.
    console.log((flags & 2) !== 0); // true: bit 2 is present.
    flags &= ~1; // Clear bit 1; flags is 2.
    flags ^= 2; // Toggle bit 2; flags is 0.
    flags <<= 1;
    flags >>= 1;
    flags >>>= 1;
    console.log(flags); // 0; compound forms work like other assignments.
    // A type-level A & B is an intersection TYPE, not a bitwise calculation.
}

// ------------------------------------------
// 28. ERRORS: throw, try, catch, finally
// ------------------------------------------
// throw interrupts normal execution. catch handles a thrown value.
// finally runs on leaving try/catch during normal execution, including returns.
// Avoid returning from finally: it can override a return or hide an error.
{
    function divide(a: number, b: number): number {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
    try {
        console.log(divide(10, 0));
    } catch (error: unknown) {
        if (error instanceof Error) console.log("28.", error.message);
        else console.log("Unexpected thrown value", error);
    } finally {
        console.log("Division attempt finished");
    }
    // JS can throw any value, so don't assume every caught value is an Error.
}

// ------------------------------------------
// 29. JSON, DATES, AND BASIC REGULAR EXPRESSIONS
// ------------------------------------------
// JSON is a text format, not a TypeScript type system. Parsing can throw and
// does not prove that the data has the structure your app expects.
{
    const text = JSON.stringify({ name: "Kai", scores: [1, 2] });
    const parsed: unknown = JSON.parse(text);
    if (typeof parsed === "object" && parsed !== null && "name" in parsed) {
        if (typeof parsed.name === "string") console.log("29.", parsed.name); // Kai
    }
    // JSON cannot represent functions/undefined as ordinary values, circular
    // references, or bigint. JSON round-tripping is not a general deep-copy tool.
    const date = new Date("2026-01-15T00:00:00.000Z");
    console.log(date.toISOString(), date.getUTCFullYear(), date.getUTCMonth());
    // 2026-01-15T00:00:00.000Z, 2026, 0: month indexes start at 0.
    // Z means UTC. Local getters depend on timezone. Invalid dates need checking.
    console.log(Number.isNaN(new Date("invalid").getTime())); // true
    const digitsOnly = /^\d+$/; // ^ start, \d digit, + one or more, $ end.
    console.log(digitsOnly.test("123"), digitsOnly.test("12a")); // true, false
    console.log("a b c".replace(/\s/g, "-")); // a-b-c; \s whitespace, g all matches.
    // /hello/i ignores case. Regex patterns and string escaping are different:
    // new RegExp("\\d+") needs an extra slash because it is a string literal.
}

// ------------------------------------------
// 30. PROMISES, async, AND await: FIRST LOOK
// ------------------------------------------
// Promise<T> represents a result that may arrive later or reject with an error.
// async functions always return a Promise; await pauses that async function,
// not the whole program. This example uses no network calls or timers.
{
    async function loadName(): Promise<string> { return "Kai"; }
    async function demonstrateAsync(): Promise<void> {
        try {
            const name = await loadName();
            console.log("30.", name); // Kai; printed after synchronous sections.
            const values = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);
            console.log(values); // [1, 2]: input order, not completion order.
        } catch (error: unknown) {
            console.error("Async operation failed", error);
        }
    }
    demonstrateAsync().catch((error: unknown) => console.error(error));
    // .then handles fulfillment; .catch handles rejection; .finally does cleanup.
    // Don't use forEach(async ...) when you need to await completion. Use a
    // for...of loop with await, or Promise.all(items.map(async ...)).
    // Await a promise INSIDE try if you want that catch to handle its rejection.
}

// ------------------------------------------
// 31. MODULES, IMPORTS, EXPORTS, AND ENVIRONMENTS
// ------------------------------------------
// export makes a declaration available to other files; import brings it in.
// Illustrative TWO-FILE example (not active imports in this standalone lesson):
// math.ts: export function add(a: number, b: number) { return a + b; }
// main.ts: import { add } from "./math.js"; console.log(add(1, 2));
// Common compiled ESM projects write .js imports that resolve to .ts sources.
// Required extensions/module settings depend on your runtime/build setup.
// Named: export { add }; import { add as sum } from "./math.js";
// Default: export default add; import add from "./math.js";
// Type-only: export type Id = string; import type { Id } from "./types.js";
// Browser APIs (document, window, prompt) are not built into Node.js.
// Node filesystem/process APIs are not automatically available in browsers.
// Classes and advanced module/type patterns belong in later lessons.

// ------------------------------------------
// 32. LESS COMMON SYNTAX AND A FINAL CHECKLIST
// ------------------------------------------
// void expression evaluates an expression and produces undefined; this is
// distinct from the TypeScript void return type. void does NOT catch rejections.
// The comma operator evaluates left then right and returns the right value.
// Unlike separator commas in arrays/arguments, it is one expression; avoid it
// unless needed, e.g. for (let i = 0, j = 3; i < j; i++, j--) { ... }.
// new constructs an object (new Map(), new Date()); class details are in 02.
// debugger; pauses execution when a debugger is attached; don't leave it active
// in shared example code. Use console.log and inspect actual runtime values.
// Rare syntax such as generators (function*/yield), decorators, and advanced
// type transformations are beyond basic syntax and need their own lessons.
//
// Before moving on, practice these without copying:
// 1. Classify a number as positive, negative, or zero with if/else.
// 2. Return whether age is >= 18 AND a ticket is present.
// 3. Sum only even numbers using %, a loop, and +=.
// 4. Find the largest array value; decide what an empty input should return.
// 5. Count letters using a Map and ?? for missing counts.
// 6. Keep a valid zero while defaulting null/undefined to a fallback.
// Check: empty inputs, zero, negatives, equality boundaries, missing values,
// unintended mutation, missing return, wrong loop limits, and string vs number.

// Make the lesson a module so its declarations don't pollute other lesson files.
export {};
