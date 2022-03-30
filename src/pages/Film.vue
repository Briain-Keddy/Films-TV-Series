<template>
  <b-row>
    <b-col>
      <img :src="'https://image.tmdb.org/t/p/w200/'+ film.poster_path">

        <p class="title">
          {{ film.title }}
        </p>
          {{ film.overview }}<br>
        <p
          v-for="genre in this.film.genres"
          :key="genre.id"
        >
          Genres
          {{ genre.name }}
        </p>
    </b-col>
  </b-row>
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
          axios
            .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data)

                this.film = response.data
                //console.log(this.film.genres)

            })
            .catch(error => {
              console.log(error)
            })
      }
  }
};
</script>

<style>
.title{
  font-size: 24;
  font-weight: bold;
}
</style>