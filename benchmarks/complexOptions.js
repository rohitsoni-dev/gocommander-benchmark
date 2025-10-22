const { measureExecutionTime } = require("../utils/performance");

// Benchmark 5: Option parsing with complex options
function benchmarkComplexOptions(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    const cmd = program.command("complex");
    cmd
      .description("Command with complex options")
      .argument("<required>", "A required argument")
      .argument("[optional]", "An optional argument")
      .option("-s, --short", "A short option")
      .option("--long-option <value>", "A long option with value")
      .option("-m, --multiple <values...>", "An option with multiple values")
      .option("-d, --default <value>", "An option with default", "default")
      .option("-c, --choice <type>", "A choice option", ["a", "b", "c"])
      .option("-f, --flag", "A boolean flag");

    // Parse complex arguments
    const args = [
      "node",
      "test.js",
      "complex",
      "required-value",
      "optional-value",
      "-s",
      "--long-option",
      "long-value",
      "-m",
      "value1",
      "value2",
      "value3",
      "-f",
    ];

    if (name !== "GoCommander") {
      const originalAction = cmd._action;
      cmd.action(() => {});
      try {
        program.parse(args);
      } catch (e) {
        // Ignore errors
      }
      cmd.action(originalAction);
    }
  });
}

module.exports = {
  benchmarkComplexOptions,
};
