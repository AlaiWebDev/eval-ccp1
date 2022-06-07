<template>
  <div class="add-user-form">
    <h1>Modification de l'utilisateur {{ currentUser }}</h1>
    <form>
      <label v-for="(value, property, index) in userDatas" :key="index">
        {{ property }}
        <input v-if="!value.city && !value.name" type="text" v-bind:value="value" :disabled="property === 'id'">
        <textarea disabled v-else v-bind:value="value.city ? cityAddress : value.name ? companyDatas : value"></textarea>
      </label>
      
      <!-- <span>{{ value }}</span>
      <span>{{ property }}</span>
      <span>{{ index }}</span> -->
    </form>
  </div>
</template>
<script>
export default {
  name: 'modifyUser',
  data() {
    return {
      userDatas: [],
      disabled: false
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
    console.log("ID : ", this.id);
    console.log(typeof this.id);
    console.log("Store : ", this.$store.state.usersFromVuex);
    this.userDatas = this.$store.state.usersFromVuex[(this.$store.state.usersFromVuex).findIndex(v => parseInt(v.id) === parseInt(this.id))];
    console.log(this.userDatas);
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
