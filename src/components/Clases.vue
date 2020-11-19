<template>
<NavbarAdmin/>
        <div >    
                

       <table class="table table-striped">
       <thead>
        <tr class="bg-dark text-white">
            <td>Codigo de Clase</td>
            <td>Nombre de la Clase</td>
            <td>Dia</td>
            <td>Horario</td>
          </tr>
        </thead>
        <tbody v-if="clases.length > 0">
          <tr class="bg-info text-white" v-for="(clase,index) in clases" :key="index">
                            <td>{{clase.codClase}}</td>
                            <td>{{clase.nombre_Clase}}</td>
                            <td>{{clase.dia}}</td>
                            <td>{{clase.hora}}</td>
                            
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
                    <!-- Botones bajo la tabla -->
                    <!-- Boton Agregar  -->
                    <button class="btn btn-success m-3" @click="agregarClase = !agregarClase">
                      {{ agregarClase ? "No Agregar" : "Agregar" }}
                    </button>
                    <div v-if="agregarClase" class="alert alert-warning">
                      <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
                                  <div class="form-group">
                                    <label for="codClase">Codigo Clase</label>
                                    <input 
                                      type="number" 
                                      id="codClase" 
                                      class="form-control"
                                      v-model.number="$v.f.codClase.$model"
                                      >
                                      <div v-if="$v.f.codClase.$error && $v.f.codClase.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.codClase.required.$invalid">Campo requerido</div>
                                      </div>
                                  </div>


                                  <div class="form-group">
                                    <label for="nombre_Clase">Nombre Clase</label>
                                    <input 
                                      type="text" 
                                      id="nombre_Clase" 
                                      class="form-control"
                                      v-model="$v.f.nombre_Clase.$model"
                                      >
                                      <div v-if="$v.f.nombre_Clase.$error && $v.f.nombre_Clase.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.nombre_Clase.required.$invalid">Nombre no valido</div>
                                        <div v-else-if="$v.f.nombre_Clase.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                          
                                          
                                      </div>
                                  </div>

                                  
                                  <div class="form-group">
                                    <label for="dia">Dia</label>
                                    <input 
                                      type="text" 
                                      id="dia" 
                                      class="form-control"
                                      v-model="$v.f.dia.$model"
                                      >
                                      <div v-if="$v.f.dia.$error && $v.f.dia.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.dia.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.dia.minLength.$invalid">El dia debe tener al menos 3 caracteres</div>
                                      </div>
                                  </div>


                                <div class="form-group">
                                    <label for="horario">Horario</label>
                                    <input 
                                      type="text" 
                                      id="horario" 
                                      class="form-control"
                                      v-model="$v.f.hora.$model"
                                      >
                                      <div v-if="$v.f.hora.$error && $v.f.hora.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.hora.required.$invalid">Este campo es requerido</div>
                                        
                                      </div>
                                    
                                  </div>


                                  <div class="form-group">
                                    <input 
                                      type="submit"
                                      :disabled="$v.$invalid"
                                      class="btn btn-success mt-4"
                                      value="Cargar"
                                    >
                                    
                                  </div>

                                </form>
  </div>
                          
                  
                    
                    <!-- Boton  Cambiar -->
                     <button class="btn btn-warning m-3" @click="cambiarClase = !cambiarClase">
                      {{ cambiarClase ? "No Cambiar" : "Cambiar" }}
                    </button>

                    <div v-if="cambiarClase" class="alert alert-warning">
                      <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
                                  <div class="form-group">
                                    <label for="codClase">Codigo Clase</label>
                                    <input 
                                      type="number" 
                                      id="codClase" 
                                      class="form-control"
                                      v-model.number="$v.f.codClase.$model"
                                      >
                                      <div v-if="$v.f.codClase.$error && $v.f.codClase.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.codClase.required.$invalid">Campo requerido</div>
                                      </div>
                                  </div>


                                  <div class="form-group">
                                    <label for="nombre_Clase">Nombre Clase</label>
                                    <input 
                                      type="text" 
                                      id="nombre_Clase" 
                                      class="form-control"
                                      v-model="$v.f.nombre_Clase.$model"
                                      >
                                      <div v-if="$v.f.nombre_Clase.$error && $v.f.nombre_Clase.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.nombre_Clase.required.$invalid">Nombre no valido</div>
                                        <div v-else-if="$v.f.nombre_Clase.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                          
                                          
                                      </div>
                                  </div>

                                  
                                  <div class="form-group">
                                    <label for="dia">Dia</label>
                                    <input 
                                      type="text" 
                                      id="dia" 
                                      class="form-control"
                                      v-model="$v.f.dia.$model"
                                      >
                                      <div v-if="$v.f.dia.$error && $v.f.dia.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.dia.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.dia.minLength.$invalid">El dia debe tener al menos 3 caracteres</div>
                                      </div>
                                  </div>


                                <div class="form-group">
                                    <label for="horario">Horario</label>
                                    <input 
                                      type="text" 
                                      id="horario" 
                                      class="form-control"
                                      v-model="$v.f.hora.$model"
                                      >
                                      <div v-if="$v.f.hora.$error && $v.f.hora.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.hora.required.$invalid">Este campo es requerido</div>
                                        
                                      </div>
                                    
                                  </div>


                                  <div class="form-group">
                                    <input 
                                      type="submit"
                                      :disabled="$v.$invalid"
                                      class="btn btn-success mt-4"
                                      value="Cargar"
                                    >
                                    
                                  </div>

                                </form>
                          </div>
                    
                    <!-- Boton   Borrar-->
                    <button class="btn btn-danger m-3" @click="eliminarClase = !eliminarClase">
                      {{ eliminarClase ? "No Eliminar" : "Eliminar" }}
                    </button>
                    <div v-if="eliminarClase" class="alert alert-warning">
                    <input type="number" v-model="codClase" />
                    <button class="btn btn-danger m-3" @click="deleteClaseAxios(codClase)">Eliminar</button>
                    </div>
                </div>


