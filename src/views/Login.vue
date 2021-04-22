<template>
  <div class="login">
    <h1>Please login</h1>
    <input v-model="email"><input v-model="password" type="text">
    <button @click="met">Login</button>
  </div>
</template>

<script>
export default{
  name: 'Login',
  data()
  {
    return {
          email:'eve.holt@reqres.in',
      password:'cityslicka'
    }
  },
  methods:
      {
        met()
        {
          this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          })
        }
      }
}
</script>