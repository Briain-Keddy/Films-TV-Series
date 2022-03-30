<template>
  <b-row>
    <b-col>
      <p class="title">
        {{ film.title }}
      </p>
          
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: "Review",
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
            .get(`https://api.themoviedb.org/3/movie/review/${this.$route.params.id}?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data)
                this.film = response.data

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