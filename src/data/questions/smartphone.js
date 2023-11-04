import Part from "@/util/questionnaire/Part";
import Answer from "@/util/questionnaire/Answer";

// reuseable text
const allGoodText = "All good!";
const doesNotWorkText = "Does not work";
const deviceAgeText = "What is the age of the device?";

// resolutions
const replaceResolution = new Part("Replace.");
const repairResolution = new Part("Repair.");
const dontDoAnythingOrReplaceScreenResolution = new Part("Don't do anything for now or replace the screen.");
const replaceOrRepairResolution = new Part("Replace or repair.");
const notSureResolution = new Part("Not sure here.");
const replaceBatteryResolution = new Part("Replace battery.");
const waitABitResolution = new Part("Wait a bit.");
const saveBatteryResolution = new Part("Battery saving mode, reduce brightness, disable apps that use a lot of battery.");

// questions and answers
const allGoodAnswer = new Answer(allGoodText, new Part("Excellent!"));

// Overheating and usage
const checkForUpdatesDoesNotWorkQuestion = new Part(deviceAgeText, [
  new Answer("Older than 2 years", replaceResolution),
  new Answer("Younger than 2 years", repairResolution),
]);
const checkForUpdatesDoesNotWorkAnswer = new Answer(doesNotWorkText, checkForUpdatesDoesNotWorkQuestion);

const checkForUpdatesQuestion = new Part(
  "Check for updates, delete and download again, check storage space, clear things running in the background, update phone OS, turn phone off then on again. Shut down apps (lower RAM usage), delete unnecessary files.",
  [allGoodAnswer, checkForUpdatesDoesNotWorkAnswer],
);

const buttonResetCombinationQuestion = new Part("Try some button reset combination", [allGoodAnswer, new Answer(doesNotWorkText, replaceResolution)]);
const chargeAndRetryQuestion = new Part("Charge it and retry.", [allGoodAnswer, new Answer(doesNotWorkText, buttonResetCombinationQuestion)]);

const usageQuestion = new Part("", [
  new Answer("Slow", checkForUpdatesQuestion),
  new Answer("App crashes", checkForUpdatesQuestion),
  new Answer("Cannot turn on", chargeAndRetryQuestion),
]);

// Physical problem
const blackSpotsAnswer = new Answer("Black spots, blurring, discoloration > comfort", dontDoAnythingOrReplaceScreenResolution);
const blackSpotsQuestion = new Part("", [blackSpotsAnswer]);

const chargingPortQuestion = new Part("Clean it with new toothbrush or dry cotton swab", [allGoodAnswer, new Answer(doesNotWorkText, replaceOrRepairResolution)]);

const physicalProblemQuestion = new Part("", [
  new Answer("Buttons", repairResolution),
  new Answer("Screen", blackSpotsQuestion),
  new Answer("Charging port", chargingPortQuestion),
  new Answer("Broken mic", notSureResolution),
]);

// Battery drainage
const eightyPercentBatteryQuestion = new Part("Loses more than 80% of its battery in one day", [
  new Answer("Yes", replaceBatteryResolution),
  new Answer("No", waitABitResolution),
]);

const batteryDrainageQuestion = new Part(deviceAgeText, [
  new Answer("Older than 2 years", eightyPercentBatteryQuestion),
  new Answer("More recent than 2 years", saveBatteryResolution),
]);

// Connectivity
const tryRestartingQuestion = new Part("Try restarting.", [
  allGoodAnswer,
  new Answer(doesNotWorkText, new Part("Try enabling airplane mode for at least 1 minute, restart wifi and connect (can restart router also).")),
]);

// Water
const turnPhoneOffQuestion = new Part(
  "Turn phone off, shake, dry it in front of fan, if still weird then replace phone. Do not turn on, remove battery if possible.",
  [allGoodAnswer, new Answer(doesNotWorkText, replaceResolution)],
);

// Root
const overheatingAnswer = new Answer("Overheating", checkForUpdatesQuestion);
const usageAnswer = new Answer("Usage", usageQuestion);
const physicalProblemAnswer = new Answer("Physical problem", physicalProblemQuestion);
const batteryDrainageAnswer = new Answer("Battery drainage", batteryDrainageQuestion);
const connectivityAnswer = new Answer("Connectivity", tryRestartingQuestion);
const waterAnswer = new Answer("Water", turnPhoneOffQuestion);

export const smartphoneRootQuestion = new Part("Type of problem", [
  overheatingAnswer,
  usageAnswer,
  physicalProblemAnswer,
  batteryDrainageAnswer,
  connectivityAnswer,
  waterAnswer,
]);
