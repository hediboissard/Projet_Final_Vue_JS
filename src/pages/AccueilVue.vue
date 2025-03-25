<template>
  <div class="accueil">
    <div class="banner">
      <h1>TerraLégenda</h1>
      <p>Découvrez les trésors cachés de la Terre</p>
    </div>

    <div class="barre-recherche">
      <input
          type="text"
          v-model="recherche"
          placeholder="Rechercher un produit..."
          @input="filtrerProduits"
      >
    </div>

    <div v-if="produitsFiltres.length === 0" class="aucun-resultat">
      Aucun produit ne correspond à votre recherche.
    </div>

    <div class="featured-products">
      <h2>Nos produits phares</h2>
      <div class="liste-produits">
        <div class="carte-produit" v-for="produit in produitsFiltres" :key="produit.id">
          <img :src="produit.image" :alt="produit.nom">
          <h3>{{ produit.nom }}</h3>
          <p class="prix">{{ produit.prix }}€</p>
          <router-link :to="`/produit/${produit.id}`">
            <button>Voir détails</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recherche: '',
      produits: [
        { id: 1, nom: '🦖 Rexium Primordialis', prix: 3200, image: '/images/rexium.jpg', description: 'Fragment fossile authentique d\'une dent de Tyrannosaure, découvert dans le Montana. Ce vestige de 68 millions d\'années porte encore les stries de croissance du prédateur ultime.' },
        { id: 2, nom: '🌊 Aqua Quartzum', prix: 750, image: '/images/quartz.jpg', description: 'Quartz bleu océanique extrêmement rare, formé dans des cavités hydrothermales sous-marines il y a plus de 2 milliards d\'années. Ses reflets profonds rappellent les abysses perdues de la Terre primitive.' },
        { id: 3, nom: '🦴 Ombra Raptor', prix: 4500, image: '/images/raptor.jpg', description: 'Griffe fossilisée d\'un Velociraptor ayant parcouru les steppes de l\'Asie centrale il y a 75 millions d\'années. Parfaite pour les passionnés de paléontologie.' },
        { id: 4, nom: '🪨 Obsidienne Stellaire', prix: 290, image: '/images/obsidienne.jpg', description: 'Cette obsidienne volcanique présente des motifs naturels en forme de galaxies. Issue d\'éruptions anciennes, elle renferme l\'essence des étoiles tombées sur Terre.' },
        { id: 5, nom: '🦑 Spectre d\'Amonite', prix: 1100, image: '/images/amonite.jpg', description: 'Fossile d\'ammonite opalisée, exhibant des jeux de lumière hypnotiques. Ce bijou naturel provient d\'Australie et date du Crétacé (100 millions d\'années).' },
        { id: 6, nom: '🔥 Pyronyx Draconis', prix: 5900, image: '/images/pyronyx.jpg', description: 'Fragment de météorite ferreuse trouvée en Antarctique, fusionnée avec des dépôts de soufre volcanique. Son aspect flamboyant rappelle les légendes des dragons.' }
      ],
      produitsFiltres: []
    }
  },
  created() {
    this.produitsFiltres = [...this.produits]
  },
  methods: {
    filtrerProduits() {
      if (!this.recherche) {
        this.produitsFiltres = [...this.produits]
        return
      }

      const rechercheLower = this.recherche.toLowerCase()

      this.produitsFiltres = this.produits.filter(produit => {
        return produit.nom.toLowerCase().includes(rechercheLower) ||
            produit.description.toLowerCase().includes(rechercheLower)
      })
    }
  }
}
</script>

<style>
.accueil {
  padding: 20px;
}

.banner {
  background-color: #2c3e50;
  color: white;
  padding: 50px 20px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 5px;
}

.banner h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.barre-recherche {
  margin-bottom: 20px;
}

.barre-recherche input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.featured-products h2 {
  margin-bottom: 20px;
}

.liste-produits {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.liste-produits > * {
  flex: 1 1 250px;
}


.carte-produit {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carte-produit img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.carte-produit h3 {
  margin: 10px 0;
  font-size: 1.2rem;
}

.prix {
  font-weight: bold;
  color: #4CAF50;
  font-size: 1.2rem;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.aucun-resultat {
  text-align: center;
  padding: 20px;
  font-style: italic;
  color: #666;
}
</style>