//Centres pour achat de pièces
const findPieces1 =  "Electromike (https://www.electromike.com/)"
const findPieces2 = "Acces Electronique (https://acceselectronique.ca/?ls=en-CA)"
const findPieces3 = "KGE Électronique (https://www.kge.ca/)"
// ajouter lien vers la page de la coop Boutique

//Centres de réparation
const reparePoint1 = "AltechMobile (https://www.altechmobile.ca/reparation_consoles)"
const reparePoint2 = "Fix Ton Padget (https://fixtonpadget.com/)"
const reparePoint3 = "Beaudoin électronique (https://beaudoinelectronique.ca/)"

//Tuto pour réparer soi-même
const repareTuto = "IFIXIT Tutoriels de réparation (https://fr.ifixit.com/Tutoriel)"

//Combine
const repareList = [reparePoint1,reparePoint2,reparePoint3,reparePointVideoConsole,repareTuto]

//Make bullet point list of the above elements : '<ul><li> + repareList.join("</li><li>"); + '</li></ul>';