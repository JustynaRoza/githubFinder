<template>
  <div v-if="users.length != 0">
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in users" :key="i">
        <v-expansion-panel-title @click="searchRepo(item.login)">
          {{ item.login }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="text-h5 font-weight-bold">
            adres: <a :href="item.url" target="_blank">{{ item.url }}</a>
          </div>
          <img class="imgAvatar" :src="item.avatar_url" /><br />
          <v-btn flat color="secondary" @click="seeAll()" class="ma-5">
            Zobacz repozytoria
          </v-btn>
          <Transition name="slide-fade">
            <ul v-if="expand" class="pa-5">
              <li v-for="(repo, ind) in repos" :key="ind"  style="list-style-type: none;">
                <v-icon large color="blue darken-2" class="ma-2"> mdi-arrow-right </v-icon
                >{{ repo.name }}
              </li>
            </ul>
          </Transition>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>Brak użytkowników pasujących do wyszukiwanej frazy!</div>
</template>

<script>
import axios from "axios";
export default {
  name: "users",
  props: ["users"],
  data() {
    return {
      repos: [],
      expand: false,
    };
  },
  methods: {
    async searchRepo(login) {
      this.expand = false;
      try {
        const response = await axios.get(
          `https://api.github.com/users/${login}/repos?per_page=5&sort=create`
        );
        this.repos = response.data;
      } catch (err) {
        console.log("err", err);
      }
    },
    seeAll() {
      this.expand = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.imgAvatar {
  max-width: 100px;
  float: right;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