</template>

<script>
  import {required ,minLength} from '@vuelidate/validators'
  import NavbarAdmin from './NavbarAdmin.vue'
  export default  {
    name: 'src-components-clases',
    props: [],
    components:{
      NavbarAdmin
    },
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        f: this.resetForm(),
        agregarClase: false,
        cambiarClase: false,
        eliminarClase: false,
        url: 'http://localhost:3000/api/clases/',
        clases:[]
      }
    },
    validations : {
      f: {
        codClase:{
          required,
        },
        nombre_Clase:{
          required,
          minLength: minLength(3)
          },
        dia:{
          required,      
          },
        hora:{
          required,
        },
      },
    }, 
    methods: {
      getDatosFormAxios(){
          this.axios(this.url)
          .then(resp => {
            console.log(resp.data)
            this.clases = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      },
      deleteClaseAxios(codClase) {
        console.log('delete',codClase)
        this.axios.delete(this.url+codClase)
          .then(res => {
            let clase = res.data
            console.log(clase)
            let offset = this.clases.findIndex(clase => clase.codClase == codClase)
            this.clases.splice(offset,1)
            this.getDatosFormAxios()
          })
          .catch(error => console.log('HTTP DELETE ERROR', error))
      },
      sendDatosFormAxios(datos){
        this.axios.post(this.url,datos,{'content-type':'application/json'})
        .then(resp => console.log(resp.data))
        .catch(error => console.log('HTTP POST ERROR' , error))
      },
          
     
      enviar(){
        this.$v.$touch()
        if(!this.$v.$invalid){
            let form = this.f
          console.log(form)
          this.sendDatosFormAxios(form)
          this.f=this.resetForm()
          this.$v.$reset()
          this.getDatosFormAxios()  
        }
        
      },
      resetForm(){
        return{
          codClase:'',
          nombre_Clase:'',
          dia:'',
          hora:''
        }
      },
    },
    
      
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-clases {

  }
</style>