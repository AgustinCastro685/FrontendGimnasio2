<template>
<Navbar/>
    <div>
       <table class="table table-striped">
       <thead>
        <tr class="bg-dark text-white">
            <td>ID</td>
            <td>Clase</td>
            <td>Dia</td>
            <td>Horario</td>
            <td>Anotarse</td>
          </tr>
        </thead>
        <tbody v-if="clases.length > 0">
          <tr class="bg-info text-white" v-for="(clase,index) in clases" :key="index">
                            <td>{{clase.codClase}}</td>
                            <td>{{clase.nombre_Clase}}</td>
                            <td>{{clase.dia}}</td>
                            <td>{{clase.hora}}</td>
                            <router-link to="/confirmacion-turno">
                            <button 
                            class="btn btn-success m-3">Anotarse!
                            </button> 
                            </router-link>
          </tr>
        </tbody>
        <tbody v-else-if="clases.length == 0">
          <tr>
            <td colspan="5">
              <div class="alert alert-danger">No hay clases cargadas</div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>  

</template>

<script>
import Navbar from './Navbar.vue'
  export default  {
    name: 'src-components-turnos',
    props: [],
    components:{
      Navbar
    },
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        url: 'http://localhost:3000/api/clases/',
        clases:[]
      }
    },
    methods: {
      getDatosFormAxios(){
          
          this.axios(this.url)
          .then(resp => {
            console.log(resp.data)
            this.clases = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-turnos {

  }
</style>
