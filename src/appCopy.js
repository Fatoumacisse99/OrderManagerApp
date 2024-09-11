// // main.js
// const productModule = require("./productManager");
// const customerModule = require("./customerManager");
// const paymentModule = require("./paymentManager");
// const orderModule = require("./orderManager");
// const readlineSync = require("readline-sync");
// // Tableau temporaire pour stocker les commandes et les détails
// let temporaryOrders = [];

// async function main() {
//   let choix;
//   do {
//     console.log("\nChoisissez une option");
//     console.log("1 Gestion des produits");
//     console.log("2 Gestion des clients");
//     console.log("3 Gestion des paiements");
//     console.log("4 Gestion des commandes");
//     console.log("0 Quitter");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await productMenu();
//         break;
//       case "2":
//         await customerMenu();
//         break;
//       case "3":
//         await paymentMenu();
//         break;
//       case "4":
//         await orderMenu();
//         break;
//       case "0":
//         console.log("Sortie du programme...");
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }
// async function productMenu() {
//   let choix;
//   do {
//     console.log("\nGestion des produits");
//     console.log("1 Ajouter un produit");
//     console.log("2 Lister tous les produits");
//     console.log("3 Mettre à jour les infos d'un produit");
//     console.log("4 Supprimer un produit");
//     console.log("0 Retour");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addProduct();
//         break;
//       case "2":
//         await listProducts();
//         break;
//       case "3":
//         await updateProduct();
//         break;
//       case "4":
//         await deleteProduct();
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }
// async function customerMenu() {
//   let choix;
//   do {
//     console.log("\nGestion des clients");
//     console.log("1 Ajouter un client");
//     console.log("2 Lister tous les clients");
//     console.log("3 Mettre à jour les infos d'un client");
//     console.log("4 Supprimer un client");
//     console.log("0 Retour");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addCustomer();
//         break;
//       case "2":
//         await listCustomers();
//         break;
//       case "3":
//         await updateCustomer();
//         break;
//       case "4":
//         await deleteCustomer();
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }
// async function paymentMenu() {
//   let choix;
//   do {
//     console.log("\nGestion des paiements");
//     console.log("1 Ajouter un paiement");
//     console.log("2 Lister tous les paiements");
//     console.log("3 Mettre à jour un paiement");
//     console.log("4 Supprimer un paiement");
//     console.log("0 Retour");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addPayment();
//         break;
//       case "2":
//         await listPayments();
//         break;
//       case "3":
//         await updatePayment();
//         break;
//       case "4":
//         await deletePayment();
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }
// async function orderMenu() {
//   let choix;
//   do {
//     console.log("\nGestion des commandes");
//     console.log("1 Ajouter une commande");
//     console.log("2 Lister toutes les commandes");
//     console.log("3 Mettre à jour une commande");
//     console.log("4 Supprimer une commande");
//     console.log("5 Gestion des détails de commande");
//     console.log("0 Retour");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addOrder();
//         break;
//       case "2":
//         await listOrders();
//         break;
//       case "3":
//         await updateOrder();
//         break;
//       case "4":
//         await deleteOrder();
//         break;
//       case "5":
//         await orderDetailMenu();
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }
// async function orderMenu() {
//   let choix;
//   do {
//     console.log("\nGestion des commandes");
//     console.log("1 Ajouter une commande et ses détails");
//     console.log("2 Modifier une commande et ses détails");
//     console.log("3 Lister une commande et ses détails");
//     console.log("4 Supprimer une commande et ses détails");
//     console.log("0 Retour");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addOrderWithDetails();
//         break;
//       case "2":
//         await updateOrderWithDetails();
//         break;
//       case "3":
//         await listOrderWithDetails();
//         break;
//       case "4":
//         await deleteOrderWithDetails();
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }

// async function addOrderWithDetails() {
//   try {
//     const customerId = readlineSync.question("Entrez l'ID du client : ");
//     const paymentId = readlineSync.question("Entrez l'ID du paiement : ");
//     const date = readlineSync.question("Entrez la date de la commande (YYYY-MM-DD) : ");

//     const orderId = await orderModule.addOrder(customerId, paymentId, date);
//     console.log(`Commande ajoutée avec succès ! ID de la commande : ${orderId}`);

