<template>
  <b-container>
    <h2>Find Cinema</h2>
    <h2>List of Cinema Companies</h2>
    <b-row class="cinema" cols="12">
      <b-col>
          <a href="https://imccinemas.ie/">IMC Cinema</a>
      </b-col>
      <b-col>
          <a href="https://omniplex.ie/cinema/arklow">Omniplex Cinema</a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "find_cinema",
  components: {},
}
</script>

<style>
.cinema{
  border-style: solid;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>