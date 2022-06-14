import { createStore } from 'vuex'

export default createStore({
  state: {
    usersFromVuex: [],
    columnsFromVuex: [],
    currentUser: {}
  },
  getters: {
  },
  mutations: {
    setUsersFromVuex(state, nouvelle_valeur) {
      state.usersFromVuex = nouvelle_valeur;
    },
    setCurrentUser(state, nouvelle_valeur) {
      state.currentUser = nouvelle_valeur;
    },
    changeUser(state, idUser) {
      state.usersFromVuex[state.usersFromVuex.findIndex(user => user.id == idUser)] = state.currentUser;
    },
    deleteUserFromVuex(state, idUser) {
      for (const element of state.usersFromVuex) {
        if (element.id === idUser) {
          state.usersFromVuex.splice(state.usersFromVuex.findIndex(user => user.id === idUser), 1);
        }
      }
    },
    setColumnsFromVuex(state, nouvelle_valeur) {
      state.columnsFromVuex = nouvelle_valeur;
    }
  },
  actions: {
  },
  modules: {
  }
})
