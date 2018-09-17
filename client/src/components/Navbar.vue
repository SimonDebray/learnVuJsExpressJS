<template>
  <div>
    <b-navbar class="shadow-sm border-bottom" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item>
            NavBar
          </b-nav-item>
          <b-nav-item>
            <router-link to="/">
              <a class="p-2 text-dark">Accueil</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/reserver">
              <a class="p-2 text-dark">Réserver</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/articles">
              <a class="p-2 text-dark">Blog</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/apropos">
              <a class="p-2 text-dark">À propos</a>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
