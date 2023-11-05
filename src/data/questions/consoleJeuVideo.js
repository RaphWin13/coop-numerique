import Part from "@/util/questionnaire/Part";
import Answer from "@/util/questionnaire/Answer";

// reuseable text
const allGoodText = "Tout est beau!";
const doesNotWorkText = "Ne fonctionne toujours pas.";
const overheat = "Nettoyer les ventilateurs, placer la console dans un endroit aéré, utiliser des capsules refroidissantes.";
// const deviceAgeText = "What is the age of the device?";

// resolutions
const replaceResolution = new Part("Il faudrait remplacer la console.", [], true);
const repairResolution = new Part("Il faudrait réparer la console.", [], false, true);
const replaceDisk = new Part("Il faudrait réparer le disque interne.", [], false, true);
const updgradeAndRepair = new Part("Il faudrait remplacer le système ou le mettre à jour (réparation nécessaire).", [], true, true);
const motherBoardResolution = new Part("Réparer la mother board et faire nettoyer l'appareil par un spécialiste.", [], false, true);
const cleanItResolution = new Part("Il faudrait le faire nettoyer par un spécialiste", [], false, true);

// questions and answers
const allGoodAnswer = new Answer(allGoodText, new Part("Excellent!"));

// Physical problem
const physicalProblemQuestion = new Part("Type de problème", [
  new Answer("Port endommagé", repairResolution),
  new Answer("Écran endommagé", repairResolution),
  new Answer("Boutons ne fonctionnent pas", repairResolution),
  new Answer("Console a pris l'eau", motherBoardResolution)
]);

// Connectivity Problems
const ConnectitivyProblem = new Part("Désactiver Wifi et Bluetooth et attendre quelques minutes. Reconnecter et faire la même chose avec le router.", [
  new Answer("Cela a fonctionné", allGoodAnswer),
  new Answer(doesNotWorkText, replaceResolution),
]);

// Software glitch
const updateResolution = new Part("Est-ce que le logiciel est à jour?", [new Answer("Oui", allGoodAnswer), new Answer("Non",updgradeAndRepair)]);
const diskResolution = new Part("Est-ce que le disque est endommagé?",[new Answer("Non", allGoodAnswer), new Answer("Oui", replaceDisk)])

const softwareGlitch = new Part("Type d'erreur", [
  new Answer("Erreurs de logiciels", updateResolution),
  new Answer("Erreurs de lecture de disque", diskResolution),
]);

// Overheating
const tryRestartingQuestion = new Part(overheat, [
  allGoodAnswer,
  new Answer("Cela ne fonctionne pas.", cleanItResolution)]);

// Power supply
const turnOff = new Part("Vérifier si le système surchauffe", [allGoodAnswer, new Answer(doesNotWorkText, cleanItResolution)])
const turnOn = new Part("Vérifier si le câble d'alimentation est connecté. Redémarrer l'appareil et démêler les câbles.",[allGoodAnswer, new Answer(doesNotWorkText, repairResolution)])

const powerSupplyQuestion = new Part("Quel est le problème?",
  [new Answer("S'éteint de façon aléatoire", turnOff),
  new Answer("Ne s'allume pas", turnOn)]
);

// Root
const overheatingAnswer = new Answer("Surchauffe", tryRestartingQuestion);
const softwareGlitchAnswer = new Answer("Erreur de système", softwareGlitch);
const connectivityAnswer = new Answer("Problème de connection", ConnectitivyProblem);
const physicalProblemAnswer = new Answer("Problème physique", physicalProblemQuestion);
const powerSupplyAnswer = new Answer("Problème d'alimentation", powerSupplyQuestion);


export const consoleRootQuestion = new Part("Type de problème", [
  overheatingAnswer,
  softwareGlitchAnswer,
  physicalProblemAnswer,
  connectivityAnswer,
  powerSupplyAnswer
]);
