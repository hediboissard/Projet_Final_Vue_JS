<template>
  <div class="carte-produit">
    <img :src="produit.image" :alt="produit.nom">
    <h3>{{ produit.nom }}</h3>
    <p>{{ produit.prix }}€</p>
    <router-link :to="`/produit/${produit.id}`">Voir détails</router-link>
    <button @click="ajouterAuPanier">Ajouter au panier</button>
  </div>
</template>

<script>
import { usePanierStore } from '../stores/panier'

export default {
  props: {
    produit: {
      type: Object,
      required: true
    }
  },
  methods: {
    ajouterAuPanier() {
      usePanierStore().ajouterProduit(this.produit)
      alert('Produit ajouté au panier !')
    }
  }
}
</script>

<style>
.carte-produit {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  max-width: 250px;
}

.carte-produit img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.carte-produit button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>