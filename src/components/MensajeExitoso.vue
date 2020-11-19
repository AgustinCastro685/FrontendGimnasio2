<template>

  <section class="src-components-mensaje-exitoso">
    <h1>Te anotaste exitosamente a la clase</h1>
                    <router-link to="/turnos">
                    <button 
                    class="btn btn-warning m-3">Volver a la lista de clases!
                    </button> 
                    </router-link>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-mensaje-exitoso',
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
  .src-components-mensaje-exitoso {

  }
</style>
