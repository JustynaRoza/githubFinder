<template>
  <div >
    <h4>Github Finder</h4><br/>
    <p class="text-medium-emphasis my-3">Prosta aplikacja służąca do wyszukiwania użytkowników oraz wyświetlania listy ich repozytoriów</p>
    <p class="text-medium-emphasis my-3">Wykorzystane endpointy:</p>
    <a
      href="#"
      class="text-decoration-none"
    >https://api.github.com/search/users?q=</a><br/>
    <a
      href="#"
      class="text-decoration-none"
    >https://api.github.com/users/repos?sort=create</a>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'HomeView',

  components: {
  },
});
</script>
