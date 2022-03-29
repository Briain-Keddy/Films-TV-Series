<template>
  <b-container>
    <b-row cols="12">
      <b-col >
        <h2>Home Films</h2>
      </b-col>
    </b-row>
  </b-container>
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