//     await manageOrderDetails(orderId);
//   } catch (error) {
//     console.error("Erreur lors de l'ajout de la commande :", error.message);
//   }
// }

// async function updateOrderWithDetails() {
//   try {
//     const orderId = readlineSync.question("Entrez l'ID de la commande à modifier : ");
//     const customerId = readlineSync.question("Entrez le nouvel ID du client : ");
//     const paymentId = readlineSync.question("Entrez le nouvel ID du paiement : ");
//     const date = readlineSync.question("Entrez la nouvelle date de la commande (YYYY-MM-DD) : ");

//     await orderModule.updateOrder(orderId, customerId, paymentId, date);
//     console.log("Commande modifiée avec succès !");

//     await manageOrderDetails(orderId);
//   } catch (error) {
//     console.error("Erreur lors de la modification de la commande :", error.message);
//   }
// }

// async function listOrderWithDetails() {
//   try {
//     const orderId = readlineSync.question("Entrez l'ID de la commande à lister : ");
//     const order = await orderModule.getOrder(orderId);
//     const orderDetails = await orderModule.getOrderDetails(orderId); // Utiliser la fonction intégrée dans orderModule

//     console.log("\nCommande:");
//     console.log(order);

//     console.log("\nDétails de la commande:");
//     orderDetails.forEach(detail => {
//       console.log(detail);
//     });
//   } catch (error) {
//     console.error("Erreur lors de la liste de la commande :", error.message);
//   }
// }

// async function deleteOrderWithDetails() {
//   try {
//     const orderId = readlineSync.question("Entrez l'ID de la commande à supprimer : ");

//     await orderModule.deleteOrderDetails(orderId); // Supprimer les détails de la commande
//     await orderModule.deleteOrder(orderId);

//     console.log("Commande et ses détails supprimés avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la suppression de la commande :", error.message);
//   }
// }

// async function manageOrderDetails(orderId) {
//   let choix;
//   do {
//     console.log("\nGestion des détails de la commande");
//     console.log("1 Ajouter des produits");
//     console.log("2 Sauvegarder");
//     console.log("0 Quitter");

//     choix = readlineSync.question("Votre choix : ");

//     switch (choix) {
//       case "1":
//         await addOrderDetails(orderId);
//         break;
//       case "2":
//         console.log("Détails de la commande sauvegardés !");
//         break;
//       case "0":
//         break;
//       default:
//         console.log("Cette option est invalide");
//         break;
//     }
//   } while (choix !== "0");
// }

// async function addOrderDetails(orderId) {
//   let moreProducts = true;
//   while (moreProducts) {
//     try {
//       const productId = readlineSync.question("Entrez l'ID du produit : ");
//       const quantity = parseInt(readlineSync.question("Entrez la quantité : "), 10);

//       if (isNaN(quantity)) {
//         throw new Error("La quantité doit être un nombre.");
//       }

//       await orderModule.addOrderDetail(orderId, productId, quantity); // Utiliser la fonction intégrée dans orderModule
//       console.log("Détail de commande ajouté avec succès !");

//       moreProducts = readlineSync.keyInYNStrict("Ajouter un autre produit ?");
//     } catch (error) {
//       console.error("Erreur lors de l'ajout du détail de commande :", error.message);
//     }
//   }
// }

// async function addProduct() {
//   try {
//     const name = readlineSync.question("Entrez le nom du produit : ");
//     const description = readlineSync.question("Entrez la description du produit : ");
//     const price = parseFloat(readlineSync.question("Entrez le prix du produit : "));a
//     const stock = parseInt(readlineSync.question("Entrez la quantité en stock : "), 10);
//     const category = readlineSync.question("Entrez la catégorie du produit : ");
//     const barcode = readlineSync.question("Entrez le code-barres du produit : ");
//     const status = readlineSync.question("Entrez le statut du produit (disponible / non disponible) : ");

//     if (isNaN(price) || isNaN(stock)) {
//       throw new Error("Le prix et la quantité en stock doivent être des nombres.");
//     }
//     await productModule.addProduct(name, description, price, stock, category, barcode, status);

