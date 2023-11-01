import { Question, Answer, Resolution } from "../../util/question/module";

// reuseable text
const allGoodText = "All good!";
const doesNotWorkText = "Does not work";

// resolutions
const replaceResolution = new Resolution("Replace.");
const repairResolution = new Resolution("Repair.");
const dontDoAnythingOrReplaceScreenResolution = new Resolution("Don't do anything for now or replace the screen.");
const replaceOrRepairResolution = new Resolution("Replace or repair.");
const notSureResolution = new Resolution("Not sure here.");
const replaceBatteryResolution = new Resolution("Replace battery.");
const waitABitResolution = new Resolution("Wait a bit.");
const saveBatteryResolution = new Resolution("Battery saving mode, reduce brightness, disable apps that use a lot of battery.");

// questions and answers
const allGoodAnswer = new Answer(allGoodText);

// Overheating and usage
const checkForUpdatesDoesNotWorkQuestion = new Question("", [
  new Answer("Older than 2 years", replaceResolution),
  new Answer("Younger than 2 years", repairResolution),
]);
const checkForUpdatesDoesNotWorkAnswer = new Answer(doesNotWorkText, checkForUpdatesDoesNotWorkQuestion);

const checkForUpdatesQuestion = new Question(
  "Check for updates, delete and download again, check storage space, clear things running in the background, update phone OS, turn phone off then on again. Shut down apps (lower RAM usage), delete unnecessary files.",
  [allGoodAnswer, checkForUpdatesDoesNotWorkAnswer],
);

const buttonResetCombinationQuestion = new Question("Try some button reset combination", [
  allGoodAnswer,
  new Answer(doesNotWorkText, replaceResolution),
]);
const chargeAndRetryQuestion = new Question("Charge it and retry.", [allGoodAnswer, new Answer(doesNotWorkText, buttonResetCombinationQuestion)]);

const usageQuestion = new Question("", [
  new Answer("Slow", checkForUpdatesQuestion),
  new Answer("App crashes", checkForUpdatesQuestion),
  new Answer("Cannot turn on", chargeAndRetryQuestion),
]);

// Physical problem
const blackSpotsAnswer = new Answer("Black spots, blurring, discoloration > comfort", dontDoAnythingOrReplaceScreenResolution);
const blackSpotsQuestion = new Question("", [blackSpotsAnswer]);

const toothbrushQuestion = new Question("", [allGoodAnswer, new Answer(doesNotWorkText, replaceOrRepairResolution)]);
const chargingPortAnswer = new Answer("Clean it with new toothbrush or dry cotton swab", toothbrushQuestion);
const chargingPortQuestion = new Question("", [chargingPortAnswer]);

const physicalProblemQuestion = new Question("", [
  new Answer("Buttons", repairResolution),
  new Answer("Screen", blackSpotsQuestion),
  new Answer("Charging port", chargingPortQuestion),
  new Answer("Broken mic", notSureResolution),
]);

// Battery drainage
const eightyPercentBatteryQuestion = new Question("Loses more than 80% of its battery in one day", [
  new Answer("Yes", replaceBatteryResolution),
  new Answer("No", waitABitResolution),
]);

const batteryDrainageQuestion = new Question("", [
  new Answer("Older than 2 years", eightyPercentBatteryQuestion),
  new Answer("More recent than 2 years", saveBatteryResolution),
]);

// Connectivity
const tryRestartingQuestion = new Question("Try restarting.", [
  allGoodAnswer,
  new Answer("Try enabling airplane mode for at least 1 minute, restart wifi and connect (can restart router also)."),
]);

// Water
const turnPhoneOffQuestion = new Question(
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

export default smartphoneRootQuestion = new Question("Type of problem", [
  overheatingAnswer,
  usageAnswer,
  physicalProblemAnswer,
  batteryDrainageAnswer,
  connectivityAnswer,
  waterAnswer,
]);
