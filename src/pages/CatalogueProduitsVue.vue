<template>
  <div class="catalogue">
    <h1>Notre collection</h1>
    <div class="grille-produits">
      <CarteProduit 
        v-for="produit in produits" 
        :key="produit.id" 
        :produit="produit" 
      />
    </div>
  </div>
</template>

<script>
import CarteProduit from '../components/CarteProduit.vue'

export default {
  components: {
    CarteProduit
  },
  data() {
    return {
      produits: [
        { id: 1, nom: '🦖 Rexium Primordialis', prix: 3200, image: '/images/rexium.jpg', description: 'Fragment fossile authentique d\'une dent de Tyrannosaure, découvert dans le Montana. Ce vestige de 68 millions d\'années porte encore les stries de croissance du prédateur ultime.' },
        { id: 2, nom: '🌊 Aqua Quartzum', prix: 750, image: '/images/quartz.jpg', description: 'Quartz bleu océanique extrêmement rare, formé dans des cavités hydrothermales sous-marines il y a plus de 2 milliards d\'années. Ses reflets profonds rappellent les abysses perdues de la Terre primitive.' },
        { id: 3, nom: '🦴 Ombra Raptor', prix: 4500, image: '/images/raptor.jpg', description: 'Griffe fossilisée d\'un Velociraptor ayant parcouru les steppes de l\'Asie centrale il y a 75 millions d\'années. Parfaite pour les passionnés de paléontologie.' },
        { id: 4, nom: '🪨 Obsidienne Stellaire', prix: 290, image: '/images/obsidienne.jpg', description: 'Cette obsidienne volcanique présente des motifs naturels en forme de galaxies. Issue d\'éruptions anciennes, elle renferme l\'essence des étoiles tombées sur Terre.' },
        { id: 5, nom: '🦑 Spectre d\'Amonite', prix: 1100, image: '/images/amonite.jpg', description: 'Fossile d\'ammonite opalisée, exhibant des jeux de lumière hypnotiques. Ce bijou naturel provient d\'Australie et date du Crétacé (100 millions d\'années).' },
        { id: 6, nom: '🔥 Pyronyx Draconis', prix: 5900, image: '/images/pyronyx.jpg', description: 'Fragment de météorite ferreuse trouvée en Antarctique, fusionnée avec des dépôts de soufre volcanique. Son aspect flamboyant rappelle les légendes des dragons.' }
      ]
    }
  }
}
</script>

<style>
.grille-produits {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.grille-produits > * {
  flex: 1 1 250px;
}

</style>