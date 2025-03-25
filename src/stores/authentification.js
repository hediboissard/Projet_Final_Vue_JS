import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthentificationStore = defineStore('authentification', {
    state: () => ({
        utilisateur: null,
        estConnecte: false
    }),
    actions: {
        connexion(email, motDePasse) {
            this.utilisateur = { email, nom: 'Utilisateur' }
            this.estConnecte = true
            return true
        },
        deconnexion() {
            this.utilisateur = null
            this.estConnecte = false
        },
        inscription(email, motDePasse, nom) {
            this.utilisateur = { email, nom }
            this.estConnecte = true
            return true
        }
    }
})