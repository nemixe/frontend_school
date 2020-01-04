<template>
  <nav class="navbar custom navbar-expand-lg navbar-light bg-dark-orange">
    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class='{ "active" : segment === ""}'>
          <router-link  class="nav-link" :to="{name: 'home'}">
            Beranda
          </router-link>
        </li>
        <li class="nav-item" :class='{ "active" : segment === undefined}'>
          <router-link  class="nav-link" :to="{name: 'home'}">
            E-learning
          </router-link>
        </li>
        <li class="nav-item" :class='{ "active" : segment === "/ppdb"}'>
          <router-link  class="nav-link" :to="{name: 'ppdb-home'}">
            PPDB
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
	.bg-dark-orange {
		background: #eeb108;
	}
  .navbar.custom {
    margin-bottom: 3rem
  }
</style>

<script>
export default {
  computed: {
    segment: function() {
      return this.$route.matched[0].path
    }
  }
}
</script>
