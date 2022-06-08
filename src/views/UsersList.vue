<template>
  <div class="users-list">
    <h1>Liste des utilisateurs</h1>
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.toUpperCase() }}
          </th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersList" :key="index" v-bind:id="user.id">
            <td v-for="(oneUser, index) in user" :key="index">{{ oneUser.city ? oneUser.city.toUpperCase() : oneUser.name ? oneUser.name : oneUser }}</td>
            <td>
              <input id="showModal" type="button" @click="afficherModal(user.id, user.username)" value="Supprimer">
              <router-link :to="{ name: 'modifyUser', params: { id: user.id, currentUser: user.username } }"> 
                <span>Modifier</span>
                <Teleport to="body">
                <modal :show="showModal" :userId="activeUserId" :userName="activeUserName" @cancel="showModal = false" @confirm="supprimerLigne">
                </modal>
              </Teleport>
              </router-link>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>
<script>
import Modal from "../components/Modal";
export default {
  name: 'usersList',
  components: {
    Modal
  },
  data() {
    return {
      usersList: {},
      columns: [],
      idLigne: 0,
      showModal: false,
      activeUserId: 0,
      activeUserName: ""
    };
  },
  props: [

  ],
  methods: {
    supprimerLigne: function ({idUser}) {
      this.$store.commit("deleteUserFromVuex", idUser);
      this.showModal = false;
      
    },
    afficherModal: function (idUser, usernameUser) {
      this.activeUserId = idUser;
      this.activeUserName = usernameUser;
      this.showModal = true;
    }
  },
  beforeMount() {
    this.usersList = this.$store.state.usersFromVuex;
    this.columns = Object.keys(this.usersList[0]);
  }
}
</script>
<style>
  .users-list {
    width: 70%;
    margin: 5rem auto;
  }

  table {
    width: 100%;
    margin: auto;
    border-collapse: collapse;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  table {
    border: 3px solid #000;
  }

  th, td {
    border: 1px solid #000;
    padding: .5rem;
  }

  th {
    border-bottom: 3px solid #000;
    background-color: #4e7b7f;
    color: white;
  }

  td a {
    margin: .5rem auto;
    border-radius: 10px;
    color: #c5d0c6;
    text-decoration: none;
    padding: .3rem;
    font-weight: bold;
    cursor: pointer;
  }

  td input {
    margin: .5rem auto;
    padding: .3rem;
    border: none;
    border-radius: 10px;
    color: #c5d0c6;
    font-size: inherit;
    font-weight: bold;
    background-color: inherit;
    cursor: pointer;
  }

  td input:hover {
    background-color: red;
    color: white;
  }
  
  td a:hover {
    background-color: green;
    color: white;
  }

  tbody tr:nth-child(odd){
  background-color: #5c8c8c;
  color: #c5d0c6;
}
</style>
