const { Command: GoCommand } = require("gocommander");

// Try to load commander.js if available
let CommanderJS;
try {
  CommanderJS = require("commander");
} catch (e) {
  console.log("commander.js not found, skipping comparison");
}

// Import benchmark functions
const { benchmarkCommandCreation } = require("./commandCreation");
const { benchmarkArgumentParsing } = require("./argumentParsing");
const { benchmarkHelpGeneration } = require("./helpGeneration");
const { benchmarkLargeCommandTree } = require("./largeCommandTree");
const { benchmarkComplexOptions } = require("./complexOptions");
const { benchmarkStartupTime } = require("./startupTime");
// Import new benchmark functions
const { benchmarkActionExecution } = require("./actionExecution");
const { benchmarkValidationPerformance } = require("./validationPerformance");
const { benchmarkSubcommandLookup } = require("./subcommandLookup");
const { benchmarkConcurrentUsage } = require("./concurrentUsage");
const { benchmarkLongRunningSession } = require("./longRunningSession");
const { benchmarkComplexHelpGeneration } = require("./complexHelpGeneration");
const {
  benchmarkAutocompletePerformance,
} = require("./autocompletePerformance");

// Run benchmarks
console.log("Running performance benchmarks...\n");

try {
  // Benchmark startup time
  console.log("Benchmarking Startup Time:");
  const startupTimes = benchmarkStartupTime(GoCommand, CommanderJS);
  console.log(
    "  GoCommander Instance Creation: " +
      startupTimes.goCommandTime.toFixed(4) +
      "ms per operation"
  );
  if (CommanderJS) {
    console.log(
      "  Commander.js Instance Creation: " +
        startupTimes.commanderTime.toFixed(4) +
        "ms per operation"
    );
  }

  // Benchmark GoCommander
  console.log("\nBenchmarking GoCommander:");
  const goCommandCreateTime = benchmarkCommandCreation(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Command Creation: " + goCommandCreateTime.toFixed(4) + "ms per operation"
  );

  const goCommandParseTime = benchmarkArgumentParsing(GoCommand, "GoCommander");
  console.log(
    "  Argument Parsing Setup: " +
      goCommandParseTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandHelpTime = benchmarkHelpGeneration(GoCommand, "GoCommander");
  console.log(
    "  Help Generation: " + goCommandHelpTime.toFixed(4) + "ms per operation"
  );

  const goCommandLargeTreeTime = benchmarkLargeCommandTree(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Large Command Tree Creation: " +
      goCommandLargeTreeTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandComplexOptionsTime = benchmarkComplexOptions(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Complex Options Parsing: " +
      goCommandComplexOptionsTime.toFixed(4) +
      "ms per operation"
  );

  // New benchmarks
  const goCommandActionTime = benchmarkActionExecution(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Action Execution: " + goCommandActionTime.toFixed(4) + "ms per operation"
  );

  const goCommandValidationTime = benchmarkValidationPerformance(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Validation Performance: " +
      goCommandValidationTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandSubcommandTime = benchmarkSubcommandLookup(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Subcommand Lookup: " +
      goCommandSubcommandTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandConcurrentTime = benchmarkConcurrentUsage(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Concurrent Usage: " +
      goCommandConcurrentTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandLongRunningTime = benchmarkLongRunningSession(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Long-running Session: " +
      goCommandLongRunningTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandComplexHelpTime = benchmarkComplexHelpGeneration(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Complex Help Generation: " +
      goCommandComplexHelpTime.toFixed(4) +
      "ms per operation"
  );

  const goCommandAutocompleteTime = benchmarkAutocompletePerformance(
    GoCommand,
    "GoCommander"
  );
  console.log(
    "  Autocomplete Performance: " +
      goCommandAutocompleteTime.toFixed(4) +
      "ms per operation"
  );

  // Benchmark commander.js if available
  if (CommanderJS) {
    console.log("\nBenchmarking commander.js:");
    const jsCommandCreateTime = benchmarkCommandCreation(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Command Creation: " +
        jsCommandCreateTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandParseTime = benchmarkArgumentParsing(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Argument Parsing Setup: " +
        jsCommandParseTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandHelpTime = benchmarkHelpGeneration(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Help Generation: " + jsCommandHelpTime.toFixed(4) + "ms per operation"
    );

    const jsCommandLargeTreeTime = benchmarkLargeCommandTree(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Large Command Tree Creation: " +
        jsCommandLargeTreeTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandComplexOptionsTime = benchmarkComplexOptions(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Complex Options Parsing: " +
        jsCommandComplexOptionsTime.toFixed(4) +
        "ms per operation"
    );

    // New benchmarks
    const jsCommandActionTime = benchmarkActionExecution(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Action Execution: " +
        jsCommandActionTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandValidationTime = benchmarkValidationPerformance(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Validation Performance: " +
        jsCommandValidationTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandSubcommandTime = benchmarkSubcommandLookup(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Subcommand Lookup: " +
        jsCommandSubcommandTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandConcurrentTime = benchmarkConcurrentUsage(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Concurrent Usage: " +
        jsCommandConcurrentTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandLongRunningTime = benchmarkLongRunningSession(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Long-running Session: " +
        jsCommandLongRunningTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandComplexHelpTime = benchmarkComplexHelpGeneration(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Complex Help Generation: " +
        jsCommandComplexHelpTime.toFixed(4) +
        "ms per operation"
    );

    const jsCommandAutocompleteTime = benchmarkAutocompletePerformance(
      CommanderJS.Command,
      "commander.js"
    );
    console.log(
      "  Autocomplete Performance: " +
        jsCommandAutocompleteTime.toFixed(4) +
        "ms per operation"
    );

    // Calculate performance improvements
    console.log("\nPerformance Comparison:");

    // Helper function to safely calculate improvement
    function calculateImprovement(goTime, jsTime) {
      if (jsTime <= 0) return "0.00";
      return (((jsTime - goTime) / jsTime) * 100).toFixed(2);
    }

    const creationImprovement = calculateImprovement(
      goCommandCreateTime,
      jsCommandCreateTime
    );
    const parsingImprovement = calculateImprovement(
      goCommandParseTime,
      jsCommandParseTime
    );
    const helpImprovement = calculateImprovement(
      goCommandHelpTime,
      jsCommandHelpTime
    );
    const largeTreeImprovement = calculateImprovement(
      goCommandLargeTreeTime,
      jsCommandLargeTreeTime
    );
    const complexOptionsImprovement = calculateImprovement(
      goCommandComplexOptionsTime,
      jsCommandComplexOptionsTime
    );
    const actionImprovement = calculateImprovement(
      goCommandActionTime,
      jsCommandActionTime
    );
    const validationImprovement = calculateImprovement(
      goCommandValidationTime,
      jsCommandValidationTime
    );
    const subcommandImprovement = calculateImprovement(
      goCommandSubcommandTime,
      jsCommandSubcommandTime
    );
    const concurrentImprovement = calculateImprovement(
      goCommandConcurrentTime,
      jsCommandConcurrentTime
    );
    const longRunningImprovement = calculateImprovement(
      goCommandLongRunningTime,
      jsCommandLongRunningTime
    );
    const complexHelpImprovement = calculateImprovement(
      goCommandComplexHelpTime,
      jsCommandComplexHelpTime
    );
    const autocompleteImprovement = calculateImprovement(
      goCommandAutocompleteTime,
      jsCommandAutocompleteTime
    );

    console.log(
      "  Command Creation: GoCommander is " + creationImprovement + "% faster"
    );
    console.log(
      "  Argument Parsing: GoCommander is " + parsingImprovement + "% faster"
    );
    console.log(
      "  Help Generation: GoCommander is " + helpImprovement + "% faster"
    );
    console.log(
      "  Large Command Tree Creation: GoCommander is " +
        largeTreeImprovement +
        "% faster"
    );
    console.log(
      "  Complex Options Parsing: GoCommander is " +
        complexOptionsImprovement +
        "% faster"
    );
    console.log(
      "  Action Execution: GoCommander is " + actionImprovement + "% faster"
    );
    console.log(
      "  Validation Performance: GoCommander is " +
        validationImprovement +
        "% faster"
    );
    console.log(
      "  Subcommand Lookup: GoCommander is " +
        subcommandImprovement +
        "% faster"
    );
    console.log(
      "  Concurrent Usage: GoCommander is " + concurrentImprovement + "% faster"
    );
    console.log(
      "  Long-running Session: GoCommander is " +
        longRunningImprovement +
        "% faster"
    );
    console.log(
      "  Complex Help Generation: GoCommander is " +
        complexHelpImprovement +
        "% faster"
    );
    console.log(
      "  Autocomplete Performance: GoCommander is " +
        autocompleteImprovement +
        "% faster"
    );

    const startupImprovement = calculateImprovement(
      startupTimes.goCommandTime,
      startupTimes.commanderTime
    );
    console.log(
      "  Startup Time: GoCommander is " + startupImprovement + "% faster"
    );
  } else {
    console.log("\ncommander.js not available for comparison");
  }
} catch (error) {
  console.log("Error during benchmarking: " + error.message);
}

console.log("\nBenchmark completed.");
