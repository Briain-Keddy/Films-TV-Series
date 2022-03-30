<template>
  <b-container>
    <b-row cols="12">
      <b-col >
        <h2>Reviews</h2>
      </b-col>
    </b-row>
    <b-row cols="4" sm="6"> 
      <b-col class="film"
        v-for="film in films"
        :key="film.id"
      >
        <router-link :to="{name:'movie_review', params: {id: film.id}}">{{ film.title }}</router-link> 
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  name: "Reviews",
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
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data.results)
                this.films = response.data.results
            })
            .catch(error => {
              console.log(error)
            })
      }
  }
};
</script>

<style>
.film{
  border-style: solid;
}
</style>