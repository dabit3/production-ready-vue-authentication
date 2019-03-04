<template>
  <div>
    <h2>{{ formState === 'signUp' ? 'Sign Up' : 'Confirm Sign Up' }}</h2>
    <div class='formcontainer' v-if="formState === 'signUp'">
      <input v-model='form.username' class='input' />
      <input type='password' v-model='form.password' class='input' />
      <input v-model='form.email' class='input' />
      <button v-on:click='signUp' class='button'>Sign Up</button>
    </div>
    <div class='formcontainer' v-if="formState === 'confirmSignUp'">
      <input v-model='form.authCode' class='input' />
      <button v-on:click='confirmSignUp' class='button'>Confirm Sign Up</button>
    </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'home',
  props: ['toggle'],
  data() {
    return {
      formState: 'signUp',
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async signUp() {
      const { username, password, email } = this.form
      await Auth.signUp({
        username, password, attributes: { email }
      })
      this.formState = 'confirmSignUp'
    },
    async confirmSignUp() {
      const { username, authCode } = this.form
      await Auth.confirmSignUp(username, authCode)
      alert('successfully signed up! Sign in to view the app.')
      this.toggle()
    }
  }
}
</script>

<style>
.formcontainer {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
}
.input {
  margin-bottom: 7px;
  height: 38px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ddd;
  font-size: 20px;
}
.button {
  height: 45px;
  border: none;
  outline: none;
  background-color: #dddddd;
  margin-top: 8px;
  cursor: pointer;
  font-size: 18px;
}
.button:hover {
  opacity: .7
}
</style>