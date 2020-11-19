<template>
<NavbarAdmin/>
        <div >    
        <table class="table table-striped">
       <thead>
        <tr class="bg-dark text-white">
            <td>DNI</td>
            <td>Email</td>
            <td>Nombre</td>
            <td>Apellido</td>
          </tr>
        </thead>
        <tbody v-if="usuarios.length > 0">
          <tr class="bg-info text-white" v-for="(usuario,index) in usuarios" :key="index">
              <td>{{usuario.dni}}</td>
              <td>{{usuario.email}}</td>
              <td>{{usuario.nombre}}</td>
              <td>{{usuario.apellido}}</td>
                            
          </tr>
        </tbody>
        <tbody v-else-if="usuarios.length == 0">
          <tr>
            <td colspan="5">
              <div class="alert alert-danger">No hay usuarios cargados</div>
            </td>
          </tr>
        </tbody>

      </table>
                    <!-- Botones bajo la tabla -->
                    <!-- Boton Agregar  -->
                    <button class="btn btn-success m-3" @click="agregarUsuario = !agregarUsuario">
                      {{ agregarUsuario ? "No Agregar" : "Agregar" }}
                    </button>
                    <div v-if="agregarUsuario" class="alert alert-warning">
                      <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
                                  <div class="form-group">
                                    <label for="dni">DNI</label>
                                    <input 
                                      type="number" 
                                      id="dni" 
                                      class="form-control"
                                      v-model.number="$v.f.dni.$model"
                                      >
                                      <div v-if="$v.f.dni.$error && $v.f.dni.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.dni.required.$invalid">Campo requerido</div>
                                      </div>
                                  </div>


                                  <div class="form-group">
                                    <label for="email">Email</label>
                                    <input 
                                      type="text" 
                                      id="email" 
                                      class="form-control"
                                      v-model="$v.f.email.$model"
                                      >
                                      <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.email.email.$invalid">- Debe ser un email válido</div>
                                        
                                          
                                          
                                      </div>
                                  </div>

                                  
                                  <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input 
                                      type="text" 
                                      id="nombre" 
                                      class="form-control"
                                      v-model="$v.f.nombre.$model"
                                      >
                                      <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.nombre.minLength.$invalid">El nombre debe tener al menos 2 caracteres</div>
                                      </div>
                                  </div>


                                <div class="form-group">
                                    <label for="apellido">Apellido</label>
                                    <input 
                                      type="text" 
                                      id="apellido" 
                                      class="form-control"
                                      v-model="$v.f.apellido.$model"
                                      >
                                      <div v-if="$v.f.apellido.$error && $v.f.apellido.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.apellido.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.apellido.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                        
                                      </div>
                                    
                                  </div>

                                  <div class="form-group">
                                    <label for="apellido">Password</label>
                                    <input 
                                      type="password" 
                                      id="password" 
                                      class="form-control"
                                      v-model="$v.f.password.$model"
                                      >
                                      <div v-if="$v.f.password.$error && $v.f.password.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.password.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.password.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                        
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
                     <button class="btn btn-warning m-3" @click="cambiarUsuario = !cambiarUsuario">
                      {{ cambiarUsuario ? "No Cambiar" : "Cambiar" }}
                    </button>
                    <div v-if="cambiarUsuario" class="alert alert-warning">
                      <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
                                  <div class="form-group">
                                    <label for="dni">DNI</label>
                                    <input 
                                      type="number" 
                                      id="dni" 
                                      class="form-control"
                                      v-model.number="$v.f.dni.$model"
                                      >
                                      <div v-if="$v.f.dni.$error && $v.f.dni.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.dni.required.$invalid">Campo requerido</div>
                                      </div>
                                  </div>


                                  <div class="form-group">
                                    <label for="email">Email</label>
                                    <input 
                                      type="text" 
                                      id="email" 
                                      class="form-control"
                                      v-model="$v.f.email.$model"
                                      >
                                      <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.email.email.$invalid">- Debe ser un email válido</div>
                                        
                                          
                                          
                                      </div>
                                  </div>

                                  
                                  <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input 
                                      type="text" 
                                      id="nombre" 
                                      class="form-control"
                                      v-model="$v.f.nombre.$model"
                                      >
                                      <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.nombre.minLength.$invalid">El nombre debe tener al menos 2 caracteres</div>
                                      </div>
                                  </div>


                                <div class="form-group">
                                    <label for="apellido">Apellido</label>
                                    <input 
                                      type="text" 
                                      id="apellido" 
                                      class="form-control"
                                      v-model="$v.f.apellido.$model"
                                      >
                                      <div v-if="$v.f.apellido.$error && $v.f.apellido.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.apellido.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.apellido.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                        
                                      </div>
                                    
                                  </div>

                                  <div class="form-group">
                                    <label for="apellido">Password</label>
                                    <input 
                                      type="password" 
                                      id="password" 
                                      class="form-control"
                                      v-model="$v.f.password.$model"
                                      >
                                      <div v-if="$v.f.password.$error && $v.f.password.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.password.required.$invalid">Este campo es requerido</div>
                                        <div v-else-if="$v.f.password.minLength.$invalid">El nombre debe tener al menos 3 caracteres</div>
                                        
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
                    <button class="btn btn-danger m-3" @click="eliminarUsuario = !eliminarUsuario">
                      {{ eliminarUsuario ? "No Eliminar" : "Eliminar" }}
                    </button>
                    <div v-if="eliminarUsuario" class="alert alert-warning">
                    <input type="number" v-model="dni" />
                    <button class="btn btn-danger m-3" @click="deleteUsuarioAxios(dni)">Eliminar</button>
                    </div>
                </div>


</template>

<script>
  import NavbarAdmin from './NavbarAdmin.vue'
  import {required ,minLength, maxLength,email} from '@vuelidate/validators'
  export default  {
    name: 'src-components-usuarios',
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
        agregarUsuario: false,
        cambiarUsuario: false,
        eliminarUsuario: false,
        url: 'http://localhost:3000/api/usuarios/',
        
        usuarios:[]
      }
    },
    validations : {
      f: {
        dni:{
          required,
          minLength: minLength(8),
          maxLength: maxLength(8)
        },
        email:{
          email,
          required
       },
        nombre:{
          required, 
          minLength: minLength(2)
        },
        apellido:{
          required,
          minLength: minLength(2)
        },
         password:{
          required,
          minLength: minLength(2)
        }
      },
    }, 
    methods: {
      getDatosFormAxios(){
          this.axios(this.url)
          .then(resp => {
            console.log(resp.data)
            this.usuarios = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      },
      sendDatosFormAxios(data) {
      this.axios
        .post(this.url, data, { "content-type": "application/json" })
        .then(resp => console.log(resp.data))
        .catch((error) => {
          console.log(error);
          this.error = true;
        })
      },
      deleteUsuarioAxios(dni) {
        console.log('delete',dni)
        this.axios.delete(this.url+dni)
          .then(res => {
            let usuario = res.data
            console.log(usuario)
            let offset = this.usuarios.findIndex(usuario => usuario.dni == dni)
            this.usuarios.splice(offset,1)
            this.getDatosFormAxios()
          })
          .catch(error => console.log('HTTP DELETE ERROR', error))
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
          dni:'',
          email:'',
          nombre:'',
          apellido:'',
          password:''
        }
      },
    },
    
      
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
</style>