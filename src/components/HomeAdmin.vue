<template>

  <NavbarAdmin/>

</template>

<script>
import NavbarAdmin from './NavbarAdmin.vue'
  export default  {
    name: 'src-components-home-admin',
    props: [],
    components:{
      NavbarAdmin
    },
    mounted () {
      if (!this.$store.state.isLoggedAdmin){
            this.$router.push('/login-adm')
        }
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
  .src-components-home-admin {

  }
</style>
