<template>
  <div class="galerie">
    <h2>Produits Vedettes</h2>
    <div class="produits-liste">
      <CarteProduit
          v-for="produit in produitsVedette"
          :key="produit.id"
          :produit="produit"
      />
    </div>
  </div>
</template>

<script>
import CarteProduit from './CarteProduit.vue'

export default {
  components: {
    CarteProduit
  },
  data() {
    return {
      produitsVedette: [
        { id: 1, nom: '🦖 Rexium Primordialis', prix: 3200, image: '../assets/Rexium_Primordialis.jpg', description: 'Fragment fossile authentique d\'une dent de Tyrannosaure, découvert dans le Montana. Ce vestige de 68 millions d\'années porte encore les stries de croissance du prédateur ultime.' },
        { id: 2, nom: '🌊 Aqua Quartzum', prix: 750, image: '../assets/Aqua_Quartzum.jpg', description: 'Quartz bleu océanique extrêmement rare, formé dans des cavités hydrothermales sous-marines il y a plus de 2 milliards d\'années. Ses reflets profonds rappellent les abysses perdues de la Terre primitive.' },
        { id: 3, nom: '🦴 Ombra Raptor', prix: 4500, image: '../assets/Ombra_Raptor.jpg', description: 'Griffe fossilisée d\'un Velociraptor ayant parcouru les steppes de l\'Asie centrale il y a 75 millions d\'années. Parfaite pour les passionnés de paléontologie.' }
      ]
    }
  }
}
</script>

<style>
.galerie {
  margin: 20px 0;
}

.produits-liste {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 10px 0;
}
</style>