//     console.log("Produit ajouté avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de l'ajout du produit :", error.message);
//   }
// }

// async function listProducts() {
//   try {
//     const products = await productModule.getProducts();
//     if (products.length === 0) {
//       console.log("Aucun produit trouvé.");
//     } else {
//       for (let product of products) {
//         console.log(`id: ${product.id}, Nom: ${product.name}, Prix: ${product.price}`);
//       }
//     }
//   } catch (error) {
//     console.error("Erreur lors de la récupération des produits :", error.message);
//   }
// }

// async function updateProduct() {
//   try {
//     const id = readlineSync.question(
//       "Entrez l'ID du produit à mettre à jour : "
//     );
//     const name = readlineSync.question("Entrez le nouveau nom du produit : ");
//     const description = readlineSync.question(
//       "Entrez la nouvelle description du produit : "
//     );
//     const price = parseFloat(
//       readlineSync.question("Entrez le nouveau prix du produit : ")
//     );
//     const stock = parseInt(
//       readlineSync.question("Entrez la nouvelle quantité en stock : "),
//       10
//     );
//     const category = readlineSync.question(
//       "Entrez la nouvelle catégorie du produit : "
//     );
//     const barcode = readlineSync.question(
//       "Entrez le nouveau code-barres du produit : "
//     );
//     const status = readlineSync.question(
//       "Entrez le nouveau statut du produit (disponible / non disponible) : "
//     );

//     if (isNaN(price) || isNaN(stock)) {
//       throw new Error(
//         "Le prix et la quantité en stock doivent être des nombres."
//       );
//     }

//     await productModule.updateProduct(
//       id,
//       name,
//       description,
//       price,
//       stock,
//       category,
//       barcode,
//       status
//     );
//     console.log("Produit mis à jour avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour du produit :", error.message);
//   }
// }

// async function deleteProduct() {
//   try {
//     const id = readlineSync.question("Entrez l'ID du produit à supprimer : ");
//     await productModule.destroyProduct(id);
//     console.log("Produit supprimé avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la suppression du produit :", error.message);
//   }
// }

// async function addCustomer() {
//   try {
//     const name = readlineSync.question("Entrez le nom du client : ");
//     const email = readlineSync.question("Entrez l'email du client : ");
//     const phone = readlineSync.question("Entrez le téléphone du client : ");
//     const address = readlineSync.question("Entrez l'adresse du client : ");

//     await customerModule.addCustomer(name, email, phone, address);
//     console.log("client ajouté avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de l'ajout du client :", error.message);
//   }
// }

// async function listCustomers() {
//   try {
//     const customers = await customerModule.getCustomers();
//     console.log("Liste des clients :");
//     customers.forEach((customer) => {
//       console.log(
//         `ID: ${customer.id}, Nom: ${customer.name}, Email: ${customer.email}, Téléphone: ${customer.phone}, Adresse: ${customer.address}`
//       );
//     });
//   } catch (error) {
//     console.error("Erreur lors de la liste des clients :", error.message);
//   }
// }

// async function updateCustomer() {
//   try {
//     const id = readlineSync.question(
//       "Entrez l'ID du client à mettre à jour : "
//     );
//     const name = readlineSync.question("Entrez le nouveau nom du client : ");
//     const email = readlineSync.question("Entrez le nouvel email du client : ");
//     const phone = readlineSync.question(
//       "Entrez le nouveau téléphone du client : "
//     );
//     const address = readlineSync.question(
//       "Entrez la nouvelle adresse du client : "
//     );

//     await customerModule.updateCustomer(id, name, email, phone, address);
//     console.log("Client mis à jour avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour du client :", error.message);
//   }
// }

// async function deleteCustomer() {
//   try {
//     const id = readlineSync.question("Entrez l'ID du client à supprimer : ");
//     await customerModule.destroyCustomer(id);
//     console.log("Client supprimé avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la suppression du client :", error.message);
//   }
// }

// async function addPayment() {
//   try {
//     const orderId = readlineSync.question(
//       "Entrez l'ID de la commande pour le paiement : "
//     );
//     const paymentDate = readlineSync.question(
//       "Entrez la date du paiement (YYYY-MM-DD) : "
//     );
//     const amount = parseFloat(
//       readlineSync.question("Entrez le montant du paiement : ")
//     );
//     const payment_method = readlineSync.question(
//       "Entrez la methode du paiment : "
//     );
//     const status = readlineSync.question(
//       "Entrez la status du paiment : "
//     );

