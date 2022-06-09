<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src="imgSrc" alt="Utilisateurs">
  </div>
</template>

<script>
export default {
  name: 'AccueilText',
  data() {
    return {
      imgSrc: 'utilisateurs.jpg'
    };
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin: auto;
  margin-top: 5rem;
  border-radius: 10px;
  width: 100%;
}
</style>
