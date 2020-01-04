<template>
  <div class="container">
    <div class="d-flex bg-white container-ppdb" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-gray border-right pl-4 border-0" id="sidebar-wrapper">
        <div class="sidebar-heading"><small><b>Menu</b></small></div>
        <div class="list-group list-group-flush">
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === "ppdb-home"}'
            :to="{name: 'ppdb-home'}">
            Sekilas
          </router-link>
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === "ppdb-howto"}'
            :to="{name: 'ppdb-howto'}">
            Tata cara
          </router-link>
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === "ppdb-schedule"}'
            :to="{name: 'ppdb-schedule'}">
            Jadwal
          </router-link>
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === "ppdb-registration"}'
            :to="{name: 'ppdb-registration'}">
            Daftar
          </router-link>
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === "ppdb-selection"}'
            :to="{name: 'ppdb-selection'}">
            Seleksi
          </router-link>
          <router-link
            class="list-group-item list-group-item-action rounded-custom"
            :class='{ "active" : segment === ""}'
            :to="{name: 'ppdb-heregistration'}">
            Heregistrasi
          </router-link>
        </div>
      </div>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">

        <nav class="navbar navbar-expand-lg navbar-light bg-lightgray">
          <button class="navbar-toggler" type="button" id="menu-toggle">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="px-sm-4">awdaw</div>
        </nav>

        <div class="container-fluid">
            <router-view></router-view>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>

<style scoped>
 .bg-gray {
   background: #E9E9E9
 }
 .bg-lightgray {
   background: #F2F2F2
 }
 .container-ppdb {
   border-radius: 4px;
   overflow: hidden;
 }

 #sidebar-wrapper {
  min-height: 100vh;
  margin-left: calc(-15rem + -24px);
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

.rounded-custom {
  border-radius: 100px 0px 0px 100px;
}

.list-group .list-group-item {
  background: #E9E9E9;
  font-size: 18px;
  padding-top: 8px;
  font-weight: 500;
  padding-bottom: 8px;
}

.list-group .list-group-item.active {
  background: white;
  color: #6A6A6A;
}

#page-content-wrapper {
  min-width: 100vw;
}
#page-content-wrapper .navbar {
  justify-content: unset;
}
#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}
.navbar-expand-lg .navbar-toggler {
    display: unset !important;
}
.list-group-flush .list-group-item {
  border: 0px !important;
}
.px-sm-4 {
  padding: 0px 24px;
}
@media (min-width: 768px) {
  .px-sm-4 {
    padding: 0px !important;
  }
  .navbar-expand-lg .navbar-toggler {
      display: none !important;
  }
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
}
</style>

<script>
export default {
  computed: {
    segment: function() {
      return this.$parent.$route.name
    }
  },
  mounted: function() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
</script>
