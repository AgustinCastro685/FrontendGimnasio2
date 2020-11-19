<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Anuncio</title>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <!-- siempre tu .css al final de ya que se pisan de arriba para abajo-->
  </head>

  <body>
    <main class="contenedor seccion contenido-centrado">
      <h2 class="fw-300 centrar-texto">Llenar formulario de contacto</h2>
      <form novalidate autocomplete="off" @submit.prevent="send()">

        <fieldset>

        <legend>Información Personal</legend>
        <div class="form-group">
          <label for="dni" >DNI</label>
          <input
            type="text"
            id="dni"
            placeholder="Ingrese su Dni"
            class="form-control"
            v-model="$v.f.dni.$model"
          />
          <div
            v-if="$v.f.dni.$error && $v.f.dni.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.dni.required.$invalid">dni no valido</div>
            <div v-else-if="$v.f.dni.minLength.$invalid">
              El dni debe tener al menos 8 caracteres
            </div>
            <div v-else-if="$v.f.dni.maxLength.$invalid">
              El dni debe tener al menos 8 caracteres
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Ingrese su Email"
            class="form-control"
            v-model="$v.f.email.$model"
          />
          <div
            v-if="$v.f.email.$error && $v.f.email.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.email.required.$invalid">Email no valido</div>
            <div v-else-if="$v.f.email.email.$invalid">
              El mail debe ser valido
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese su Nombre"
            class="form-control"
            v-model="$v.f.nombre.$model"
          />
          <div
            v-if="$v.f.nombre.$error && $v.f.nombre.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.nombre.required.$invalid">
              Este campo es requerido
            </div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">
              El nombre debe tener al menos 2 caracteres
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            placeholder="Ingrese su Apellido"
            class="form-control"
            v-model="$v.f.apellido.$model"
          />
          <div
            v-if="$v.f.apellido.$error && $v.f.apellido.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.apellido.required.$invalid">
              Este campo es requerido
            </div>
            <div v-else-if="$v.f.apellido.minLength.$invalid">
              El apellido debe tener al menos 3 caracteres
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="apellido">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su Password deseada"
            class="form-control"
            v-model="$v.f.password.$model"
          />
          <div
            v-if="$v.f.password.$error && $v.f.password.$dirty"
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.password.required.$invalid">
              Este campo es requerido
            </div>
            <div v-else-if="$v.f.password.minLength.$invalid">
              La password debe tener al menos 8 caracteres
            </div>
          </div>
        </div>

        <div class="form-group col-12">
          <label for="passwordConfirm">Confirmar contraseña</label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Ingrese la misma Password ingresada anteriormente"
            class="form-control"
            v-model="$v.f.passwordConfirm.$model"
          />

          <div
            v-if="
              ($v.f.passwordConfirm.$error && $v.f.passwordConfirm.$dirty) ||
              ($v.f.passwordConfirm.$model != $v.f.password.$model &&
                $v.f.passwordConfirm.$dirty)
            "
            class="alert alert-danger mt-1"
          >
            <div v-if="$v.f.passwordConfirm.required.$invalid">
              - Este campo es requerido.
            </div>
            <div v-if="$v.f.passwordConfirm.$model != $v.f.password.$model">
              - Las contraseñas no coinciden.
            </div>
          </div>
        </div>

        </fieldset>

        <div class="form-group">
          <input
            type="submit"
            :disabled="$v.$invalid"
            class="btn btn-success mt-4"
            value="Cargar"
          />
        </div>
      </form>
    </main>
  </body>
</template>

