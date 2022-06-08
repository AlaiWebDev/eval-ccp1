<template>
  <div class="add-user-form">
    <h1>Ajout d'un utilisateur</h1>
    <form>
      <label v-for="(value, property, index) in userFields" :key="index">
        {{ value.toUpperCase() }}
        <input v-if="value !== 'id' && (value !== 'address' && value !== 'company')" type="text" v-bind:id="value">
        <textarea v-else-if="value === 'address' || value === 'company'"></textarea>
        <input v-else type="text" v-bind:id="value">
      </label>
      <router-link :to="{name: 'usersList'}" exact v-on:click="addUser">Valider</router-link>
    </form>
  </div>
</template>
<script>
export default {
  name: 'addUser',
  data() {
    return {
      userFields: [],
      datasFromInput: [],
      userDatas: [],
      newUser: {}
    }
  },
  methods: {
    addUser: function () {
      this.datasFromInput = document.querySelectorAll("input[type=text]");
      this.datasFromInput.forEach(elem => {
      this.newUser.id = (this.nextId) + 1;
        switch (elem.id) {
          case "name":
            this.newUser.name = elem.value;
            break;
          case "username":
            this.newUser.username = elem.value;
            break;
          case "email":
            this.newUser.email = elem.value;
            break;
          case "phone":
            this.newUser.phone = elem.value;
            break;
          case "website":
            this.newUser.website = elem.value;
            break;
          case "address":
            this.newUser.address = elem.value;
            break;
          case "company":
            this.newUser.company = elem.value;
            break;
          default:
        }
      });
      this.userDatas.push(this.newUser);
    }
  },
  beforeMount() {
    this.userFields = Object.getOwnPropertyNames(this.$store.state.usersFromVuex[0]);
    this.nextId = this.$store.state.usersFromVuex[this.$store.state.usersFromVuex.length - 1].id;
    this.userDatas = this.$store.state.usersFromVuex;
  }
}
</script>
<style>
  .add-user-form {
    width: 50%;
    margin: 5rem auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form label {
    font-weight: bolder;
    width: 13rem;
    margin: .3rem auto 1rem auto;
  }

  form label:first-of-type {
    display: none;
  }

  form label:nth-of-type(5), form label:nth-of-type(8) {
    width: 22rem;
  }
  
  form textarea {
    height: 120px;
    width: 20rem;
    margin: auto;
    resize: none;
  }

  a {
  font-weight: bold;
  color: #c5d0c6;
  text-decoration: none;
  padding: 1rem;
  margin: auto 1rem;
  border-radius: 10px;
  box-shadow : 4px 3px 0.1em 0.1em #c5d0c6;
  box-shadow: #c5d0c6 1.95px 1.95px 2.6px;
  background-color: #154a44;
  }

  a:hover {
  color: white;
  background-color: #4e7b7f;
  box-shadow: black 1.95px 1.95px 2.6px;
}
</style>
