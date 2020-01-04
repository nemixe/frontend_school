<template>
    <div id="main">
        <Nav />
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Nav from '../components/Nav'
  export default {
    data() {
      return {
        //
      }
    },
    components: {
        Nav
    }
  }
</script>
