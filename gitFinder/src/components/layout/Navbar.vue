<template>
  <ul class="sidenav">
    <li><router-link to="/" :class="currentRouteName==='home'?'active':''">O aplikacji</router-link></li>
    <li><router-link to="/users" :class="currentRouteName==='users'?'active':''">Użytkownicy</router-link></li>
  </ul>
</template>

<script>
export default {
  computed:{
    currentRouteName() {
      console.log(this.$route.name)
        return this.$route.name;
    }}
};
</script>

<style lang='scss'>
ul.sidenav {
  list-style-type: none;

  margin: 0;

  padding: 0;

  width: 25%;

  background-color: #f1f1f1;

  position: fixed;

  height: 100%;

  overflow: auto;
}

ul.sidenav li a {
  display: block;

  color: #000;

  padding: 12px 26px;

  text-decoration: none;
}

ul.sidenav li a.active {
  background-color: #555;

  color: white;
}

ul.sidenav li a:hover:not(.active) {
  background-color: rgba(85, 85, 85, 0.61);

  color: white;
}

div.content {
  margin-left: 25%;

  padding: 1px 16px;

  height: 1000px;
}

@media screen and (max-width: 900px) {
  ul.sidenav {
    width: 100%;

    height: auto;

    position: relative;
  }

  ul.sidenav li a {
    float: left;

    padding: 15px;
  }

  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  ul.sidenav li a {
    text-align: center;

    float: none;
  }
}
</style>