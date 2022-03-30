<template>
  <b-row>
    <b-col>
      <p class="review">
        Reviews
      </p>
      <p
          v-for="review in this.results"
          :key="review.id"
        >
          {{ review.author}}<br>
          {{ review.content }}
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
        results: []
      }
  },
  mounted(){
      this.getData()
  },
  methods: {
      getData() {
          axios
            .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/reviews?api_key=06fa868e7cce611df3b704bc35194f88`,
            {
              headers: {
              }
            })
            .then(response => {
                console.log(response.data)
                this.results = response.data.results

            })
            .catch(error => {
              console.log(error)
            })
      }
  }
};
</script>

<style>
.review{
  font-size: 24px;
  font-weight: bold;
}
</style>