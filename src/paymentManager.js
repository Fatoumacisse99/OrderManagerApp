const pool = require("./db");
async function getPayments() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute("SELECT * FROM payments");
    return rows;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des paiements :",
      error.message
    );
    throw new Error("Erreur lors de la récupération des paiements.");
  } finally {
    connection.release();
  }
}
async function orderExists(orderId) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(
      "SELECT 1 FROM purchase_orders WHERE id = ?",
      [orderId]
    );
    return rows.length > 0;
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'existence de la commande :",
      error.message
    );
    throw new Error(
      "Erreur lors de la vérification de l'existence de la commande."
    );
  } finally {
    connection.release();
  }
}
async function addPayment(order_id, date, amount, payment_method, status) {
  if (!order_id || !date || !amount || !payment_method || !status) {
    throw new Error(
      "Tous les champs (order_id, date, amount, payment_method, status) sont obligatoires."
    );
  }
  if (amount <= 0) {
    throw new Error("Le montant doit être supérieur à zéro.");
  }
  if (isNaN(Date.parse(date))) {
    throw new Error("La date fournie n'est pas valide.");
  }
  if (!(await orderExists(order_id))) {
    throw new Error("Erreur : l'ID de la commande spécifié n'existe pas.");
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "INSERT INTO payments (order_id, date, amount, payment_method, status) VALUES (?, ?, ?, ?, ?)",
      [order_id, date, amount, payment_method, status]
    );
    return result.insertId;
  } catch (error) {
    console.error("Erreur lors de l'ajout du paiement :", error.message);
    throw new Error("Erreur lors de l'ajout du paiement.");
  } finally {
    connection.release();
  }
}
async function updatePayment(
  id,
  order_id,
  date,
  amount,
  payment_method,
  status
) {
  if (!order_id || !date || !amount || !payment_method || !status) {
    throw new Error(
      "Tous les champs (order_id, date, amount, payment_method, status) sont obligatoires."
    );
  }
  if (amount <= 0) {
    throw new Error("Le montant doit être supérieur à zéro.");
  }
  if (isNaN(Date.parse(date))) {
    throw new Error("La date fournie n'est pas valide.");
  }
  if (!(await paymentExists(id))) {
    throw new Error(`Erreur : le paiement avec l'ID ${id} n'existe pas.`);
  }
  if (!(await orderExists(order_id))) {
    throw new Error("Erreur : l'ID de la commande spécifié n'existe pas.");
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "UPDATE payments SET order_id = ?, date = ?, amount = ?, payment_method = ?, status = ? WHERE id = ?",
      [order_id, date, amount, payment_method, status, id]
    );
    if (result.affectedRows === 0) {
      throw new Error(`Aucun paiement trouvé avec l'ID ${id}.`);
    }
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du paiement :", error.message);
    throw new Error("Erreur lors de la mise à jour du paiement.");
  } finally {
    connection.release();
  }
}
async function deletePayment(id) {
  if (!(await paymentExists(id))) {
    throw new Error(`Erreur : le paiement avec l'ID ${id} n'existe pas.`);
  }

  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(
      "DELETE FROM payments WHERE id = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      throw new Error(`Aucun paiement trouvé avec l'ID ${id}.`);
    }
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la suppression du paiement :", error.message);
    throw new Error("Erreur lors de la suppression du paiement.");
  } finally {
    connection.release();
  }
}
async function paymentExists(id) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(
      "SELECT 1 FROM payments WHERE id = ?",
      [id]
    );
    return rows.length > 0;
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'existence du paiement :",
      error.message
    );
    throw new Error(
      "Erreur lors de la vérification de l'existence du paiement."
    );
  } finally {
    connection.release();
  }
}

module.exports = { getPayments, addPayment, updatePayment, deletePayment };
