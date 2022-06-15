<template>
  <div class="add-user-form">
    <h1>Ajout d'un utilisateur</h1>
    <form>
      <label v-for="(value, index) in userFields" :key="index">
        {{ value.toUpperCase() }}
        <input v-if="value !== 'id' && (value !== 'address' && value !== 'company')" type="text" v-bind:id="value">
        <textarea v-model="userAddress" v-else-if="value === 'address'" v-bind:id="value">
        </textarea>
        <textarea v-model="userCompany" v-else-if="value === 'company'" v-bind:id="value">
        </textarea>
        <input v-else type="text" v-bind:id="value">
      </label>
      <router-link :to="{name: 'usersList'}" v-on:click="addUser">Valider</router-link>
    </form>
  </div>
</template>
<script>
import inputAsObjectMixin from '@/mixins/inputAsObjectMixin';
import sortObjectProperties from '@/mixins/sortObjectPropertiesMixin';
export default {
  name: 'addUser',
  mixins: [
    inputAsObjectMixin,
    sortObjectProperties
    ],
  data() {
    return {
      userFields: [],
      datasFromInput: [],
      datasFromTextarea: [],
      userDatas: [],
      newUser: {},
      userAddress : [],
      userCompany : []
    }
  },
  props: {
    columns: Array
  },
  methods: {
    addUser: function () {
      this.datasFromInput = document.querySelectorAll("input[type=text], textarea");
      this.userDatas = this.sortObject(this.userDatas);
      let myArray = [];
      for (const elem of this.datasFromInput) {
        myArray.push(elem.id);
      }
      myArray = myArray.reduce((acc,curr)=> (acc[curr]='',acc),{});
      for (const elem of this.datasFromInput) {
        myArray[elem.id] = elem.id !== "company" && elem.id !== "address" ? elem.value : this.inputAsObject(elem.value);
      }
      this.sortObject(this.userDatas);
      this.newUser = {...myArray};
      this.newUser.id = (this.$store.state.users[this.$store.state.users.length - 1].id) + 1;
      this.$store.commit('addUser',this.newUser);
    },
  },
  beforeMount() {
    this.userFields = Object.getOwnPropertyNames(this.$store.state.users[0]);
    this.userDatas = this.$store.state.users;
    this.userAddress.push(this.columns[0].toString().split(',').join(':\n'));
    this.userAddress[this.userAddress.length - 1] +=":";
    this.userCompany.push(this.columns[1].toString().split(',').join(':\n'));
    this.userCompany[this.userCompany.length - 1] +=":";
  }
}
</script>
<style scoped>
  .add-user-form {
    width: 90%;
    margin: 5rem auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form label {
    font-weight: bolder;
    width: fit-content;
    margin: 1rem;
  }

  form label input[type=text]{
    display: block;
    width: fit-content;
    margin: auto;
    margin-top: .5rem;
    text-align: center;
    padding: .5rem;
    border-radius: 10px;
  }

  form label:first-of-type {
    display: none;
  }

  form textarea {
    display: block;
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
