# LeetKai 🚀

My collection of TypeScript lessons, practice drills, quizzes, and algorithmic problem-solving exercises.

## Structure

| Directory | Contents |
| --- | --- |
| `ts_to_advanced/` | Lessons from basics through expert TypeScript |
| `.drills/easy/` | Short practice exercises, including unfinished tasks |
| `.quizzes/` | Larger exercises, such as the enrollment system |

Start with [the TypeScript learning guide](ts_to_advanced/README.md). Directories beginning with `.` may be hidden in your file explorer.

## Required tools and installation

| Tool | Why you need it |
| --- | --- |
| Node.js (LTS) | Runs the JavaScript produced by the compiler |
| npm (included with Node.js) | Installs project dependencies |
| TypeScript (`tsc`) | Checks types and compiles `.ts` files to `.js` |

Install Node.js using the instructions for your operating system on the [official download page](https://nodejs.org/en/download). On Linux/macOS, if you already have the nvm version manager installed, run:

```sh
nvm install --lts
nvm use --lts
```

For a fresh machine without nvm, follow the download page's installation steps first. Reopen your terminal after installation, then verify:

```sh
node --version
npm --version
```

From the repository root, install the dependencies recorded in `package.json`:

```sh
cd /path/to/leetkai
npm install
npx tsc --version
```

For example, this workspace is `/home/kai/leetkai`. If setting up a copy that does not yet have `package.json`, initialize it and install TypeScript locally:

```sh
npm init -y
npm install --save-dev typescript
```

You do not need a global TypeScript installation. `npx tsc` uses the local compiler. See the [official TypeScript installation guide](https://www.typescriptlang.org/download/).

## Compile all lessons, drills, and quizzes

Run these commands from the repository root in Bash or Zsh (Linux, macOS, or WSL):

```sh
npx tsc --strict --target ES2022 --module commonjs \
  --noEmitOnError --rootDir . --outDir .leet/build \
  ts_to_advanced/*.ts .drills/easy/*.ts .quizzes/*.ts
```

This compiles all current TypeScript files in those three directories. `--rootDir .` preserves their folder structure under `.leet/build`. `--target ES2022` supports the modern built-ins used by the lessons. `--noEmitOnError` prevents generating JavaScript when type checking fails.

After compilation succeeds, run whichever file you want:

```sh
node .leet/build/ts_to_advanced/ts_00_basics.js
node .leet/build/ts_to_advanced/ts_01_fundamentals.js
node .leet/build/ts_to_advanced/ts_03_expert.js
node .leet/build/.drills/easy/07_arrays.js
node .leet/build/.quizzes/enrollment_system.js
```

Recompile after editing TypeScript. If compilation fails, fix the reported errors before running generated files; older output may still exist.

## Compile one file or only check types

To work on one drill without unrelated exercises blocking compilation:

```sh
npx tsc --strict --target ES2022 --module commonjs \
  --noEmitOnError --rootDir . --outDir .leet/build \
  .drills/easy/07_arrays.ts

node .leet/build/.drills/easy/07_arrays.js
```

Replace the source path and matching output path to use any lesson or quiz. Run the `node` command only if compilation succeeds.

To check all files without generating JavaScript:

```sh
npx tsc --strict --target ES2022 --module commonjs --noEmit \
  ts_to_advanced/*.ts .drills/easy/*.ts .quizzes/*.ts
```

## Compilation versus execution

- `ts_02_advanced.ts` compiles but uses `document.getElementById`, a browser API. It will fail unchanged in Node. To run its other examples in Node, comment out that browser-only statement; study the DOM example in a browser separately.
- Drills may contain unfinished functions or intentionally incorrect answers. Successful compilation does not prove an exercise is solved. Complete the tasks and check their results.
- Defining or exporting a function does not execute it. Call it and use `console.log(...)` to see a result. The expert lesson has no console output by default.
- Keep generated `.leet/` output and `node_modules/` out of source commits. Keep `package.json` and `package-lock.json` to record dependencies.

## Quick fact card

| Task / fact | Command / meaning |
| --- | --- |
| Install project dependencies | `npm install` |
| Add the TypeScript compiler | `npm install --save-dev typescript` |
| Check installed versions | `node --version`, `npm --version`, `npx tsc --version` |
| Compile | `npx tsc` with the file paths and flags shown above |
| Check without generating files | Add `--noEmit` to the compiler command |
| Run compiled code | `node .leet/build/<folder>/<filename>.js` |
| Source → output | `.ts` → `.js` |
| Output directory | `.leet/build/` |
| After an edit | Compile again, then run |
| No terminal output | Check whether your code calls a function and logs its result |
| `document is not defined` | Browser-only code was executed in Node |

## Goals

- Consistently practice problem-solving.
- Improve algorithmic efficiency (time and space complexity).
- Prepare for technical interviews.
