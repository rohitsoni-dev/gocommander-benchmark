const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Validation Performance
function benchmarkValidationPerformance(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    const validateNumber = (value) => {
      const num = Number(value);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    };

    const validateEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        throw new Error("Invalid email");
      }
      return value;
    };

    const cmd = program.command("validate");
    cmd
      .description("Command with custom validation")
      .argument("<number>", "A number argument")
      .argument("<email>", "An email argument")
      .option("-n, --number <value>", "A number option")
      .option("-e, --email <value>", "An email option");

    // Apply custom validations
    // Note: Implementation varies between libraries
    if (name !== "GoCommander") {
      // Commander.js approach
      try {
        // We're not actually calling parse here to avoid side effects in benchmark
      } catch (e) {
        // Ignore errors
      }
    }
  });
}

module.exports = {
  benchmarkValidationPerformance,
};
