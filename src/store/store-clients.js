// State : données du magasin
// import { api } from 'boot/axios'
// import { Loading } from 'quasar'

import { api } from 'boot/axios'

const state = {
  clientList: [],
  clientsLoaded: false
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  // Set the list of clients
  SET_CLIENTS (state, clientList) {
    state.clientList = structuredClone(clientList)
  },
  SET_LOADED (state, newLoadedState) {
    state.clientsLoaded = newLoadedState
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  // Action that loads the clients from an API and saves them
  AC_GetClientApi (context) {
    context.commit('SET_LOADED', false)
    api.get('https://randomuser.me/api/?results=100&nat=CH')
      .then(function (response) {
        context.commit('SET_CLIENTS', response.data.results)
      })
      .catch(function (error) {
        throw error
      })
      .finally(function () {
        context.commit('SET_LOADED', true)
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  // Get the current list of clients
  clientList: function (state) {
    return state.clientList
  },
  clientListAZ: function (state) {
    let list = structuredClone(state.clientList)
    list = list.sort(function (a, b) {
      let order = a.name.last.localeCompare(b.name.last)
      if (order === 0) {
        order = a.name.first.localeCompare(b.name.first)
      }
      return order
    })
    return list
  },
  clientsLoaded: function (state) {
    return state.clientsLoaded
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
