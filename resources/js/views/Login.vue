<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Login</div>
            <div class="card-body">
                <input type="text" v-model="nis">
                <input type="password" v-model="password">
                <input type="button" @click="login" value="login">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        nis: '',
        password: '',
        has_error: false
    }
  },
  computed: {
    _check() {
        return this.$auth.check();
    }
  },
  created: function() {
    if(this._check) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    login: function() {
      var redirect = this.$auth.redirect()
      var self = this
      this.$auth.login({
        method: 'POST',
        data: {nis: self.nis, password: self.password},
        rememberMe: true,
        redirect: {name: 'dashboard'},
        success (res) {
          console.log(res)
        },
        error (err) {
          console.log(err)
        }
      });
      if(this.$auth.ready()) {
        console.log(this.$auth.user())
      }
    }
  }
}
</script>
