<template>
  <div class="add-user-form">
    <h1>Modification de l'utilisateur {{ currentUser }}</h1>
    <form>
      <label v-for="(value, property, index) in userDatas" :key="index">
        {{ property }}
        <input v-if="!value.city && !value.name" type="text" v-bind:value="value" :disabled="property === 'id'" v-bind:id="property">
        <textarea disabled v-else v-bind:value="value.city ? cityAddress : value.name ? companyDatas : value"></textarea>
      </label>
      <input type="submit" value="Valider" @click.prevent="majUser">
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
      return `City : ${this.userDatas.address.city}, \nGeo : \nLat : ${this.userDatas.address.geo.lat} \nLng : ${this.userDatas.address.geo.lng},\nStreet : ${this.userDatas.address.street},\nSuite : ${this.userDatas.address.suite},\nZipcode : ${this.userDatas.address.zipcode}`;
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
<style>
  .add-user-form {
    width: 50%;
    margin: 5rem auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form label {
    margin: 1rem;
    font-weight: bolder;
  }
  form textarea {
    height: 120px;
    width: 300px;
    resize: none;
  }
</style>
