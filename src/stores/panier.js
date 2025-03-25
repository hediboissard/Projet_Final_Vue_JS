import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
    state: () => ({
        articles: []
    }),
    getters: {
        nombreArticles: (state) => {
            return state.articles.reduce((total, article) => total + article.quantite, 0)
        },
        prixTotal: (state) => {
            return state.articles.reduce((total, article) => {
                return total + (article.produit.prix * article.quantite)
            }, 0)
        }
    },
    actions: {
        ajouterProduit(produit) {
            const articleExistant = this.articles.find(a => a.produit.id === produit.id)

            if (articleExistant) {
                articleExistant.quantite++
            } else {
                this.articles.push({
                    produit,
                    quantite: 1
                })
            }
        },

        diminuerQuantite(produitId) {
            const index = this.articles.findIndex(a => a.produit.id === produitId)

            if (index !== -1) {
                const article = this.articles[index]

                if (article.quantite > 1) {
                    article.quantite--
                } else {
                    this.articles.splice(index, 1)
                }
            }
        },

        augmenterQuantite(produitId) {
            const article = this.articles.find(a => a.produit.id === produitId)

            if (article) {
                article.quantite++
            }
        },

        supprimerProduit(produitId) {
            const index = this.articles.findIndex(a => a.produit.id === produitId)

            if (index !== -1) {
                this.articles.splice(index, 1)
            }
        },

        viderPanier() {
            this.articles = []
        }
    },
    persist: true
})