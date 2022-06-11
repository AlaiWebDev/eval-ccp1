<template>
  <div class="change-user-form">
    <h1>Modification de l'utilisateur <span>{{ currentUser }}</span></h1>
    <form>
      <label v-for="(value, property, index) in userDatas" :key="index">
        {{ property.toUpperCase() }}
        <input v-if="!value.city && !value.name" type="text" v-bind:value="value" :disabled="property === 'id'" v-bind:id="property">
        <textarea v-else v-bind:value="value.city ? cityAddress : value.name ? companyDatas : value" v-bind:id="property"></textarea>
      </label>
      <router-link :to="{name: 'usersList'}" exact v-on:click="majUser">Valider</router-link>
    </form>
  </div>
</template>
<script>
import inputAsObjectMixin from '@/mixins/inputAsObjectMixin';
export default {
  name: 'modifyUser',
  mixins: [inputAsObjectMixin],
  data() {
    return {
      userDatas: [],
      disabled: false,
      datasFromInput: [],
      myWorkingVarCompany: "",
      myWorkingVarAddress: ""
    }
  },
  methods: {
    majUser: function () {
      this.datasFromInput = document.querySelectorAll("input[type=text], textarea");
      this.datasFromInput.forEach(elem => {
        switch (elem.id) {
          case "name":
            this.userDatas.name = elem.value;
            break;
          case "username":
            this.userDatas.username = elem.value;
            break;
          case "email":
            this.userDatas.email = elem.value;
            break;
          case "address":
            this.userDatas.address = this.inputAsObject(elem.value);
            break;
          case "phone":
            this.userDatas.phone = elem.value;
            break;
          case "website":
            this.userDatas.website = elem.value;
            break;
          case "company":
            this.userDatas.company = this.inputAsObject(elem.value);
            break;
          default:
        }
      });
    },
  },
  computed: {
    companyDatas () {
      this.myWorkingVarCompany = (JSON.stringify(this.userDatas.company)).replace(/[{}]/g, "");
      this.myWorkingVarCompany = this.myWorkingVarCompany.replace(/[""]/g, "");
      return this.myWorkingVarCompany.split(",").join("\n");
    },
    cityAddress () {
      this.myWorkingVarAddress = (JSON.stringify(this.userDatas.address)).replace(/[{}]/g, "");
      this.myWorkingVarAddress = this.myWorkingVarAddress.replace(/[""]/g, "");
      return this.myWorkingVarAddress.split(",").join("\n");
    }
  },
    props: [
      "id",
      "currentUser"
    ],
  beforeMount() {
    this.userDatas = this.$store.state.usersFromVuex[(this.$store.state.usersFromVuex).findIndex(v => parseInt(v.id) === parseInt(this.id))];
  }
}
</script>
<style scoped>
  .change-user-form {
    width: 50%;
    margin: 5rem auto;
  }

  h1 span {
    display: block;
    width: fit-content;
    margin: .2rem auto;
    border-radius: 10px;
    color: #154a44;
    background-color: #fbc522;
    padding: .5rem;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form label {
    margin: 1rem;
    width: fit-content;
    font-weight: bolder;
  }

  form input[type=text] {
    display: block;
    width: fit-content;
    margin: auto;
    margin-top: .5rem;
    text-align: center;
    padding: .5rem;
    border-radius: 10px;
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
     height: 70px;
  }

  a {
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
