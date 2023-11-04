import Part from "@/util/questionnaire/Part";
import Answer from "@/util/questionnaire/Answer";

// reuseable text
const allGoodText = "Tout est beau!";
const doesNotWorkText = "Ne fonctionne toujours pas.";
const overheat = "Nettoyer les ventilateurs, placer la console dans un endroit aéré, utiliser des capsules refroidissantes.";

// resolutions
//const replaceResolution = new Part("Il faudrait remplacer l'ordinateur'.");
const repairResolution = new Part("Il faudrait réparer l'ordinateur ou le remplacer selon l'âge.");
const replaceDisk = new Part("Il faudrait réparer le disque interne.")
const updgradeAndRepair = new Part("Il faudrait remplacer le système ou le mettre à jour (réparation nécessaire).");
const cleanItResolution = new Part("Il faudrait le faire nettoyer par un spécialiste");

// questions and answers
const allGoodAnswer = new Answer(allGoodText, new Part("Excellent!"));
//const notGoodReplaceAnswer = new Answer(doesNotWorkText, replaceResolution)
const notGoodRepairAnswer = new Answer(doesNotWorkText, repairResolution)

// Physical problem
const disasemble = new Part("Essayer de désassembler, nettoyer et réassembler", [allGoodAnswer, notGoodRepairAnswer])

const physicalProblemQuestion = new Part("Type de problème", [
  new Answer("Port endommagé", repairResolution),
  new Answer("Écran endommagé", repairResolution),
  new Answer("Boutons ne fonctionnent pas", repairResolution),
  new Answer("Souris ou clavier ne fonctionnent pas", disasemble)
]);

// Connectivity Problems
const ConnectitivyProblem = new Part("Faire une sauvegarde des données, éteindre l'ordinateur, attendre quelques minutes et le repartir. S'assurer de faire les mises à jour et inspecter les applications qui demandent beaucoup d'effort. Vérifier si l'appareil surchauffe.", [
  allGoodAnswer,
  notGoodRepairAnswer,
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
const turnOn = new Part("Vérifier si le câble d'alimentation est connecté. Redémarrer l'appareil et démêler les câbles.",[allGoodAnswer, notGoodRepairAnswer])

const powerSupplyQuestion = new Part("Quel est le problème?",
  [new Answer("S'éteint de façon aléatoire", turnOff),
  new Answer("Ne s'allume pas", turnOn)]
);

// Root
const overheatingAnswer = new Answer("Surchauffe", tryRestartingQuestion);
const softwareGlitchAnswer = new Answer("Erreur de système", softwareGlitch);
const connectivityAnswer = new Answer("Fige ou roule lentement", ConnectitivyProblem);
const physicalProblemAnswer = new Answer("Problème avec le clavier ou la souris", physicalProblemQuestion);
const powerSupplyAnswer = new Answer("Problème d'alimentation", powerSupplyQuestion);


export const computerRootQuestion = new Part("Type de problème", [
  overheatingAnswer,
  softwareGlitchAnswer,
  physicalProblemAnswer,
  connectivityAnswer,
  powerSupplyAnswer
]);
