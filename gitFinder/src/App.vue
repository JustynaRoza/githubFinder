<template>
 <v-app>
      <navbar/>
     <v-main class="mainApp pa-5">
      <router-view/>
    </v-main>
  </v-app>  
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Navbar
  }
}
</script>
<style scoped>
/* @media screen and (max-width: 900px) { */
  .mainApp{
    margin-left: 25%;
  }
  /* } */
@media screen and (max-width: 400px) {
  .mainApp{
    margin-left: 0%;
    }

}

</style>
