<template>
  <b-row>
    <b-col>
      <img :src="'https://image.tmdb.org/t/p/w200/'+ tv.poster_path">

        <p class="title">
          {{ tv.name }}
        </p>
          {{ tv.overview }}
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: "Tv",
  components: {},
  data(){
      return {
          tv: {}
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData() {
          axios
            .get(`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data)

                this.tv = response.data
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