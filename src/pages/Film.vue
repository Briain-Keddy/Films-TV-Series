<template>
  <b-col>
    <h2>Film Page</h2>
    <p>
      {{ film.title }}
    </p>
    <p>
      {{ film.description }}
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "Film",
  components: {},
  data(){
      return {
          film: {}
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData() {

        //let token = localStorage.getItem('token')

          axios
            .get(`https://imdb-movie-data.p.rapidapi.com/movie/${this.$route.params.id}`,
            {
              headers: {
                //"Authorization": `Bearer ${token}`
                //"Authorization": `Bearer 06fa868e7cce611df3b704bc35194f88`
              }
            })
            .then(response => {
                console.log(response.data)
                this.film = response.data
            })
            .catch(error => {
              console.log(error)
              this.$emit('invalid-token')
            })
      }
  }
};
</script>

<style>
</style>