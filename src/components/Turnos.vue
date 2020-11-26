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
                            
                            <button 
                            class="btn btn-success m-3" @click = "anotarse(clase.codClase)">Anotarse! 
                            </button> 
                            
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
      anotarse(id){
        console.log("anotarse",id)
        let usuarioConectado = JSON.parse(sessionStorage.getItem('client'))
        console.log(usuarioConectado)
        // hay que leer de vuex
        //this.$store.state
        this.putUsuarioEnClase(id,usuarioConectado)
        
      },
      getDatosFormAxios(){
          this.axios(this.url)
          .then(resp => {
            console.log(resp.data)
            this.clases = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      },
      putUsuarioEnClase(id,usuarioConectado) {
            this.axios.put(this.url+id, usuarioConectado, {'content-type':'application/json'})
            .then(resp => {
              console.log(resp.data)
              
            })
            .catch(error => console.log('HTTP PUT ERROR', error))
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
