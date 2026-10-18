# TypeScript: basics to advanced

Start with **00: Basics** if you want to understand symbols such as `===`, `>=`,
`&&`, and `??`, or how `if/else` and loops work. Each numbered section explains
the syntax, when to use it, and examples with expected results.

## Learning order

| File | Focus |
| --- | --- |
| [00: Basics](ts_00_basics.ts) | Everyday syntax, operators, control flow, values, collections, and functions |
| [01: Fundamentals](ts_01_fundamentals.ts) | TypeScript types, tuples, enums, aliases, interfaces, and typed functions |
| [02: Advanced](ts_02_advanced.ts) | Classes, inheritance, generics, unions, intersections, and narrowing |
| [03: Expert](ts_03_expert.ts) | Type operators, utility types, mapped/conditional types, and recursive types |

## Basics topic index

The numbers match the section headings in `ts_00_basics.ts`.

| Section | Topics |
| --- | --- |
| 1 | JavaScript vs TypeScript, compilation, runtime vs type errors |
| 2 | Expressions, statements, comments, punctuation, identifiers |
| 3 | Declaration, initialization, assignment, `const`, `let`, `var`, scope |
| 4 | Primitive values, literals, type annotations, inference |
| 5 | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| 6 | Arithmetic, remainder, powers, unary signs, prefix/postfix `++` and `--` |
| 7 | `>`, `>=`, `<`, `<=`, inclusive boundaries, range checks |
| 8 | `===`, `!==`, `==`, `!=`, coercion, identity, `Object.is`, `NaN` |
| 9 | `&&`, `||`, `!`, `!!`, operand values, short-circuiting |
| 10 | Truthy/falsy values, empty collections, valid zero vs missing values |
| 11 | `if`, `else if`, `else`, guard clauses, branch order |
| 12 | Ternary `? :`, `switch`, `case`, `default`, fallthrough |
| 13 | `??`, `?.`, optional calls/indexing, `&&=`, `||=`, `??=` |
| 14 | Precedence, associativity, parentheses |
| 15 | Strings, interpolation, escapes, indexing, methods, Unicode basics |
| 16 | Conversions, parsing, floating-point limits, `Math`, numeric validation |
| 17 | Arrays, indexes, length, adding/removing items, mutation, copying |
| 18 | `for`, `while`, `do...while`, `for...of`, `for...in` |
| 19 | `break`, `continue`, `return`, nested loops, off-by-one errors |
| 20 | Functions, arguments, parameters, arrows, defaults, optional/rest parameters |
| 21 | Callbacks, closures, recursion, base cases |
| 22 | `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`, `forEach`, sorting, flattening |
| 23 | Objects, keys, methods, `this`, `bind`, `in`, `delete`, own properties |
| 24 | Destructuring, spread/rest, shallow copies, shared references |
| 25 | Runtime type checks, unions, `unknown`, `any`, assertions, postfix `!` |
| 26 | `Set`, `Map`, uniqueness, membership, frequency counting |
| 27 | Bitwise operators, shifts, flags, compound bitwise assignments |
| 28 | `throw`, `try`, `catch`, `finally`, error narrowing |
| 29 | JSON, data validation, dates/timezones, regular expressions |
| 30 | Promises, `async`/`await`, rejection handling, `Promise.all` |
| 31 | Named/default/type-only imports/exports, browser vs Node APIs |
| 32 | Recognizing less common syntax, practice tasks, common mistake checklist |

This covers the everyday basics and introduces adjacent topics so they are not
silently skipped. It is not an exhaustive catalog of every built-in method or
every advanced language feature. Detailed type-system topics continue in 01–03.

## Symbols that look similar

| Syntax | Meaning |
| --- | --- |
| `score = 10` | Assign 10 to score |
| `score === 10` | Compare without type coercion |
| `score !== 10` | Check strict inequality |
| `score >= 10` | Check greater than or equal to 10 |
| `allowed && ready` | Runtime logical AND |
| `flags & mask` | Runtime bitwise AND |
| `A & B` in a type | Intersection type |
| `number \| string` | Union type |
| `value ?? fallback` | Replace only null/undefined |
| `condition ? a : b` | Choose between two values |
| `name?: string` | Optional property/parameter |
| `user?.name` | Read only if user is not null/undefined |
| `!ready` | Logical NOT |
| `value!` | Type-only non-null assertion; no runtime check |
| `value as number` | Type assertion; does not convert the value |
| `Number(value)` | Runtime numeric conversion |
| `...items` | Spread or rest, depending on its position |

## Check and run the basics lesson

Use Node.js and the TypeScript compiler. If `tsc` is already installed, run from
the repository root:

```sh
tsc --strict --noUncheckedIndexedAccess --target ES2022 --module commonjs --outDir .leet/ts-basics ts_to_advanced/ts_00_basics.ts
node .leet/ts-basics/ts_00_basics.js
```

If you do not have `tsc`, the equivalent temporary npm invocation is:

```sh
npm exec --yes --package typescript -- tsc --strict --noUncheckedIndexedAccess --target ES2022 --module commonjs --outDir .leet/ts-basics ts_to_advanced/ts_00_basics.ts
node .leet/ts-basics/ts_00_basics.js
```

The npm command may download the compiler. Neither command adds a project
dependency. Compilation generates JavaScript under `.leet/ts-basics`; keep it
out of source commits. The ES2022 target supports the built-ins used here, such
as `Object.hasOwn` and `Array.at`.

Run this lesson on its own. Later files are separate study references; 02 includes
a browser `document` example and is not a standalone Node script. The final async
examples in 00 print after the synchronous sections. Commented invalid examples
are intentionally inactive; uncomment one at a time to inspect compiler errors.

After studying, try the tasks at the end of 00 and the
[easy drills](../.drills/easy/README.md).
