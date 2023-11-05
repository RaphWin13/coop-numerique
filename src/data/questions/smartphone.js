import Part from "@/util/questionnaire/Part";
import Answer from "@/util/questionnaire/Answer";

// reuseable text
const allGoodText = "Tout est beau!";
const doesNotWorkText = "Ne fonctionne pas";
const deviceAgeText = "Quel est l'âge de l'appareil?";

// resolutions
const replaceResolution = new Part("Il faudrait remplacer l'appareil.", [], true);
const repairResolution = new Part("Il faudrait réparer l'appareil.", [], false, true);
const dontDoAnythingOrReplaceScreenResolution = new Part("Ne rien faire ou faire réparer l'écran.", [], false, true);
const replaceOrRepairResolution = new Part("Il faudrait réparer ou remplacer selon l'âge.", [], true, true);
const replaceBatteryResolution = new Part("Il faudrait remplacer la batterie.", [], false, true);
const waitABitResolution = new Part("Attendre un peu.");
//const saveBatteryResolution = new Part("Essayer le mode d'économie de batterie, réduire la clarté de l'écran, désactiver les applications qui demandent beaucoup d'énergie.");

// questions and answers
const allGoodAnswer = new Answer(allGoodText, new Part("Excellent!"));

// Overheating and usage
const checkForUpdatesDoesNotWorkQuestion = new Part(deviceAgeText, [
  new Answer("Plus vieux que 2 ans.", replaceResolution),
  new Answer("Plus jeune que 2 ans.", repairResolution),
]);
const checkForUpdatesDoesNotWorkAnswer = new Answer(doesNotWorkText, checkForUpdatesDoesNotWorkQuestion);

const checkForUpdatesQuestion = new Part(
  "Vérifier que toutes les mises à jour ont été effectuées, supprimer et retélécharger, vérifier l'espace de stockage, désactiver les applications qui roulent en arrière plan, essayer d'éteindre puis de redémarrer le téléphone. Éteindre les applications, supprimer le contenu inutile.",
  [allGoodAnswer, checkForUpdatesDoesNotWorkAnswer],
);

const buttonResetCombinationQuestion = new Part("Essayer de redémarrer l'appareil.", [allGoodAnswer, new Answer(doesNotWorkText, replaceResolution)]);
const chargeAndRetryQuestion = new Part("Charger l'appareil et réessayer.", [allGoodAnswer, new Answer(doesNotWorkText, buttonResetCombinationQuestion)]);

const usageQuestion = new Part("Symptômes", [
  new Answer("Lenteur", checkForUpdatesQuestion),
  new Answer("Application ne fonctionne pas", checkForUpdatesQuestion),
  new Answer("Difficulté à s'allumer", chargeAndRetryQuestion),
]);

// Physical problem
const blackSpotsAnswer = new Answer("Points noirs, flou, décoloration.", dontDoAnythingOrReplaceScreenResolution);
const blackSpotsQuestion = new Part("Symptômes", [blackSpotsAnswer]);

const chargingPortQuestion = new Part("Nettoyer avec une brosse à dent neuve ou un cotton tige.", [allGoodAnswer, new Answer(doesNotWorkText, replaceOrRepairResolution)]);

const physicalProblemQuestion = new Part("Composante problématique", [
  new Answer("Boutons", repairResolution),
  new Answer("Écran", blackSpotsQuestion),
  new Answer("Port de charge", chargingPortQuestion)
]);

// Battery drainage
const eightyPercentBatteryQuestion = new Part("Est-ce que l'appareil perd plus de 80% de sa batterie en une journée?", [
  new Answer("Oui", replaceBatteryResolution),
  new Answer("Non", waitABitResolution),
]);

const saveBattery = new Part("Essayer le mode d'économie de batterie, réduire la clarté de l'écran, désactiver les applications qui demandent beaucoup d'énergie.",
[allGoodAnswer, new Answer("Ne fonctionne pas.", new Part("Il faudrait changer la batterie."))])

const batteryDrainageQuestion = new Part(deviceAgeText, [
  new Answer("Plus vieux que 2 ans", eightyPercentBatteryQuestion),
  new Answer("Plus jeune que 2 years", saveBattery),
]);

// Connectivity
const tryRestartingQuestion = new Part("Essayer de le faire redémarrer.", [
  allGoodAnswer,
  new Answer(doesNotWorkText, new Part("Essayer d'activer le mode avion pour au moins une minute, redémarrer le wifi and reconnecter.", 
  [allGoodAnswer, new Answer("Ne fonctionne pas.", repairResolution)])),
]);

// Water
const turnPhoneOffQuestion = new Part(
  "Éteindre le téléphone, sécher le téléphone à l'aide d'un ventilateur. Ne pas allumer le téléphone, retirer la batterie si possible.",
  [allGoodAnswer, new Answer(doesNotWorkText, replaceResolution)],
);

// Root
const overheatingAnswer = new Answer("Surchauffe", checkForUpdatesQuestion);
const usageAnswer = new Answer("Utilisation", usageQuestion);
const physicalProblemAnswer = new Answer("Problème physique", physicalProblemQuestion);
const batteryDrainageAnswer = new Answer("Drainage de la batterie", batteryDrainageQuestion);
const connectivityAnswer = new Answer("Connectivité", tryRestartingQuestion);
const waterAnswer = new Answer("Eau", turnPhoneOffQuestion);

export const smartphoneRootQuestion = new Part("Type de problème", [
  overheatingAnswer,
  usageAnswer,
  physicalProblemAnswer,
  batteryDrainageAnswer,
  connectivityAnswer,
  waterAnswer,
]);
