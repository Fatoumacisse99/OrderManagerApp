const studentModule = require("./product");
const readlineSync = require("readline-sync");
const db = require("./db");
db.getConnection();
// function menu() {
//   console.log("1 Ajouter un etudiant");
//   console.log("2 Lister tout les etudiants");
//   console.log("3 Mettre à jour les infos d'un etudiant");
//   console.log("4 Supprimer un etudiant");
//   console.log("5 Ajouter une note");
//   console.log("6 Lister toute les notes");
//   console.log("7 Mettre à jour une notes");
//   console.log("8 Supprimer une notes");
//   console.log("0 Quitter");
//   choix = readlineSync.question("votre choix : ");
//   return choix;
// }
// let choix = "";
// menue();

// async function main() {
//   try {
//     let choix = menu();
//     while (choix !== "0") {
//       switch (choix) {
//         case "1":
//           const nom = readlineSync.question("Entrez le nom : ");
          // const age = readlineSync.questionInt("Entrez l'age : ");
          // const genre = readlineSync.question("Entrez le genre : ");
          // await studentModule.add(nom, parseInt(age), genre);

    //       break;
    //     case "2":
    //       console.log("case 2");
    //       break;

    //     default:
    //       console.log("Cette option est invalide");
    //       break;
    //   }
    //   choix = menu();
    // }

    //   const resultAdd = await studentModule.add("Oumar", 482, "Homme");
    //   console.log(resultAdd);
    // const resultDestroy = await studentModule.destroy(6);
    // console.log(resultDestroy);
    // const result = await studentModule.get();
    // console.log(result);
    //   const resultUpdate = await studentModule.update(3, "Aïchetou", 8, "Fille");
    //   console.log(resultUpdate);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// main();
// const productModule = require("./product");
// const readlineSync = require("readline-sync");

// async function main() {
//   try {
//     console.log("Choisissez une option");
//     console.log("1 Ajouter un produit");
//     console.log("2 Lister tout les produit");
//     console.log("3 Mettre à jour les infos d'un produit");
//     console.log("4 Supprimer un produit");
//     console.log("5 Ajouter une commande");
//     console.log("6 Lister toute les commandes");
//     console.log("7 Mettre à jour une commande");
//     console.log("8 Supprimer une commande");
//     console.log("0 Quitter");
//     let choix = readlineSync.question("votre choix : ");
//     while (choix !== "0") {
//       switch (choix) {
//         case "1":
//           const nom = readlineSync.question("Entrez le nom : ");
//           const description = readlineSync.question("Entrez la description : ");
//           const price = readlineSync.question("Entrez le price : ");
//           const stock = readlineSync.question("Entrez le stock: ");
//           const category = readlineSync.question("Entrez le category : ");
//           const barcode = readlineSync.question("Entrez le barcode : ");
//           const status = readlineSync.question("Entrez le status : ");
//           await productModule.add(
//             nom,
//             description,
//             price,
//             stock,
//             category,
//             barcode,
//             status
//           );

//           break;

//         default:
//           console.log("Cette option est invalide");
//           choix = readlineSync.question("votre choix : ");
//           break;
//       }
//     }

//     //   const resultAdd = await productModule.add("Oumar", 482, "Homme");
//     //   console.log(resultAdd);
//     // const resultDestroy = await productModule.destroy(6);
//     // console.log(resultDestroy);
//     // const result = await productModule.get();
//     // console.log(result);
//     //   const resultUpdate = await productModule.update(3, "Aïchetou", 8, "Fille");
//     //   console.log(resultUpdate);
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// main();
// const productModule = require("./product");
// const customerModule = require("./customer");
// const orderModule = require("./order");
// const paymentModule = require("./payment");
// const readlineSync = require("readline-sync");

// async function main() {
//   try {
//     let choix;
//     do {
//       console.log("\nChoisissez une option");
//       console.log("1 Ajouter un produit");
//       console.log("2 Lister tout les produit");
//       console.log("3 Mettre à jour les infos d'un produit");
//       console.log("4 Supprimer un produit");
//       console.log("5 Ajouter une commande");
//       console.log("6 Lister toute les commandes");
//       console.log("7 Mettre à jour une commande");
//       console.log("8 Supprimer une commande");
//       console.log("0 Quitter");
//       choix = readlineSync.question("votre choix : ");

//       switch (choix) {
//         case "1":
//           const nom = readlineSync.question("Entrez le nom : ");
//           const description = readlineSync.question("Entrez la description : ");
//           const price = readlineSync.question("Entrez le price : ");
//           const stock = readlineSync.question("Entrez le stock: ");
//           const category = readlineSync.question("Entrez le category : ");
//           const barcode = readlineSync.question("Entrez le barcode : ");
//           const status = readlineSync.question("Entrez le status : ");
//           await productModule.add(
//             nom,
//             description,
//             price,
//             stock,
//             category,
//             barcode,
//             status
//           );
//           console.log("Produit ajouté avec succès !");
//           break;

//         case "2":
//           // Exécuter l'action de liste des produits ici
//           break;

//         // Ajoute d'autres cases ici pour les autres options

//         case "0":
//           console.log("Sortie du programme...");
//           break;

//         default:
//           console.log("Cette option est invalide");
//           break;
//       }
//     } while (choix !== "0");
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// main();