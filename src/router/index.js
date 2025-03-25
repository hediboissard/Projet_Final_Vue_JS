import { createRouter, createWebHistory } from 'vue-router'
import AccueilVue from '../pages/AccueilVue.vue'
import CatalogueVue from '../pages/CatalogueVue.vue'
import DetailProduitVue from '../pages/DetailProduitVue.vue'
import PanierVue from '../pages/PanierVue.vue'
import ConnexionVue from '../pages/ConnexionVue.vue'
import InscriptionVue from '../pages/InscriptionVue.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/connexion' },
        { path: '/accueil', name: 'accueil', component: AccueilVue },
        { path: '/catalogue', name: 'catalogue', component: CatalogueVue },
        { path: '/produit/:id', name: 'detailProduit', component: DetailProduitVue },
        { path: '/panier', name: 'panier', component: PanierVue },
        { path: '/connexion', name: 'connexion', component: ConnexionVue },
        { path: '/inscription', name: 'inscription', component: InscriptionVue }
    ]
})

export default router