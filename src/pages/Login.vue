<template>
  <b-col>
    <h2>Login</h2>
    <div v-if="!loggedIn">
      Email: <input type="email" v-model="form.email" />
      Password: <input type="password" v-model="form.password" />
      <button @click="login()">Submit</button>
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  components: {},
  props:{
      loggedIn: Boolean
  },
  data(){
      return {
          form: {
              email: "",
              password: ""
          }
      }
  },
  methods: {
      login() {
          axios
            .post('https://localhost:3000', {
                email: this.form.email,
                password: this.form.password
            })
            .then(response => {
                console.log(response.data)
                this.$emit ('login', response.data.token)
            })
            .catch(error => console.log(error))
      }
  }
};
</script>

<style>
</style>