//     if (isNaN(amount)) {
//       throw new Error("Le montant du paiement doit être un nombre.");
//     }

//     await paymentModule.addPayment(orderId, paymentDate, amount, payment_method, status);

//     console.log("Paiement ajouté avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de l'ajout du paiement :", error.message);
//   }
// }

// async function listPayments() {
//   try {
//     const payments = await paymentModule.getPayments();
//     console.log("Liste des paiements :");
//     payments.forEach((payment) => {
//       console.log(
//         `ID: ${payment.id}, Commande ID: ${payment.order_id}, Date: ${payment.date}, Montant: ${payment.amount}`
//       );
//     });
//   } catch (error) {
//     console.error("Erreur lors de la liste des paiements :", error.message);
//   }
// }

// async function updatePayment() {
//   try {
//     const id = readlineSync.question(
//       "Entrez l'ID du paiement à mettre à jour : "
//     );
//     const orderId = readlineSync.question(
//       "Entrez le nouvel ID de la commande pour le paiement : "
//     );
//     const paymentDate = readlineSync.question(
//       "Entrez la nouvelle date du paiement (YYYY-MM-DD) : "
//     );
//     const amount = parseFloat(
//       readlineSync.question("Entrez le nouveau montant du paiement : ")
//     );

//     if (isNaN(amount)) {
//       throw new Error("Le montant du paiement doit être un nombre.");
//     }

//     await paymentModule.updatePayment(id, orderId, paymentDate, amount);
//     console.log("Paiement mis à jour avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour du paiement :", error.message);
//   }
// }

// async function deletePayment() {
//   try {
//     const id = readlineSync.question("Entrez l'ID du paiement à supprimer : ");
//     await paymentModule.destroyPayment(id);
//     console.log("Paiement supprimé avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de la suppression du paiement :", error.message);
//   }
// }
// // // Fonction pour ajouter une commande
// // async function addOrder() {
// //   try {
// //     const date = readlineSync.question("Entrez la date de la commande (YYYY-MM-DD) : ");
// //     const customer_id = readlineSync.question("Entrez l'ID du client : ");
// //     const delivery_address = readlineSync.question("Entrez l'adresse de livraison : ");
// //     const track_number = readlineSync.question("Entrez le numéro de suivi : ");
// //     const status = readlineSync.question("Entrez le statut de la commande : ");

// //     if (isNaN(Date.parse(date))) {
// //       throw new Error("La date fournie n'est pas valide.");
// //     }

// //     const orderId = await orderModule.addOrder(date, customer_id, delivery_address, track_number, status);
// //     console.log(`Commande ajoutée avec succès ! ID de la commande : ${orderId}`);
// //   } catch (error) {
// //     console.error("Erreur lors de l'ajout de la commande :", error.message);
// //   }
// // }

// // // Fonction pour lister toutes les commandes
// // async function listOrders() {
// //   try {
// //     const orders = await orderModule.getOrders();
// //     console.log("Liste des commandes :");
// //     orders.forEach(order => {
// //       console.log(`ID: ${order.id}, Date: ${order.date}, Client ID: ${order.customer_id}, Adresse de livraison: ${order.delivery_address}, Numéro de suivi: ${order.track_number}, Statut: ${order.status}`);
// //     });
// //   } catch (error) {
// //     console.error("Erreur lors de la liste des commandes :", error.message);
// //   }
// // }

// // // Fonction pour mettre à jour une commande
// // async function updateOrder() {
// //   try {
// //     const id = readlineSync.question("Entrez l'ID de la commande à mettre à jour : ");
// //     const date = readlineSync.question("Entrez la nouvelle date de la commande (YYYY-MM-DD) : ");
// //     const customer_id = readlineSync.question("Entrez le nouvel ID du client : ");
// //     const delivery_address = readlineSync.question("Entrez la nouvelle adresse de livraison : ");
// //     const track_number = readlineSync.question("Entrez le nouveau numéro de suivi : ");
// //     const status = readlineSync.question("Entrez le nouveau statut de la commande : ");

