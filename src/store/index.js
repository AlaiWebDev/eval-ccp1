import { createStore } from 'vuex'

export default createStore({
  state: {
    usersFromVuex: {},
    columnsFromVuex: []
  },
  getters: {
  },
  mutations: {
    setUsersFromVuex(state, nouvelle_valeur) {
      state.usersFromVuex = nouvelle_valeur;
    },
    deleteUserFromVuex(state,idUser) {
      for (const element of state.usersFromVuex) {
        if (element.id === idUser) {
          state.usersFromVuex.splice(state.usersFromVuex.findIndex(v => v.id === idUser), 1);
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
