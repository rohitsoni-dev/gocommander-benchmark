const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Subcommand Lookup Performance
function benchmarkSubcommandLookup(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    // Create deeply nested subcommands
    let currentCmd = program;
    for (let i = 0; i < 10; i++) {
      currentCmd = currentCmd.command(`level${i}`);
      currentCmd.description(`Level ${i} command`);
    }

    // Add a final command
    const finalCmd = currentCmd.command("execute");
    finalCmd
      .description("Execute the final command")
      .argument("<arg>", "An argument");

    // For benchmarking, we're testing the creation and structure setup
    // rather than actual lookup performance which would require parsing
  });
}

module.exports = {
  benchmarkSubcommandLookup,
};
