<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link to="/home-adm">
        <a class="navbar-brand" href="#">Gimnasio ONE MORE panel admin</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/clases">
              <a class="nav-link" href="#">Clases</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usuarios">
              <a class="nav-link" href="#">Usuarios</a>
              </router-link>
            </li>
            
          </ul>
        </div>
      </nav>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
</style>
