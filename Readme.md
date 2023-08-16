# Esbuild basics

Install esbuild globally:
`sudo npm install -g esbuild`

Confirm install:
`esbuild --version`

## Test with typescript

Create `input_typescript.ts` and add:

```
let message: string = "Hello, esbuild!";
console.log(message);
```

Run this with esbuild:
`esbuild input_typescript.ts --outfile=output.js --bundle --loader:.ts=ts`

This will output a transpiled js file.

### Breaking above esbuild command

`esbuild` - command to run process
<br />
`input_typescript.ts` - input file
<br />
`--outfile` - where to put output
<br />
`--bundle` - will inline all dependencies into the output file
<br />
`--loader` - use to load the TypeScript file extension, however can be omitted as esbuild can automatically which loader to use
<br />

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

## Using build API

While you can bundle your JavaScript file with CLI, you also have an option to use the build API.

Let’s try the build API by creating build.mjs and adding the following code:

```
import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'out.js',
})
```

## Bundling CSS with esbuild

Create two files: color.css, style.css in css folder

```
*color.css*
.beautiful {
    color: rgb(0,0,255);
}
```

```
*style.css*
@import 'color.css';

p {
  font-weight: bold;
}
```

Add this command to bundle css with esbuild:
`esbuild style.css --outfile=out.css --bundle`

## Bundling image with esbuild

Simple have couple of elemnents with ids and attach img src:

```
import png_url from './image.png'
const png_image = document.getElementById("image_png");
png_image.src = png_url;

import jpg_url from './image.jpg'
const jpg_image = document.getElementById("image_jpg");
jpg_image.src = jpg_url
```

Add this command to bundle image with esbuild:
`esbuild public/js/input_image.js --bundle --loader:.png=dataurl --loader:.jpg=file --outfile=public/out_image.js`

## Using Plugin

Install Sass plugin:
`npm install esbuild-plugin-sass`

Create scss file:

```
$font: Roboto;
$color: rgb(0, 0, 255);

#root {
  font: 1.2em $font;
  color: $color;
}
```

Update bundle.js:

```
const sassPlugin = require("esbuild-plugin-sass");

require("esbuild")
  .build({
    entryPoints: ["scss/style.scss"],
    outfile: "scss/bundle.css",
    bundle: true,
    plugins: [sassPlugin()],
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));

```

Run `node bundle.js` to get the generated bundle css file.

## Watch and serve mode

Add this to the build commands:
`--watch --serve=localhost:8000 --servedir=.`
