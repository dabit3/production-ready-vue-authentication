<template>
  <div class="auth">
    <sign-up v-if="formState === 'signUp'"></sign-up>
    <sign-in v-if="formState === 'signIn'"></sign-in>
    <p v-on:click="toggle" class="toggle">{{ formState === 'signUp' ?
      'Already sign up? Sign In' : 'Need an account? Sign Up'
      }}</p>
  </div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default {
  name: 'app',
  beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
     console.log('info: ', info)
    })
  },
  data() {
    return {
      formState: 'signUp'
    }
  },
  methods: {
    toggle() {
      this.formState === 'signUp' ? this.formState = 'signIn' : this.formState = 'signUp'
    }
  },
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
.toggle {
  cursor: pointer;
  font-size: 18px;
}
</style>
