<template>
  <header>
    <img alt="Logo ID Formation" src="@/assets/logo-Id-Formation.png">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/usersList">Liste des utilisateurs</router-link>
      <router-link to="/addUser">Ajouter utilisateur</router-link>
    </nav>
  </header>
  <router-view/>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
    };
  },
  beforeCreate() {
    fetch(process.env.VUE_APP_API_URL)
  .then((response) => response.json())
  .then((json) => {
    this.usersList = json;
    this.$store.commit("setUsersFromVuex", this.usersList);
    });
  }
}
</script>
<style>
body {
    background-color: #f4f4f4;
    
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  user-select: none;
}

h1 {
  width: 50vw;
  margin: 1rem auto;
  margin-bottom: 2rem;
  padding: 1rem;
  color: #c5d0c6;
  background-color: #154a44;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #5c8c9c;
  /* border: 1px solid red; */
}

header img {
  margin: 1rem;
  border-radius: 10px;
  box-shadow : 4px 3px 0.1em 0.1em #154a44;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

nav a {
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

nav a:hover {
  color: white;
  background-color: #4e7b7f;
  box-shadow: black 1.95px 1.95px 2.6px;
}

nav a.router-link-exact-active {
  color: #fbc522;
}
</style>
