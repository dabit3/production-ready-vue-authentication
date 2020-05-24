<template>
  <div>
    <h2>Sign In</h2>
    <div class='formcontainer'>
      <input placeholder="username" v-model='form.username' class='input' />
      <input placeholder="password" type='password' v-model='form.password' class='input' />
      <button v-on:click='signIn' class='button'>Sign In</button>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'home',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async signIn() {
      const { username, password } = this.form
      await Auth.signIn(username, password)
    }
  }
}
</script>