// //     if (isNaN(Date.parse(date))) {
// //       throw new Error("La date fournie n'est pas valide.");
// //     }

// //     const affectedRows = await orderModule.updateOrder(id, date, customer_id, delivery_address, track_number, status);
// //     if (affectedRows > 0) {
// //       console.log("Commande mise à jour avec succès !");
// //     } else {
// //       console.log(`Aucune commande trouvée avec l'ID ${id}.`);
// //     }
// //   } catch (error) {
// //     console.error("Erreur lors de la mise à jour de la commande :", error.message);
// //   }
// // }

// // // Fonction pour supprimer une commande
// // async function deleteOrder() {
// //   try {
// //     const id = readlineSync.question("Entrez l'ID de la commande à supprimer : ");
// //     const affectedRows = await orderModule.deleteOrder(id);
// //     if (affectedRows > 0) {
// //       console.log("Commande supprimée avec succès !");
// //     } else {
// //       console.log(`Aucune commande trouvée avec l'ID ${id}.`);
// //     }
// //   } catch (error) {
// //     console.error("Erreur lors de la suppression de la commande :", error.message);
// //   }
// // }

// // // Fonction pour ajouter un détail de commande
// // async function addOrderDetail() {
// //   try {
// //     const orderId = readlineSync.question("Entrez l'ID de la commande : ");
// //     const productId = readlineSync.question("Entrez l'ID du produit : ");
// //     const quantity = parseInt(readlineSync.question("Entrez la quantité : "), 10);

// //     if (isNaN(quantity)) {
// //       throw new Error("La quantité doit être un nombre.");
// //     }

// //     const orderDetailId = await orderModule.addOrderDetail(orderId, productId, quantity);
// //     console.log(`Détail de commande ajouté avec succès ! ID du détail : ${orderDetailId}`);
// //   } catch (error) {
// //     console.error("Erreur lors de l'ajout du détail de commande :", error.message);
// //   }
// // }

// // // Fonction pour lister tous les détails de commandes
// // async function listOrderDetails() {
// //   try {
// //     const orderDetails = await orderModule.getOrderDetails();
// //     console.log("Liste des détails de commandes :");
// //     orderDetails.forEach(detail => {
// //       console.log(`ID: ${detail.id}, Commande ID: ${detail.order_id}, Produit ID: ${detail.product_id}, Quantité: ${detail.quantity}`);
// //     });
// //   } catch (error) {
// //     console.error("Erreur lors de la liste des détails de commandes :", error.message);
// //   }
// // }

// // // Fonction pour mettre à jour un détail de commande
// // async function updateOrderDetail() {
// //   try {
// //     const id = readlineSync.question("Entrez l'ID du détail de commande à mettre à jour : ");
// //     const quantity = parseInt(readlineSync.question("Entrez la nouvelle quantité : "), 10);

// //     if (isNaN(quantity)) {
// //       throw new Error("La quantité doit être un nombre.");
// //     }

// //     await orderModule.updateOrderDetail(id, quantity);
// //   } catch (error) {
// //     console.error("Erreur lors de la mise à jour du détail de commande :", error.message);
// //   }
// // }

// // // Fonction pour supprimer un détail de commande
// // async function deleteOrderDetail() {
// //   try {
// //     const id = readlineSync.question("Entrez l'ID du détail de commande à supprimer : ");
// //     await orderModule.destroyOrderDetail(id);
// //   } catch (error) {
// //     console.error("Erreur lors de la suppression du détail de commande :", error.message);
// //   }
// // }

// main();
// main.js
const productModule = require("./productManager");
const customerModule = require("./customerManager");
const paymentModule = require("./paymentManager");
const orderModule = require("./orderManager");
const readlineSync = require("readline-sync");

