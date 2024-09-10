// orderDetailManager.js
const db = require('./db'); 
// Fonction pour ajouter un détail de commande
async function addOrderDetail(orderId, productId, quantity) {
  try {
    // Vérifier si la commande existe
    const [order] = await db.query('SELECT * FROM purchase_orders WHERE id = ?', [orderId]);
    if (!order) {
      throw new Error('La commande spécifiée n\'existe pas.');
    }

    // Vérifier si le produit existe
    const [product] = await db.query('SELECT * FROM products WHERE id = ?', [productId]);
    if (!product) {
      throw new Error('Le produit spécifié n\'existe pas.');
    }
    // Insérer le détail de commande
    const result = await db.query(
      'INSERT INTO order_details (order_id, product_id, quantity) VALUES (?, ?, ?)',
      [orderId, productId, quantity]
    );
    console.log('Détail de commande ajouté avec succès !');
    return result.insertId;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du détail de commande :', error.message);
    throw error;
  }
}
// Fonction pour lister tous les détails de commandes
async function getOrderDetails() {
  try {
    const [rows] = await db.query('SELECT * FROM order_details');
    return rows;
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de commandes :', error.message);
    throw error;
  }
}

// Fonction pour mettre à jour un détail de commande
async function updateOrderDetail(id, quantity) {
  try {
    const [detail] = await db.query('SELECT * FROM order_details WHERE id = ?', [id]);
    if (!detail) {
      throw new Error('Le détail de commande spécifié n\'existe pas.');
    }

    await db.query('UPDATE order_details SET quantity = ? WHERE id = ?', [quantity, id]);
    console.log('Détail de commande mis à jour avec succès !');
  } catch (error) {
    console.error('Erreur lors de la mise à jour du détail de commande :', error.message);
    throw error;
  }
}

// Fonction pour supprimer un détail de commande
async function destroyOrderDetail(id) {
  try {
    const [detail] = await db.query('SELECT * FROM order_details WHERE id = ?', [id]);
    if (!detail) {
      throw new Error('Le détail de commande spécifié n\'existe pas.');
    }

    await db.query('DELETE FROM order_details WHERE id = ?', [id]);
    console.log('Détail de commande supprimé avec succès !');
  } catch (error) {
    console.error('Erreur lors de la suppression du détail de commande :', error.message);
    throw error;
  }
}

module.exports = {
  addOrderDetail,
  getOrderDetails,
  updateOrderDetail,
  destroyOrderDetail,
};
