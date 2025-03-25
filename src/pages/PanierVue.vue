<template>
  <div class="panier">
    <h1>Votre Panier</h1>

    <div v-if="articles.length === 0" class="panier-vide">
      <p>Votre panier est vide.</p>
      <router-link to="/catalogue">
        <button>Parcourir le catalogue</button>
      </router-link>
    </div>

    <div v-else>
      <div class="articles">
        <div class="article" v-for="article in articles" :key="article.produit.id">
          <img class="article-image" :src="article.produit.image" :alt="article.produit.nom">
          <div class="article-details">
            <h3>{{ article.produit.nom }}</h3>
            <p class="prix-unitaire">Prix unitaire: {{ article.produit.prix }}€</p>
          </div>
          <div class="controles-quantite">
            <button class="btn-quantite" @click="diminuerQuantite(article.produit.id)">-</button>
            <span class="quantite">{{ article.quantite }}</span>
            <button class="btn-quantite" @click="augmenterQuantite(article.produit.id)">+</button>
          </div>
          <div class="prix-total">
            {{ article.produit.prix * article.quantite }}€
          </div>
          <button class="btn-supprimer" @click="supprimerProduit(article.produit.id)">
            <span>×</span>
          </button>
        </div>
      </div>

      <div class="resume">
        <div class="total">
          <span>Total:</span>
          <span class="prix-total">{{ prixTotal }}€</span>
        </div>
        <button class="btn-commander" @click="commander">Commander</button>
        <button class="btn-vider" @click="viderPanier">Vider le panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { usePanierStore } from '../stores/panier'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(usePanierStore, ['articles']),
    prixTotal() {
      return usePanierStore().prixTotal
    }
  },
  methods: {
    ...mapActions(usePanierStore, [
      'diminuerQuantite',
      'augmenterQuantite',
      'supprimerProduit',
      'viderPanier'
    ]),
    commander() {
      alert('Merci pour votre commande! A Bientot Mr BORIS')
    }
  }
}
</script>

<style>
.panier {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.panier-vide {
  text-align: center;
  padding: 40px;
}

.articles {
  margin-bottom: 20px;
}

.article {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  position: relative;
}

.article-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
}

.article-details {
  flex: 1;
}

.article-details h3 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.prix-unitaire {
  color: #666;
  font-size: 0.9rem;
}

.controles-quantite {
  display: flex;
  align-items: center;
  margin: 0 15px;
}

.btn-quantite {
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  color: #333;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
}

.quantite {
  margin: 0 10px;
  width: 30px;
  text-align: center;
}

.prix-total {
  font-weight: bold;
  font-size: 1.1rem;
  min-width: 80px;
  text-align: right;
}

.btn-supprimer {
  background-color: transparent;
  border: none;
  color: #e53935;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.resume {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.btn-commander {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 10px;
}

.btn-vider {
  width: 100%;
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #ddd;
  padding: 12px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
</style>