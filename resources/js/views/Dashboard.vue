<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
                <router-link :to="{name: 'exams'}">
                  Ujian / Ulangan
                </router-link>
                <router-link :to="{name: 'materials'}">
                  Materi
                </router-link>
                <router-link :to="{name: 'profile'}">
                  Profile
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    _check() {
        return this.$auth.check();
    }
  },
  created: function() {
    if(!this._check) {
      this.$router.push('/login')
    }
  },
}
</script>
