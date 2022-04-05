<template>
  <b-container>
    <b-row cols="12">
      <b-col >
        <h2>Home Films</h2>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col cols="9">
        <h4>Upcoming Films</h4>
        <a href="http://localhost:8080/upcoming">Upcoming Films</a>
      </b-col>
      <b-col cols="3">
        <h4>Most Viewed Films</h4>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <h4>Movie Review</h4>
        <a href="http://localhost:8080/reviews">Reviews</a>
      </b-col>
      <b-col>
        <h4>List of TV Series</h4>
        <a href="http://localhost:8080/list_of_tv_show">List of TV Series</a>
      </b-col>
      <b-col>
        <h4>Find Cinema</h4>
        <a href="#">Find Cinema</a>
      </b-col>
      <b-col>
        <h4>Upcoming TV Series</h4>
        <a href="#">Upcoming TV Series</a>
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