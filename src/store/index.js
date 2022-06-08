import { createStore } from 'vuex'

export default createStore({
  state: {
    usersFromVuex: {}
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
    }
  },
  actions: {
  },
  modules: {
  }
})
