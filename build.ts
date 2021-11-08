import { build } from "esbuild"
import { nodeBuiltIns } from "esbuild-node-builtins"
async function main() {
  const resultBrowser = await build({
    plugins: [nodeBuiltIns()],
    entryPoints: ['src/browser.ts'],
    bundle: true,
    outfile: 'dist/esbuild/browser.js',
    sourcemap: "both",
    // minify: true,
    platform: "browser",
    format: "cjs",
    target: "es6"
  })
  console.log(resultBrowser)
  // const resultNode = await build({
  //   plugins: [nodeBuiltIns()],
  //   entryPoints: ['src/cli.ts'],
  //   bundle: true,
  //   outfile: 'dist/esbuild/cli.js',
  //   sourcemap: "both",
  //   // minify: true,
  //   platform: "node",
  // })
  // console.log(resultNode)
}
main()
