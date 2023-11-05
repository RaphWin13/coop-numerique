
const findPieces1 = { name: "Electromike", link: "https://www.electromike.com/" };
const findPieces2 = { name: "Acces Electronique", link: "https://acceselectronique.ca/?ls=en-CA" };
const findPieces3 = { name: "KGE Électronique", link: "https://www.kge.ca/" };
// ajouter lien vers la page de la coop Boutique

//Centres de réparation
const reparePoint1 = { name: "AltechMobile", link: "https://www.altechmobile.ca/reparation_consoles" };
const reparePoint2 = { name: "Fix Ton Padget", link: "https://fixtonpadget.com/" };
const reparePoint3 = { name: "Beaudoin électronique", link: "https://beaudoinelectronique.ca/" };

//Tuto pour réparer soi-même
export const repareTuto = [{ name: "IFIXIT Tutoriels de réparation", link: "https://fr.ifixit.com/Tutoriel" }];

export const findPieces = [findPieces1, findPieces2, findPieces3];

//Combine
export const repareList = [reparePoint1, reparePoint2, reparePoint3];

//Make bullet point list of the above elements : '<ul><li> + repareList.join("</li><li>"); + '</li></ul>';