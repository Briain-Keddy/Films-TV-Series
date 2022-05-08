<template>
  <b-row>
    <b-col>
      <p class="review">
        Reviews
      </p>
      <p class="content"
          v-for="review in this.results"
          :key="review.id"
        >
          <span class="author">{{ review.author}}</span><br>
          <span v-if="!readMore">{{ review.content.slice(0, 200) }}</span>
          <a class="" v-if="!readMore" @click="activateReadMore" href="#">Read More</a>
          <span v-if="readMore" v-html="review.content"></span>
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
        results: [],
        readMore: false
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
      },
      activateReadMore(){
        this.readMore = true;
      }
  }
};
</script>

<style>
.author{
  font-size: 20px;
}
.content{
  border-bottom: solid;
  font-size: 16px;
  padding-bottom: 20px;
}
.review, .author{
  font-weight: bold;
}
.review{
  font-size: 24px;
}
</style>