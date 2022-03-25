<template>
  <b-col>
    <h2>Film Home</h2>
    <p>
    </p>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "home",
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