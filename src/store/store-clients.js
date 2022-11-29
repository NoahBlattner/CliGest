// State : données du magasin
// import { api } from 'boot/axios'
// import { Loading } from 'quasar'

import { api } from 'boot/axios'

const state = {
  clientList: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_CLIENTS (state, payload) {
    state.clientList = payload
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  AC_GetClientApi (context) {
    api.get('/clients')
      .then(function (response) {
        context.commit('SET_CLIENTS', response.data)
      })
      .catch(function (error) {
        console.log(error)
        throw error
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  clientList: function (state) {
    return state.clientList
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}