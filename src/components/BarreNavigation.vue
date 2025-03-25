<template>
  <nav class="barre-navigation">
    <div class="logo">TerraLégenda</div>
    <ul class="menu">
      <li><router-link to="/accueil">Accueil</router-link></li>
      <li><router-link to="/catalogue">Catalogue</router-link></li>
      <li v-if="estConnecte">
        <router-link to="/panier" class="panier-link">
          Panier
          <span v-if="nombreArticles > 0" class="badge">{{ nombreArticles }}</span>
        </router-link>
      </li>
      <li v-if="!estConnecte"><router-link to="/connexion">Connexion</router-link></li>
      <li v-if="!estConnecte"><router-link to="/inscription">Inscription</router-link></li>
      <li v-if="estConnecte" class="utilisateur">
        <button @click="deconnecter">Déconnexion</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useAuthentificationStore } from '../stores/authentification'
import { usePanierStore } from '../stores/panier'
import { computed } from 'vue'

export default {
  setup() {
    const panierStore = usePanierStore()
    return {
      nombreArticles: computed(() => panierStore.nombreArticles)
    }
  },
  computed: {
    estConnecte() {
      return useAuthentificationStore().estConnecte
    },
    nomUtilisateur() {
      return useAuthentificationStore().utilisateur?.nom || 'Utilisateur'
    }
  },
  methods: {
    deconnecter() {
      useAuthentificationStore().deconnexion()
      this.$router.push('/connexion')
    }
  }
}
</script>

<style>
.barre-navigation {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.menu {
  display: flex;
  list-style: none;
  gap: 15px;
  align-items: center;
}

.menu a {
  color: white;
  text-decoration: none;
}

.utilisateur {
  display: flex;
  align-items: center;
  gap: 10px;
}

.utilisateur button {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.panier-link {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #e53935;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>