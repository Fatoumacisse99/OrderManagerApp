const pool = require("./db");

// Fonction pour obtenir toutes les commandes
async function getOrders() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute("SELECT * FROM purchase_orders");
    return rows;
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes :", error.message);
    throw new Error("Erreur lors de la récupération des commandes.");
  } finally {
    connection.release();
  }
}

// Fonction pour ajouter une commande
async function addOrder(date, customer_id, delivery_address, track_number, status) {
  // Validation des données
  if (!date || !customer_id || !delivery_address || !track_number || !status) {
    throw new Error("Tous les champs (date, customer_id, delivery_address, track_number, status) sont obligatoires.");
  }
  if (isNaN(Date.parse(date))) {
    throw new Error("La date fournie n'est pas valide.");
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "INSERT INTO purchase_orders (date, customer_id, delivery_address, track_number, status) VALUES (?, ?, ?, ?, ?)",
      [date, customer_id, delivery_address, track_number, status]
    );
    return result.insertId;
  } catch (error) {
    console.error("Erreur lors de l'ajout de la commande :", error.message);
    throw new Error("Erreur lors de l'ajout de la commande.");
  } finally {
    connection.release();
  }
}

// Fonction pour mettre à jour une commande
async function updateOrder(id, date, customer_id, delivery_address, track_number, status) {
  // Validation des données
  if (!date || !customer_id || !delivery_address || !track_number || !status) {
    throw new Error("Tous les champs (date, customer_id, delivery_address, track_number, status) sont obligatoires.");
  }
  if (isNaN(Date.parse(date))) {
    throw new Error("La date fournie n'est pas valide.");
  }

  // Vérifier si la commande existe
  if (!(await orderExists(id))) {
    throw new Error(`Erreur : la commande avec l'ID ${id} n'existe pas.`);
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "UPDATE purchase_orders SET date = ?, customer_id = ?, delivery_address = ?, track_number = ?, status = ? WHERE id = ?",
      [date, customer_id, delivery_address, track_number, status, id]
    );
    if (result.affectedRows === 0) {
      throw new Error(`Aucune commande trouvée avec l'ID ${id}.`);
    }
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la commande :", error.message);
    throw new Error("Erreur lors de la mise à jour de la commande.");
  } finally {
    connection.release();
  }
}

// Fonction pour supprimer une commande
async function deleteOrder(id) {
  // Vérifier si la commande existe
  if (!(await orderExists(id))) {
    throw new Error(`Erreur : la commande avec l'ID ${id} n'existe pas.`);
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "DELETE FROM purchase_orders WHERE id = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      throw new Error(`Aucune commande trouvée avec l'ID ${id}.`);
    }
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la suppression de la commande :", error.message);
    throw new Error("Erreur lors de la suppression de la commande.");
  } finally {
    connection.release();
  }
}

// Fonction utilitaire pour vérifier l'existence d'une commande
async function orderExists(id) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute("SELECT 1 FROM purchase_orders WHERE id = ?", [id]);
    return rows.length > 0;
  } catch (error) {
    console.error("Erreur lors de la vérification de l'existence de la commande :", error.message);
    throw new Error("Erreur lors de la vérification de l'existence de la commande.");
  } finally {
    connection.release();
  }
}

module.exports = { getOrders, addOrder, updateOrder, deleteOrder };
