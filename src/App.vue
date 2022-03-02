<template>
  <div>
    <MyNavBar :loggedIn="loggedIn" v-on:logout="setLoggedOut"  />
    <b-container>
      <br />
      <b-row>
        <router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" v-on:invalid-token="setLoggedOut" />
      </b-row>
      <MyFooter />
    </b-container>
  </div>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue"
import MyFooter from "@/components/MyFooter.vue"

export default {
  name: 'App',
  components: {
    MyNavBar,
    MyFooter
  }
}
</script>

<style>
</style>