<script>
import { required, minLength, maxLength, email } from "@vuelidate/validators";
export default {
  name: "src-components-registro",
  props: [],
  mounted() {
    //if(this.$store.state.isLoggedClient){
    //this.$router.push('/home')
    //}
    this.resetForm();
  },
  data() {
    return {
      f: this.resetForm(),
      url: "http://localhost:3000/api/usuarios/",
      error: false,
    };
  },
  validations: {
    f: {
      dni: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8),
      },
      email: {
        required,
        email,
      },
      nombre: {
        required,
        minLength: minLength(3),
      },
      apellido: {
        required,
        minLength: minLength(3),
      },

      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(16),
      },
      passwordConfirm: {
        required,
      },
    },
  },
  methods: {
    sendDataFormAxios(data) {
      this.axios
        .post(this.url, data, { "content-type": "application/json" })
        .then((res) => {
          if (res.data) {
            this.$router.push("/registro-exitoso");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },
    send() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        let form = {
          dni: this.$v.f.dni.$model,
          email: this.$v.f.email.$model,
          nombre: this.$v.f.nombre.$model,
          apellido: this.$v.f.apellido.$model,
          password: this.$v.f.password.$model,
        };
        console.log(form);
        this.sendDataFormAxios(form);
      }
    },
    resetForm() {
      return {
        dni: "",
        email: "",
        nombre: "",
        apellido: "",
        password: "",
        passwordConfirm: "",
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">

html{
    box-sizing: border-box; /** se matiene los pxs **/
    font-size: 62.5%; /** Reset para REMs - 62.5% = 10px de 16px **/
}
*, *:before, *:after{
    box-sizing: inherit;
}

body{
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    line-height: 2;
}
/*Globales*/
img{
    max-width: 100%; /** Todos los proyectos es una normalizacion **/
}
.contenedor {
max-width: 120rem; /** = 1200px **/
margin:0 auto 0 auto; /*4 atributos en forma de reloj para centrar el contenedor el  class*/
}
/** Armado de sistema de escala de Headings (encabezados) **/
h1{
font-size: 3.8rem;
}
h2{
font-size: 3.4rem;
}
h3{
font-size: 3rem;
}
h4{
font-size: 2.6rem;
}
/** Utilidades **/
.seccion{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.fw-300{   /**framework(reutilizacion de clases) **/
  font-weight:300;
}
.centrar-texto{
    text-align: center;
}
.d-block {
    display: block!important; /** plancha el atributo, no se pisa con ningun codigo */
}
.contenido-centrado{
    max-width:800px ;
}

/** Botones **/
.boton{
 color: white;
 font-weight: 700;
 text-decoration: none;
 font-size: 1.8rem;
 padding: 1rem 3rem; /**le agrega hacia adentro (mas ancho) **/
 margin-top: 3rem;
 display: inline-block; /** solo para enlaces, otros son solo block **/
 text-align: center;
 display: block;
 flex: 0 0 100%;
 border: none;
}
@media (min-width: 768px) {
    .boton {
        display: inline-block;
        flex: 0 0 auto;
    }
}
 .boton:hover {
     cursor:pointer;
 }
 
.boton-amarillo{
background-color: #e08709;
}
.boton-verde{
background-color: #71b100;
}
/*Header*/
.site-header{
    background-color: #333333;
    padding: 1rem 0 3rem 0; 
}
.site-header.inicio{
background-position: center center;
background-position: cover;
height: 100vh;
min-height: 60rem;

}
.contenido-header{
height: 100%;
display:flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
}
@media (min-width: 768px) {
    .contenido-header{
        text-align: left;
    }
}

.contenido-header h1{
color: white;
padding-bottom: 2rem; /** espacio hacia dentro **/
max-width: 60rem;
line-height:2; /** interlineado de texto sobre 2 renglones **/
}

.barra {
   padding-top:3rem; 
}

@media (min-width: 768px) {
    .barra {
        display: flex;
        justify-content: space-between;/*distrubye los elementos horizontalmente del div*/
        align-items: center;
    }
}

/** Navegacion **/
.navegacion a {
    color: white; /** RGB HSCLA HEXA  (F) **/
    text-decoration: none;
    font-size: 2.2rem; /** = a 22px **/
    display: block;
}

@media (min-width: 768px) {
    .navegacion a {
        display: inline-block;
        font-size: 1.8rem; /** = 18px **/
        margin-right: 2rem;
    }
    .navegacion a :last-of-type {
    margin: 0;
}
}
.navegacion a:hover { /**pseudo selectores de mismo class**/
    color:#71B100;
}
/** Mobile Menu**/
.mobile-menu img{
    width:5rem;
}
@media (min-width: 768px) {
    .mobile-menu{
        display: none;
    }  
}
.navegacion:target{
    display: block;
}

.navegacion{
    display: none;
}
@media (min-width: 768px) {
    .navegacion {
        display: block;
    }
}
/** Iconos (Nosotros) **/
@media (min-width: 768px) {
    .iconos-nosotros {
    display: flex;
    justify-content: space-between;
}
}
.icono{ 
    text-align: center;
}
@media (min-width: 768px) {
    .icono{
    flex-basis: calc(33.3% - 1rem);  /** funcion que realiza calculos operaciones matematicas**/  
}
}
.icono h3 {
text-transform: uppercase;
}

/**Anuncios**/
@media (min-width: 768px) {
.contenedor-anuncios{
display: flex;
justify-content: space-between;
flex-wrap: wrap; /** clase padre  de anuncios,  pone los anuncios en forma vertical **/
}
}
.anuncio{
    /** se unifica los atributos como puede ser border --> flex: 0 0 calc (33% - 1rem); 
    flex-grow: 0;
    flex-shrink: 0; /**permite que no se encojan los anuncios y/o objetos
    flex-basis: calc (33,3% - 1rem);**/
    /** flex: 0 0 calc(33.3% - 1rem);**/
    border-width: 1px;
    border-style: solid;
    border-color: #ada9a9;
    background-color: #ece9e9;
    margin-bottom: 2rem;
    /** se puede ingresar los parametros solo en border **/
}
@media (min-width: 768px) {
    .anuncio {
        flex: 0 0 calc(33.3% - 1rem);
    }
}
.contenido-anuncio {
    padding: 2rem;
    /** aplica sobre todo el concepto del padding (cuadrado del div) te ahorras top left rifg y bottom **/   
}
.contenido-anuncio h3, 
.contenido-anuncio p {
    margin:0;
}
.precio{
 color: #71B100;
 font-weight: 700;
}
.iconos-caracteristicas{
    list-style: none;  /**personaliza los dots de la lista **/
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    flex:1;
    max-width: 500px;
}
.iconos-caracteristicas li{
    /* flex:1;  */
    display: flex;
}
.iconos-caracteristicas li img{
    margin-right: 2rem;
}
.ver-todas{
    display: flex; 
    justify-content: flex-end;
}

/** Contacto Home **/
.imagen-contacto {
    background-position: center center;
    background-size: cover;
    height: 40rem;
    display: flex;
    align-items: center;
}
.contenido-contacto{
    flex: 0 0 95%; /** no toma todo el espacio despo **/
    /**flex: 1; factor de crecimiento reasigna tamaño**/
    color: white;
}
.contenido-contacto p{
    font-size: 1.8rem;
}
/** Seccion Inferior **/
@media (min-width:768px) {

.seccion-inferior {
    display: flex;
    justify-content: space-between;
}
.seccion-inferior .blog{
    flex-basis: 60%;
}
.seccion-inferior .testimoniales{
    flex-basis: calc(40% - 2rem);
}
}

.entrada-blog{
    margin-bottom: 2rem;
}

@media (min-width: 768) {
    .entrada-blog{
         display: flex;
         justify-content: space-between;
    }
    
}
.entrada-blog:last-of-type{
    margin-bottom: 0;
}
@media (min-width: 768px) {

   .entrada-blog .imagen{
flex-basis: 40%;
}
.entrada-blog .texto-entrada{
    flex-basis: calc (60% - 3rem);   
}
}
.texto-entrada a{
    color: black;
    text-decoration: none;
}
.texto-entrada h4{
    margin: 0;
    line-height: 1.4;
}
.texto-entrada h4::after{ /**pseudo elemento porq no se pueden seleccionar ni inspeccionar **/
   content: ''; 
   display: block;
   width: 15rem;
   height: .5rem;
   background-color: #71B100;
   margin-top: 1rem;
}
.texto-entrada span{
    color: #d17f0c;
}
/**Testimoniales**/
.testimonial{
    background-color: #71B100;
    font-size: 2.4rem;
    padding: 2rem;
    color: #ffffff;
    border-radius: 2rem; /** le da como efecto a las puntas de circulo**/
}
.testimonial p{
    text-align: right;
}
.testimonial blockquote::before{ /**crea antes de lo q se ingresa (no son parte de html)**/
  content: '';
  width: 4rem;
  height: 4rem;
  position: absolute; /** posiciona se usa poco **/
  left: -2rem;   
}
.testimonial blockquote{
    position: relative;
    padding-left: 5rem;
    font-weight: 300;
}
.site-footer{
    background-color: #333333;
    margin:0;
}
.contenedor-footer{
    padding: 3rem 0;
    text-align: center;
}
@media (min-width: 768px) {
    .contenedor-footer{
        display : flex;
        justify-content: space-between;
    }
}
.site-footer nav{
    display: none;
}
@media (min-width: 768px) {
    .site-footer nav{
    display: block;
    }
}
.copyright{
    margin: 0;
    color: #ffffff;
}
/** Internas **/
/*Nosotros*/
@media (min-width: 768px) {
    .contenido-nosotros{
    display: grid; /**  FRAME GRID **/
    grid-template-columns: repeat(2,1fr);
    grid-column-end: 2rem;
}
}
.texto-nosotros blockquote{
    font-weight: 900;
    font-size: 2rem;
    margin: 0;
    padding: 1rem 0 3rem 0;
}
/*anuncio*/
.resumen-propiedad{
    display: flex;
    justify-content: space-between;
    align-items: center;

}
/*Contacto*/
.contacto p {
     font-size: 1.5rem;
     color:#4f4f4f;
     margin:2rem 0 0 0;
}
legend{
    font-size: 2.2rem;
    color: #333333;
}
label{
    font-weight:700;
    text-transform: uppercase;
    display: block; /*Toma todo el espacio disponible de la pantalla y no se juntan(enciman uno con otro) lo manda abajo*/
}
input:not([type="submit"]), 
textarea,
select { /*input[type="text"], input[type="e-mail"] los [] seleccionan el tipo de dato del input para que le pegue el css*/
    padding: 1rem;
    display: block;
    width: 100%;
    background-color: #e1e1e1;
    margin-bottom: 2rem;
    border: none;
    border-radius: 1rem;
}
input[type="radio"] {
   width:auto;
   margin: 0;
}
select{
    -webkit-appearance: none; /*PREFIJO*/
    appearance: none;
   
}
textarea {
    height: 20rem;
}
.forma-contacto{
    max-width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
