# Esbuild basics

Install esbuild globally:
`sudo npm install -g esbuild`

Confirm install:
`esbuild --version`

### Test with typescript

Create `input_typescript.ts` and add:

```
let message: string = "Hello, esbuild!";
console.log(message);
```

Run this with esbuild:
`esbuild input_typescript.ts --outfile=output.js --bundle --loader:.ts=ts`

This will output a transpiled js file.

#### Breaking above esbuild command

`esbuild` - command to run process
`input_typescript.ts` - input file
`--outfile` - where to put output
`--bundle` - will inline all dependencies into the output file
`--loader` - use to load the TypeScript file extension, however can be omitted as esbuild can automatically which loader to use

Output with bundle option:

```
(() => {
  // input_typescript.ts
  var message = "Hello, esbuild!";
  console.log(message);
})();
```

Without bundle option:

```
let message = "Hello, esbuild!";
console.log(message);

```
