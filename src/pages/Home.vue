<template>
  <b-col>
    <h2>Film Home Page</h2>

    <p
        v-for="film in films"
        :key="films._id"
    >
    <router-link :to="{name:'festivals_show', params: { id: film._id}}">{{ film.title }}</router-link>
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
            .get("")
            .then(response => {
                console.log(response.data)
                this.festivals = response.data
            })
            .catch(error => console.log(error))
      }
  }
};
</script>

<style>
</style>