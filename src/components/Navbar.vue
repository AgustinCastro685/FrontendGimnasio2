<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link to="/home">
        <a class="navbar-brand" href="#">Gimnasio ONE MORE</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/turnos">
              <a class="nav-link" href="#">Reservas</a>
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
