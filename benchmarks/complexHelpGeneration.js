const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Complex Help Text Generation
function benchmarkComplexHelpGeneration(CommandClass, name) {
  // Create a complex command structure with many options and subcommands
  const program = new CommandClass();
  program
    .name("complex-cli")
    .description("A complex CLI application with many commands and options")
    .version("1.0.0");

  // Add many commands with complex structures
  for (let i = 0; i < 15; i++) {
    const cmd = program.command(`command${i}`);
    cmd
      .description(
        `This is command ${i} with a detailed description that explains what it does`
      )
      .argument("<required>", "A required argument with a long description")
      .argument(
        "[optional]",
        "An optional argument with a detailed explanation"
      )
      .option("-s, --short", "A short option")
      .option(
        "--long-option <value>",
        "A long option with value that has a detailed description"
      )
      .option(
        "--multiple <values...>",
        "An option with multiple values and a long description"
      )
      .option("--default <value>", "An option with default value", "default")
      .option("--choice <type>", "A choice option with allowed values", [
        "a",
        "b",
        "c",
      ])
      .option("-f, --flag", "A boolean flag option")
      .option("--number <num>", "A number option")
      .option("--enum <val>", "An enum option", ["one", "two", "three"]);

    // Add subcommands
    for (let j = 0; j < 3; j++) {
      const subCmd = cmd.command(`subcommand${j}`);
      subCmd
        .description(`Subcommand ${j} with detailed information`)
        .argument("<subarg>", "A subcommand argument")
        .option("-v, --verbose", "Verbose output");
    }
  }

  // Measure help generation for this complex structure
  return measureExecutionTime(() => {
    if (name === "GoCommander") {
      try {
        const originalWrite = process.stdout.write;
        process.stdout.write = () => {};
        program.outputHelp();
        process.stdout.write = originalWrite;
      } catch (e) {
        // Ignore errors
      }
    } else {
      try {
        program.helpInformation();
      } catch (e) {
        // Ignore errors
      }
    }
  });
}

module.exports = {
  benchmarkComplexHelpGeneration,
};
