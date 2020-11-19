<template>
<Navbar/>
  <section class="src-components-error">
    <div>
    <h1>La pagina que solicitaste no esta disponible</h1>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar.vue'
  export default  {
    name: 'src-components-error',
    props: [],
    components:{
      Navbar
    },
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
  .src-components-error {

  }
</style>
