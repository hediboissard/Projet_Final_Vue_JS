<template>
  <div class="inscription">
    <h1>Inscription</h1>
    <form @submit.prevent="inscription">
      <div class="champ">
        <label for="nom">Nom</label>
        <input type="text" id="nom" v-model="nom" required>
      </div>
      <div class="champ">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="champ">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="motDePasse" required>
      </div>
      <div class="champ">
        <label for="confirm-password">Confirmer le mot de passe</label>
        <input type="password" id="confirm-password" v-model="confirmMotDePasse" required>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    <p>Déjà un compte? <router-link to="/connexion">Se connecter</router-link></p>
  </div>
</template>

<script>
import { useAuthentificationStore } from '../stores/authentification'

export default {
  data() {
    return {
      nom: '',
      email: '',
      motDePasse: '',
      confirmMotDePasse: ''
    }
  },
  methods: {
    inscription() {
      if (this.motDePasse !== this.confirmMotDePasse) {
        alert('Les mots de passe ne correspondent pas')
        return
      }

      const auth = useAuthentificationStore()
      if (auth.inscription(this.email, this.motDePasse, this.nom)) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.inscription {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.champ {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>