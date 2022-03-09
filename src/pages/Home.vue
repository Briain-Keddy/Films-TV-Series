<template>
  <b-col>
    <h2>Film Home Page</h2>
    <p>
    <router-link :to="{name:'FilmHome'}"></router-link>
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "FilmHome",
  components: {},
  data(){
      return {
          films: []
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData() {
          axios
            .get("https://api.themoviedb.org")
            .then(response => {
                console.log(response.data)
                this.films = response.data
            })
            .catch(error => console.log(error))
      }
  }
};
</script>

<style>
</style>