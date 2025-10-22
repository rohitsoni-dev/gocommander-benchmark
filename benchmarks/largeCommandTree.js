const { measureExecutionTime } = require("../utils/performance");

// Benchmark 4: Large command tree creation
function benchmarkLargeCommandTree(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    // Create a larger command tree
    for (let i = 0; i < 20; i++) {
      const cmd = program.command(`command${i}`);
      cmd
        .description(`Command ${i} description`)
        .argument("<arg>", "An argument")
        .option("-o, --option", "An option");

      // Add subcommands
      for (let j = 0; j < 5; j++) {
        const subCmd = cmd.command(`subcommand${j}`);
        subCmd
          .description(`Subcommand ${j} description`)
          .argument("<subarg>", "A sub argument")
          .option("-s, --suboption", "A sub option");
      }
    }
  });
}

module.exports = {
  benchmarkLargeCommandTree,
};
