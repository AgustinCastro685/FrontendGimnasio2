<template>
    <h1>Registrate en nuestro Gimnasio</h1>
    <form novalidate autocomplete="off" @submit.prevent="send()">
      <!-- El id creo que no va a ir asi , lo vamos a tener que autogenerar
                                  <div class="form-group">
                                    <label for="id">ID</label>
                                    <input 
                                      type="number" 
                                      id="id" 
                                      class="form-control"
                                      v-model.number="$v.f._id.$model"
                                      >
                                      <div v-if="$v.f._id.$error && $v.f._id.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f._id.required.$invalid">Campo requerido</div>
                                      </div>
                                  </div>
-->

                                  <div class="form-group">
                                    <label for="dni">DNI</label>
                                    <input 
                                      type="text" 
                                      id="dni" 
                                      class="form-control"
                                      v-model="$v.f.dni.$model"
                                      >
                                      <div v-if="$v.f.dni.$error && $v.f.dni.$dirty" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.dni.required.$invalid">dni no valido</div>
                                        <div v-else-if="$v.f.dni.minLength.$invalid">El dni debe tener al menos 8 caracteres</div>
                                        <div v-else-if="$v.f.dni.maxLength.$invalid">El dni debe tener al menos 8 caracteres</div>
                                          
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
                                        <div v-if="$v.f.email.required.$invalid">Email no valido</div>
                                        <div v-else-if="$v.f.email.email.$invalid">El mail debe ser valido</div>
                                          
                                          
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
                                        <div v-else-if="$v.f.apellido.minLength.$invalid">El apellido debe tener al menos 3 caracteres</div>
                                        
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
                                        <div v-else-if="$v.f.password.minLength.$invalid">La password debe tener al menos 8 caracteres</div>
                                        
                                      </div>
                                    
                                  </div>

                                     <div class="form-group col-12">
                                      <label for="passwordConfirm">Confirmar contraseña</label>
                                      <input 
                                        type="password"
                                        id="passwordConfirm"
                                        class="form-control"
                                        v-model="$v.f.passwordConfirm.$model"
                                      >
                                      
                                      <div v-if="($v.f.passwordConfirm.$error && $v.f.passwordConfirm.$dirty) || ($v.f.passwordConfirm.$model != $v.f.password.$model && $v.f.passwordConfirm.$dirty)" class="alert alert-danger mt-1">
                                        <div v-if="$v.f.passwordConfirm.required.$invalid">- Este campo es requerido.</div>
                                        <div v-if="$v.f.passwordConfirm.$model != $v.f.password.$model">- Las contraseñas no coinciden.</div>
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
 
</template>

<script>
  import { required, minLength, maxLength, email } from '@vuelidate/validators'
  export default  {
    name: 'src-components-registro',
    props: [],
    mounted () {
      //if(this.$store.state.isLoggedClient){
        //this.$router.push('/home')
      //}
      this.resetForm()
    },
    data () {
      return {
        f: this.resetForm(),
        url:'http://localhost:3000/api/usuarios/',
        error: false
      }
    },
    validations: {
      f: {
        dni: { 
          required,
          minLength: minLength(8),
          maxLength: maxLength(8)
        },
        email: { 
          required,
          email
        },
        nombre: { 
          required,
          minLength: minLength(3)
        },
        apellido: { 
          required,
          minLength: minLength(3)
        },
        
        password: { 
          required,
          minLength: minLength(8),
          maxLength: maxLength(16)
        },
        passwordConfirm: {
          required
        },
      },  
    },
    methods: {
      sendDataFormAxios(data) {  
            this.axios.post(this.url, data, {'content-type': 'application/json'})
            .then(res => {
              if (res.data) {
                this.$router.push('/registro-exitoso')
              }
            })
            .catch(error => {
              console.log(error)
              this.error = true             
            })
        },
        send() {
            this.$v.$touch()
            
            if(!this.$v.$invalid) {
              let form = { 
                dni:this.$v.f.dni.$model,
                email: this.$v.f.email.$model,
                nombre: this.$v.f.nombre.$model,
                apellido: this.$v.f.apellido.$model,
                password: this.$v.f.password.$model
              }
              console.log(form)
              this.sendDataFormAxios(form)              
            }
        },
        resetForm() {
            return {
              dni:'',
              email: '',
              nombre: '',
              apellido: '',
              password : '',
              passwordConfirm: ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-registro {

  }
</style>
