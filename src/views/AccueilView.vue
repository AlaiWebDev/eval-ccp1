<template>
  <div class="home">
    <AccueilText msg="Bienvenue sur l'interface de gestion des utilisateurs"/>
  </div>
</template>

<script>
import AccueilText from '@/components/AccueilText.vue'

export default {
  name: 'AccueilView',
  components: {
    AccueilText
  }
}
</script>
<style>
.home{
  width: 50%;
  margin: 5rem auto;
}
</style>
