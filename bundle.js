const sassPlugin = require("esbuild-plugin-sass");

require("esbuild")
  .build({
    entryPoints: ["scss/style.scss"],
    outfile: "scss/bundle.css",
    bundle: true,
    plugins: [sassPlugin()],
    watch: true,
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1));
