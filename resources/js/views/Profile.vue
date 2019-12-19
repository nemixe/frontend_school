<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Profile</div>
            <div class="card-body">
              <p>
                Nama lengkap : {{ full_name }}
              </p>
              <p>
                NIS : {{ nis }}
              </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      full_name: '',
      nis: '',
    }
  },
  computed: {
    _check() {
        return this.$auth.check()
    }
  },
  created: function() {
    if(!this._check) {
      this.$router.push('/login')
    }
  },
  mounted: function() {
    const apiUrl = 'http://localhost:8001/api/'
    const self = this
    this.$http({
      method: 'get',
      url: apiUrl + 'student/profile'
    }).then( res => {
      const { full_name, nis } = res.data.data
      self.full_name = full_name
      self.nis = nis
    }).catch( err => {
      console.error(err)
    })
  }
}
</script>
