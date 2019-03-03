<template>
  <div class="auth">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'app'
}
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
</style>