async function main() {
  let choix;
  do {
    console.log("\nChoisissez une option");
    console.log("1 Gestion des produits");
    console.log("2 Gestion des clients");
    console.log("3 Gestion des paiements");
    console.log("4 Gestion des commandes");
    console.log("0 Quitter");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await productMenu();
        break;
      case "2":
        await customerMenu();
        break;
      case "3":
        await paymentMenu();
        break;
      case "4":
        await orderMenu();
        break;
      case "0":
        console.log("Sortie du programme...");
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function productMenu() {
  let choix;
  do {
    console.log("\nGestion des produits");
    console.log("1 Ajouter un produit");
    console.log("2 Lister tous les produits");
    console.log("3 Mettre à jour les infos d'un produit");
    console.log("4 Supprimer un produit");
    console.log("0 Retour");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await addProduct();
        break;
      case "2":
        await listProducts();
        break;
      case "3":
        await updateProduct();
        break;
      case "4":
        await deleteProduct();
        break;
      case "0":
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function customerMenu() {
  let choix;
  do {
    console.log("\nGestion des clients");
    console.log("1 Ajouter un client");
    console.log("2 Lister tous les clients");
    console.log("3 Mettre à jour les infos d'un client");
    console.log("4 Supprimer un client");
    console.log("0 Retour");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await addCustomer();
        break;
      case "2":
        await listCustomers();
        break;
      case "3":
        await updateCustomer();
        break;
      case "4":
        await deleteCustomer();
        break;
      case "0":
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function paymentMenu() {
  let choix;
  do {
    console.log("\nGestion des paiements");
    console.log("1 Ajouter un paiement");
    console.log("2 Lister tous les paiements");
    console.log("3 Mettre à jour un paiement");
    console.log("4 Supprimer un paiement");
    console.log("0 Retour");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await addPayment();
        break;
      case "2":
        await listPayments();
        break;
      case "3":
        await updatePayment();
        break;
      case "4":
        await deletePayment();
        break;
      case "0":
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function orderMenu() {
  let choix;
  do {
    console.log("\nGestion des commandes");
    console.log("1 Ajouter une commande et ses détails");
    console.log("2 Modifier une commande et ses détails");
    console.log("3 Lister une commande et ses détails");
    console.log("4 Supprimer une commande et ses détails");
    console.log("0 Retour");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await addOrderWithDetails();
        break;
      case "2":
        await updateOrderWithDetails();
        break;
      case "3":
        await listOrderWithDetails();
        break;
      case "4":
        await deleteOrderWithDetails();
        break;
      case "0":
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function addOrderWithDetails() {
  try {
    const date = readlineSync.question(
      "Entrez la date de la commande (YYYY-MM-DD) : "
    );
    const customer_id = readlineSync.question("ID du client: ");
    const delivery_address = readlineSync.question("Adresse de livraison: ");
    const track_number = readlineSync.question("Numéro de suivi: ");
    const status = readlineSync.question("Statut de la commande: ");
    const orderId = await orderModule.addOrder(
      date,
      customer_id,
      delivery_address,
      track_number,
      status
    );
    console.log(
      `Commande ajoutée avec succès ! ID de la commande : ${orderId}`
    );

    await manageOrderDetails(orderId);
  } catch (error) {
    console.error("Erreur lors de l'ajout de la commande :", error.message);
  }
}

async function updateOrderWithDetails() {
  try {
    
    const orderId = readlineSync.question(
      "Entrez l'ID de la commande à modifier : "
    );
    const customerId = readlineSync.question(
      "Entrez le nouvel ID du client : "
    );
    const paymentId = readlineSync.question(
      "Entrez le nouvel ID du paiement : "
    );
    const date = readlineSync.question(
      "Entrez la nouvelle date de la commande (YYYY-MM-DD) : "
    );

    await orderModule.updateOrder(orderId, customerId, paymentId, date);
    console.log("Commande modifiée avec succès !");

    await manageOrderDetails(orderId);
  } catch (error) {
    console.error(
      "Erreur lors de la modification de la commande :",
      error.message
    );
  }
}

async function listOrderWithDetails() {
  try {
    const orderId = readlineSync.question(
      "Entrez l'ID de la commande à lister : "
    );
    const order = await orderModule.getOrder(orderId);
    const orderDetails = await orderModule.getOrderDetails(orderId);

    console.log("\nCommande:");
    console.log(order);

    console.log("\nDétails de la commande:");
    orderDetails.forEach((detail) => {
      console.log(detail);
    });
  } catch (error) {
    console.error("Erreur lors de la liste de la commande :", error.message);
  }
}

async function deleteOrderWithDetails() {
  try {
    const orderId = readlineSync.question(
      "Entrez l'ID de la commande à supprimer : "
    );

    await orderModule.deleteOrderDetails(orderId);
    await orderModule.deleteOrder(orderId);

    console.log("Commande et ses détails supprimés avec succès !");
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de la commande :",
      error.message
    );
  }
}

async function manageOrderDetails(orderId) {
  let choix;
  do {
    console.log("\nGestion des détails de la commande");
    console.log("1 Ajouter des produits");
    console.log("2 Sauvegarder");
    console.log("0 Quitter");

    choix = readlineSync.question("Votre choix : ");

    switch (choix) {
      case "1":
        await addOrderDetails(orderId);
        break;
      case "2":
        console.log("Détails de la commande sauvegardés !");
        break;
      case "0":
        break;
      default:
        console.log("Cette option est invalide");
        break;
    }
  } while (choix !== "0");
}

async function addOrderDetails(orderId) {
  let moreProducts = true;
  while (moreProducts) {
    try {
      const productId = readlineSync.question("Entrez l'ID du produit : ");
      const quantity = parseInt(
        readlineSync.question("Entrez la quantité : "),
        10
      );

      if (isNaN(quantity)) {
        throw new Error("La quantité doit être un nombre.");
      }

      await orderModule.addOrderDetail(orderId, productId, quantity);
      console.log("Détail de commande ajouté avec succès !");

      moreProducts = readlineSync.keyInYNStrict("Ajouter un autre produit ?");
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout du détail de commande :",
        error.message
      );
    }
  }
}

async function addProduct() {
  try {
    const name = readlineSync.question("Entrez le nom du produit : ");
    const description = readlineSync.question(
      "Entrez la description du produit : "
    );
    const price = parseFloat(
      readlineSync.question("Entrez le prix du produit : ")
    );
    const stock = parseInt(
      readlineSync.question("Entrez la quantité en stock : "),
      10
    );
    const category = readlineSync.question("Entrez la catégorie du produit : ");
    const barcode = readlineSync.question(
      "Entrez le code-barres du produit : "
    );
    const status = readlineSync.question(
      "Entrez le statut du produit (disponible / non disponible) : "
    );
    await productModule.addProduct(
      name,
      description,
      price,
      stock,
      category,
      barcode,
      status
    );

    console.log("Produit ajouté avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error.message);
  }
}

async function listProducts() {
  try {
    const products = await productModule.getProducts();
    console.log("\nListe des produits :");
    products.forEach((product) => {
      console.log(product);
    });
  } catch (error) {
    console.error("Erreur lors de la liste des produits :", error.message);
  }
}

async function updateProduct() {
  try {
    const productId = readlineSync.question(
      "Entrez l'ID du produit à modifier : "
    );
    const name = readlineSync.question(
      "Entrez le nouveau nom du produit (laisser vide pour ne pas changer) : "
    );
    const description = readlineSync.question(
      "Entrez la nouvelle description du produit (laisser vide pour ne pas changer) : "
    );
    const price = readlineSync.question(
      "Entrez le nouveau prix du produit (laisser vide pour ne pas changer) : "
    );
    const stock = readlineSync.question(
      "Entrez la nouvelle quantité en stock du produit (laisser vide pour ne pas changer) : "
    );
    const category = readlineSync.question(
      "Entrez la nouvelle catégorie du produit (laisser vide pour ne pas changer) : "
    );
    const barcode = readlineSync.question(
      "Entrez le nouveau code-barres du produit (laisser vide pour ne pas changer) : "
    );
    const status = readlineSync.question(
      "Entrez le nouveau statut du produit (laisser vide pour ne pas changer) : "
    );

    await productModule.updateProduct(
      productId,
      name,
      description,
      price,
      stock,
      category,
      barcode,
      status
    );
    console.log("Produit modifié avec succès !");
  } catch (error) {
    console.error("Erreur lors de la modification du produit :", error.message);
  }
}

async function deleteProduct() {
  try {
    const productId = readlineSync.question(
      "Entrez l'ID du produit à supprimer : "
    );
    await productModule.deleteProduct(productId);
    console.log("Produit supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error.message);
  }
}

async function addCustomer() {
  try {
    const name = readlineSync.question("Entrez le nom du client : ");
    const email = readlineSync.question("Entrez l'email du client : ");
    const phone = readlineSync.question(
      "Entrez le numéro de téléphone du client : "
    );
    const address = readlineSync.question("Entrez l'adresse du client : ");

    await customerModule.addCustomer(name, email, phone, address);
    console.log("Client ajouté avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout du client :", error.message);
  }
}

async function listCustomers() {
  try {
    const customers = await customerModule.getCustomers();
    console.log("\nListe des clients :");
    customers.forEach((customer) => {
      console.log(customer);
    });
  } catch (error) {
    console.error("Erreur lors de la liste des clients :", error.message);
  }
}

async function updateCustomer() {
  try {
    const customerId = readlineSync.question(
      "Entrez l'ID du client à modifier : "
    );
    const name = readlineSync.question(
      "Entrez le nouveau nom du client (laisser vide pour ne pas changer) : "
    );
    const email = readlineSync.question(
      "Entrez le nouvel email du client (laisser vide pour ne pas changer) : "
    );
    const phone = readlineSync.question(
      "Entrez le nouveau numéro de téléphone du client (laisser vide pour ne pas changer) : "
    );
    const address = readlineSync.question(
      "Entrez la nouvelle adresse du client (laisser vide pour ne pas changer) : "
    );

    await customerModule.updateCustomer(
      customerId,
      name,
      email,
      phone,
      address
    );
    console.log("Client modifié avec succès !");
  } catch (error) {
    console.error("Erreur lors de la modification du client :", error.message);
  }
}

async function deleteCustomer() {
  try {
    const customerId = readlineSync.question(
      "Entrez l'ID du client à supprimer : "
    );
    await customerModule.deleteCustomer(customerId);
    console.log("Client supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression du client :", error.message);
  }
}

async function addPayment() {
  try {
    const order_id = readlineSync.question('Entrez l\'ID de la commande: ');
  const amount = readlineSync.question('Entrez le montant: ');
  const payment_date = readlineSync.question('Entrez la date du paiement (YYYY-MM-DD): ');
  
  
  
  const payment_method = readlineSync.question('Entrez le mode de paiement (ex: carte, espèces): ');
  const status = readlineSync.question('Entrez le statut du paiement (ex: payé, en attente): ');
    if (isNaN(amount)) {
      throw new Error("Le montant doit être un nombre.");
    }

    await paymentModule.addPayment(order_id, amount, payment_date, payment_method, status);
    console.log("Paiement ajouté avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout du paiement :", error.message);
  }
}

async function listPayments() {
  try {
    const payments = await paymentModule.getPayments();
    console.log("\nListe des paiements :");
    payments.forEach((payment) => {
      console.log(payment);
    });
  } catch (error) {
    console.error("Erreur lors de la liste des paiements :", error.message);
  }
}

async function updatePayment() {
  try {
    const paymentId = readlineSync.question("Entrez l'ID du paiement à modifier : ");
    const orderId = readlineSync.question("Entrez l'ID de la commande : ");
    const date = readlineSync.question("Entrez la date du paiement (YYYY-MM-DD) : ");
    const amount = parseFloat(readlineSync.question("Entrez le nouveau montant du paiement : "));
    const paymentMethod = readlineSync.question("Entrez le mode de paiement : ");
    const status = readlineSync.question("Entrez le statut du paiement : ");

    if (isNaN(amount)) {
      throw new Error("Le montant doit être un nombre.");
    }

    await paymentModule.updatePayment(paymentId, orderId, amount, date, paymentMethod, status );
    console.log("Paiement modifié avec succès !");
  } catch (error) {
    console.error(
      "Erreur lors de la modification du paiement :",
      error.message
    );
  }
}

async function deletePayment() {
  try {
    const paymentId = readlineSync.question(
      "Entrez l'ID du paiement à supprimer : "
    );
    await paymentModule.deletePayment(paymentId);
    console.log("Paiement supprimé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la suppression du paiement :", error.message);
  }
}

main();
