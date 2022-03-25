<template>
  <b-col>
    <h2>Register</h2>
    <div v-if="!loggedIn">
      Name: <input type="name" v-model="form.name" /><br><br>
      Email: <input type="email" v-model="form.email" /><br><br>
      Password: <input type="password" v-model="form.password" /><br><br>
      <button @click="register()">Submit</button>
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'

export default {
  name: "Register",
  components: {},
  props:{
      loggedIn: Boolean
  },
  data(){
      return {
          form: {
              name: "",
              email: "",
              password: ""
          }
      }
  },
  methods: {
      register() {
          axios
            .post('http://localhost:3000/register', {
                full_name: this.form.name,
                email: this.form.email,
                password: this.form.password
            })
            .then(response => {
                console.log(response.data)
                this.$emit ('register', response.data.token)
            })
            .catch(error => console.log(error))
      }
  }
};
</script>

<style>
</style>