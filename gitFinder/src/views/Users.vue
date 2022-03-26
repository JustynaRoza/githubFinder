<template>
  <div >
     <v-text-field
            :label="message"
            solo
            v-model="searchField"
            @input="searchUser"
          ></v-text-field>
    <div class="text-center" v-if="showLoader"><loader/></div>
    <div v-else>
      <div v-if="error!=null">
        {{error}}
      </div>
      <div v-else>
        <list-user :users="usersList"></list-user>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../components/layout/Loader.vue'
import ListUser from '../components/ListUser.vue'
 export default{
   name:"users",
   data(){
     return{
       searchField:'',
       message:"Wyszukaj użytkowników",
       showLoader:false,
       error:null,
       usersList:[]
     }
   },
   methods:{
     searchUser(){
       this.searchField.split('').length>2? setTimeout(this.searchApi(), 1000): this.message="Wpisz co najmniej 3 znaki"
     },
     async searchApi(){
       this.showLoader=true
       try{
        this.error=null
        const res = await axios.get(`https://api.github.com/search/users?q=${this.searchField}`)
        this.message = "Wyszukaj użytkowników"
        this.showLoader = false
        this.usersList = res.data.items
       }
       catch(err){
        console.log(err)
        this.showLoader = false
        this.error="wystąpił błąd!"
       }
      

     }
   },
   components:{
     Loader,
     ListUser
   }
 }
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
