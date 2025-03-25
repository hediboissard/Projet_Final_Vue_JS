<template>
  <div class="connexion">
    <h1>Connexion à TerraLégenda</h1>
    <form @submit.prevent="connexion">
      <div class="champ">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="champ">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="motDePasse" required>
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore de compte? <router-link to="/inscription">S'inscrire</router-link></p>
  </div>
</template>

<script>
import { useAuthentificationStore } from '../stores/authentification'

export default {
  data() {
    return {
      email: '',
      motDePasse: ''
    }
  },
  methods: {
    connexion() {
      const auth = useAuthentificationStore()
      if (auth.connexion(this.email, this.motDePasse)) {
        this.$router.push('/accueil')
      }
    }
  }
}
</script>

<style>
.connexion {
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