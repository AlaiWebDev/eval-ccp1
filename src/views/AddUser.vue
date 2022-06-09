<template>
  <div class="add-user-form">
    <h1>Ajout d'un utilisateur</h1>
    <form>
      <label v-for="(value, property, index) in userFields" :key="index">
        {{ value.toUpperCase() }}
        <input v-if="value !== 'id' && (value !== 'address' && value !== 'company')" type="text" v-bind:id="value">
        <textarea v-model="listOfFieldsAddress" v-else-if="value === 'address'" v-bind:id="value">
        </textarea>
        <textarea v-model="listOfFieldsCompany" v-else-if="value === 'company'" v-bind:id="value">
        </textarea>
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
      datasFromTextarea: [],
      userDatas: [],
      newUser: {},
      userAddress : ["city:\n", "street:\n", "zipcode:"],
      userCompany : ["name:\n", "business:\n", "tagline:"],
    }
  },
  methods: {
    addUser: function () {
      this.datasFromInput = document.querySelectorAll("input[type=text], textarea");
      this.datasFromInput.forEach(input => {
      this.newUser.id = (this.nextId) + 1;
        switch (input.id) {
          case "name":
            this.newUser.name = input.value;
            break;
          case "username":
            this.newUser.username = input.value;
            break;
          case "email":
            this.newUser.email = input.value;
            break;
          case "address":
            this.newUser.address = input.value;
            break;
          case "phone":
            this.newUser.phone = input.value;
            break;
          case "website":
            this.newUser.website = input.value;
            break;
          case "company":
            this.newUser.company = input.value;
            break;
          default:
        }
      });
      this.userDatas.push(this.newUser);
    },
  },
  computed: {
    listOfFieldsAddress() {
        return (this.userAddress.toString().split(',').join(''));
      },
    listOfFieldsCompany() {
        return (this.userCompany.toString().split(',').join(''));
      },
  },
  beforeMount() {
    this.userFields = Object.getOwnPropertyNames(this.$store.state.usersFromVuex[0]);
    this.nextId = this.$store.state.usersFromVuex[this.$store.state.usersFromVuex.length - 1].id;
    this.userDatas = this.$store.state.usersFromVuex;
  }
}
</script>
<style scoped>
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

  form label input[type=text]{
    margin: auto;
    margin-top: .5rem;
    text-align: center;
    padding: .5rem;
    border-radius: 10px;
  }

  form label:first-of-type {
    display: none;
  }

  form label:nth-of-type(5), form label:nth-of-type(8) {
    width: 22rem;
  }
  
  form textarea {
    height: 55px;
    width: 20rem;
    border: 2px solid black;
    border-radius: 10px;
    line-height: 1rem;
    margin: auto;
    margin-top: .5rem;
    padding-left: .5rem;
    resize: none;
  }

  #company {
     height: 55px;
  }

  a {
  display: block;
  width: 8rem;
  font-weight: bold;
  color: #c5d0c6;
  text-decoration: none;
  padding: 1rem;
  margin: auto 1rem;
  border-radius: 10px;
  box-shadow: #c5d0c6 1.95px 1.95px 2.6px;
  background-color: #154a44;
  }

  a:hover {
  color: white;
  background-color: #4e7b7f;
  box-shadow: black 1.95px 1.95px 2.6px;
}
</style>
