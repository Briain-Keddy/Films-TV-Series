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
                'x-rapidapi-host': 'https://imdb-movie-data.p.rapidapi.com/movie/',
                'x-rapidapi-key': 'c108cc3cf6msh8641be4ac6657adp140f2cjsn9146e9fb0049'
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