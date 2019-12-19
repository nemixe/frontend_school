<template>
    <div id="main">
        <header id="header">
            <ul>
              <li>
                <router-link :to="{name: 'home'}">
                    Laravel Vue SPA
                </router-link>
              </li>
            </ul>
            <ul v-if="!$auth.check()">
              <li>
                <router-link :to="{name: 'login'}">
                    login
                </router-link>
              </li>
            </ul>
            <ul v-else>
              <li>
                <router-link :to="{name: 'dashboard'}">
                    dashboard
                </router-link>
              </li>
              <li>
                <a href="#" @click.prevent="$auth.logout()">Logout</a>
              </li>
            </ul>
        </header>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        //
      }
    },
    components: {
        //
    }
  }
</script>
