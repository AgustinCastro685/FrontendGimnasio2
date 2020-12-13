<template>

  <NavbarAdmin/>

  <div>
      <h1>Reservas actuales</h1>
       <table class="table table-striped">
       <thead>
        <tr class="bg-dark text-white">
            <td>Codigo de clase</td>
            <td>DNI alumno</td>
          </tr>
        </thead>
        
          <tr class="bg-info text-white" v-for="(reserva,index) in reservas" :key="index">
                            <td>{{reserva.codClase}}</td>
                            <td>{{reserva.dni}}</td>            
          </tr>
        </table>
  </div>    


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
      this.getDatosFormAxios()
    },
    data () {
      return {
        url: 'http://localhost:3000/api/reservas/',
        reservas:[]
      }
    },
    methods: {
      getDatosFormAxios(){
          this.axios(this.url)
          .then(resp => {
            console.log(resp.data)
            this.reservas = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-home-admin {

  }
</style>
