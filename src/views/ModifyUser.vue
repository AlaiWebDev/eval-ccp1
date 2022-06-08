<template>
  <div class="change-user-form">
    <h1>Modification de l'utilisateur <span>{{ currentUser }}</span></h1>
    <form>
      <label v-for="(value, property, index) in userDatas" :key="index">
        {{ property.toUpperCase() }}
        <input v-if="!value.city && !value.name" type="text" v-bind:value="value" :disabled="property === 'id'" v-bind:id="property">
        <textarea disabled v-else v-bind:value="value.city ? cityAddress : value.name ? companyDatas : value"></textarea>
      </label>
      <router-link :to="{name: 'usersList'}" exact v-on:click="majUser">Valider</router-link>
    </form>
  </div>
</template>
<script>
export default {
  name: 'modifyUser',
  data() {
    return {
      userDatas: [],
      disabled: false,
      datasFromInput: []
    }
  },
  methods: {
    majUser: function () {
      this.datasFromInput = document.querySelectorAll("input[type=text]");
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
          case "phone":
            this.userDatas.phone = elem.value;
            break;
          case "website":
            this.userDatas.website = elem.value;
            break;
          default:
        }
      });
    }
  },
  computed: {
    companyDatas: function () {
      return `Name : ${this.userDatas.company.name},\nBusiness : ${this.userDatas.company.bs},\nTagline : ${this.userDatas.company.catchPhrase}`;
    },
    cityAddress: function () {
      return `City : ${this.userDatas.address.city}, \nGeo : \n     Lat : ${this.userDatas.address.geo.lat} \n     Lng : ${this.userDatas.address.geo.lng},\nStreet : ${this.userDatas.address.street},\nSuite : ${this.userDatas.address.suite},\nZipcode : ${this.userDatas.address.zipcode}`;
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
    height: 160px;
    width: 20rem;
    margin: auto;
    padding: .5rem;
    resize: none;
    margin-top: .5rem;
    border-radius: 10px;
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
