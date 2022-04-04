<template>
  <b-container>
    <b-row cols="12">
      <b-col >
        <h2>List of TV Series</h2>
      </b-col>
    </b-row>
    <b-row cols="4" sm="6"> 
      <b-col class="tv"
        v-for="TvShow in TvSeries"
        :key="TvShow.id"
      >
        <img :src="'https://image.tmdb.org/t/p/w200/'+ TvShow.poster_path"><br>
        <router-link :to="{name:'tv_show', params: {id: TvShow.id}}">{{ TvShow.name }}</router-link> 
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  name: "TvSeries",
  components: {},
  data(){
      return {
          TvSeries: []
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData() {

          axios
            .get(`https://api.themoviedb.org/3/tv/popular?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data.results)
                this.TvSeries = response.data.results

            })
            .catch(error => {
              console.log(error)
            })
      }
  }
};
</script>

<style>
.tv{
  border-style: solid;
}
</style>