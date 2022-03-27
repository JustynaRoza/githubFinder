<template>
  <div v-if="users.length != 0">
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in users" :key="i">
        <v-expansion-panel-title @click="searchRepo(item.login)">
          {{ item.login }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <img class="imgAvatar" :src="item.avatar_url" /><br />
          <div class="text-h5 font-weight-bold link mb-3">
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </div>
          <v-btn flat color="secondary" @click="seeAll()" class="ma-1">
            Zobacz repozytoria
          </v-btn>
          <Transition name="slide-fade">
            <ul v-if="expand" class="pa-5">
              <li
                v-for="(repo, ind) in repos"
                :key="ind"
                style="list-style-type: none"
              >
                <v-icon large color="blue darken-2" class="ma-2">
                  mdi-arrow-right </v-icon
                >{{ repo.name }}
                <v-btn class="ma-2" color="#d4b26a" dark>
                  {{ repo.stargazers_count }}
                  <v-icon dark right> mdi-star </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark>
                  {{ repo.watchers_count }}
                  <v-icon dark right> mdi-face </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="indigo" dark>
                  {{ typePrivacy(repo.private) }}
                  <v-icon dark right v-if="repo.private"> mdi-lock </v-icon>
                  <v-icon dark right v-else> mdi-lock-open </v-icon>
                </v-btn>
              </li>
            </ul>
          </Transition>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>{{ clearUsers }}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "users",
  props: ["users", "clearUsers"],
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
          `https://api.github.com/users/${login}/repos?sort=create`
        );
        this.repos = response.data;
      } catch (err) {
        console.log("err", err);
      }
    },
    seeAll() {
      this.expand = !this.expand;
    },
    typePrivacy(flag) {
      return flag ? "Prywatne" : "Publiczne";
    },
  },
};
</script>

<style lang="scss" scoped>
.imgAvatar {
  max-width: 120px;
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
.link {
  a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    color: rgba(0, 0, 0, 0.671);
  }
  a:hover {
    color: black;
  }
}
</style>
