const program = require("commander");
const Compiler = require("../dist/Compiler").default;
const { fileInput } = require("../dist/compiler/SourceInput");
const pkgJson = require("../package.json");

let compiler = new Compiler();

program
  .version(pkgJson.version)
  .option("-s, --shared-object", "Output a shared library")
  .arguments("<sources...>")
  .action(async (sources) => {
    for (const source of sources) {
      compiler.addSources(await fileInput(source));
      console.log(`got ${source}`);
    }

    compiler.compile();
  })
  .parse(process.argv);
