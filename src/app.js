
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
    const order = await orderModule.getOrders(orderId);
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

    await orderModule.destroyOrderDetail(orderId);
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
    await productModule.destroyProduct(productId);
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
    await customerModule.destroyCustomer(customerId);
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
