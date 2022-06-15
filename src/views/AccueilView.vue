<template>
  <div class="home">
    <h1>Bienvenue sur l'interface de gestion des utilisateurs</h1>
    <img v-bind:src="imgSrc" alt="Utilisateurs">
  </div>
</template>

<script>

export default {
  name: 'AccueilView',
  data() {
    return {
      imgSrc: 'utilisateurs.jpg'
    };
  },
}
</script>
<style>
.home{
  width: 50%;
  height: 59vh;
  margin: 5rem auto;
}
img {
  margin: auto;
  margin-top: 5rem;
  border-radius: 10px;
  width: 100%;
}
</style>
