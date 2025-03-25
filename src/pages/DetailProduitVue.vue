<template>
  <div class="detail-produit" v-if="produit">
    <div class="produit-image">
      <img :src="produit.image" :alt="produit.nom">
    </div>
    <div class="produit-info">
      <h1>{{ produit.nom }}</h1>
      <p class="prix">{{ produit.prix }}€</p>
      <p>{{ produit.description }}</p>

      <div class="actions">
        <div class="controles-quantite">
          <button class="btn-quantite" @click="diminuerQuantite">-</button>
          <span class="quantite">{{ quantite }}</span>
          <button class="btn-quantite" @click="augmenterQuantite">+</button>
        </div>
        <button @click="ajouterAuPanier">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { usePanierStore } from '../stores/panier'
import { useAuthentificationStore } from '../stores/authentification'

export default {
  data() {
    return {
      produit: null,
      produits: [
        { id: 1, nom: '🦖 Rexium Primordialis', prix: 3200, image: '../assets/Rexium_Primordialis.jpg', description: 'Fragment fossile authentique d\'une dent de Tyrannosaure, découvert dans le Montana. Ce vestige de 68 millions d\'années porte encore les stries de croissance du prédateur ultime.' },
        { id: 2, nom: '🌊 Aqua Quartzum', prix: 750, image: '../assets/Aqua_Quartzum.jpg', description: 'Quartz bleu océanique extrêmement rare, formé dans des cavités hydrothermales sous-marines il y a plus de 2 milliards d\'années. Ses reflets profonds rappellent les abysses perdues de la Terre primitive.' },
        { id: 3, nom: '🦴 Ombra Raptor', prix: 4500, image: '../assets/Ombra_Raptor.jpg', description: 'Griffe fossilisée d\'un Velociraptor ayant parcouru les steppes de l\'Asie centrale il y a 75 millions d\'années. Parfaite pour les passionnés de paléontologie.' },
        { id: 4, nom: '🪨 Obsidienne Stellaire', prix: 290, image: '../assets/Obsidienne_Stellaire.jpeg', description: 'Cette obsidienne volcanique présente des motifs naturels en forme de galaxies. Issue d\'éruptions anciennes, elle renferme l\'essence des étoiles tombées sur Terre.' },
        { id: 5, nom: '🦑 Spectre d\'Amonite', prix: 1100, image: '../assets/Spectre_Amonite.webp', description: 'Fossile d\'ammonite opalisée, exhibant des jeux de lumière hypnotiques. Ce bijou naturel provient d\'Australie et date du Crétacé (100 millions d\'années).' },
        { id: 6, nom: '🔥 Pyronyx Draconis', prix: 5900, image: '/assets/Pyronyx_Draconis.jpeg', description: 'Fragment de météorite ferreuse trouvée en Antarctique, fusionnée avec des dépôts de soufre volcanique. Son aspect flamboyant rappelle les légendes des dragons.' }
      ],
      quantite: 1
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.produit = this.produits.find(p => p.id === id)
  },
  methods: {
    diminuerQuantite() {
      if (this.quantite > 1) {
        this.quantite--
      }
    },
    augmenterQuantite() {
      this.quantite++
    },
    ajouterAuPanier() {
      const auth = useAuthentificationStore()

      if (!auth.estConnecte) {
        alert('Veuillez vous connecter pour ajouter des produits au panier')
        this.$router.push('/connexion')
        return
      }

      const panierStore = usePanierStore()
      for (let i = 0; i < this.quantite; i++) {
        panierStore.ajouterProduit(this.produit)
      }

      alert(`${this.quantite} ${this.quantite > 1 ? 'produits ajoutés' : 'produit ajouté'} au panier!`)
      this.quantite = 1
    }
  }
}
</script>

<style>
.detail-produit {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.produit-image {
  flex: 1;
  min-width: 300px;
  padding: 10px;
}

.produit-image img {
  width: 100%;
  border-radius: 5px;
}

.produit-info {
  flex: 1;
  min-width: 300px;
  padding: 10px;
}

.prix {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4CAF50;
  margin: 15px 0;
}

.actions {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.controles-quantite {
  display: flex;
  align-items: center;
  margin-right: 15px;
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

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
</style>