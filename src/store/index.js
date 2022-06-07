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
      for (let index = 0; index < state.usersFromVuex.length; index++) {
        if (state.usersFromVuex[index].id === idUser) {
          console.log("Id du tableau du Store : ", state.usersFromVuex[index].id);
          console.log("Name : ", state.usersFromVuex[index].name);
          console.log("ID envoyé à la mutation : ", idUser);
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
