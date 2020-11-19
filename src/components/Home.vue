<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Gym</title>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href=" https://yarnpkg.com/en/package/normalize.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Krub:400,700&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <header>
      <Navbar />
    </header>

    <div class="hero">
      <div class="contenedor-hero">
        <h1>One More Gym</h1>
        
        <p><i class="fas fa-map-marker-alt"></i>CABA, Argentina</p>

        <div>
          <router-link to="/turnos">
            <button class="btn btn-success btn-lg mt-3" href="/turnos">
              Reserva tu turno aca
            </button>
          </router-link>
        </div>
      </div>
    </div>
    
  </body>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "src-components-home",
  props: [],
  components: {
    Navbar,
  },
  mounted() {},
  data() {
    return {
      styleObject: {
        color: "red",
        fontSize: "75px",
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
:root{ /**se alamacena en la parte principal(Variable custom propiety)**/
    --primario:#ffc107;
    --secundario:#0097a7;
    --oscuro:#212121;
    --gris:#757575;

    --anchoPantalla:1200px;
}

/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
  min-height: 100%;
  font-size:62.5%; /**Renderiza a 16 px **/
}
*, *:before, *:after {
  box-sizing: inherit;
}
body{
    font-family: 'Krub',sans-serif;
    font-size:1.6rem;
    min-height: 100%;/**toma todo el gradient de fondo igual q el HTML**/
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
h1{
    margin:10; /**inspeccionar cuadrado naranja**/
    font-size: 9rem;
}

p{
    font-size: 1.8rem;
    line-height: 2.3;
}
.site-header{
    background-color: whitesmoke;
}
.site-header nav{
   /**flex-box te ayuda con el layout (  no hacer todo con flexbox simpre mezcla)**/
   max-width: var(--anchoPantalla);
   margin: 0 auto;
   padding: 2rem 0;
   margin-bottom: 2rem;
   display:flex; /** flex conteiner siempre debe aplicarse en el padre**/
   flex-direction: column;
   align-items: center;
}
@media (min-width: 768px) {
    .site-header nav{
        flex-direction: row;
    justify-content: space-between; /**distrubuye en todo el elemento**/
}
}
.site-header nav a{
    color:var(--oscuro);
    font-size: 2.2rem;
    font-weight: 505;
    text-decoration: none;
}
.site-header nav a:last-of-type{
    margin-bottom: 0;
}
@media (min-width: 768px) {
    .site-header nav a{
     margin-bottom: 0;
}
}
.hero{
    height:45rem;
    background-image: url(./images/hero.jpg);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero:after{
    content: '';
    background-color: rgba(0,0,0, .7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.contenedor-hero{
    color: white;
    position: relative;
    z-index: 1;
    text-align: center;
}
.contenedor-hero i{
    font-size: 5rem;
    color: var(--primario);
}
.boton{
    background-color: var(--secundario);
    padding: 1rem 5rem;
    display:inline-block;
    margin-top: 1rem;
    color:white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.2rem;
    border-radius: .5rem; /** Dobla las puntas del boton**/
    border: none;
}
.boton:hover{
    background-color: #0F5BFF; 
    transition: background-color 0.7s ease-in-out;
    cursor: pointer;
}
.contenedor{
    max-width: var(--anchoPantalla);
    margin-top: 3rem auto; /**el auto es un shorcut  las demas posiciones de margin, le asigna el mismo valor**/;
    background-color: white;
    padding: 3rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 5px 14px 0px rgba(0,0,0,0.93);
    -moz-box-shadow: 0px 5px 14px 0px rgba(0,0,0,0.93);
    box-shadow: 0px 5px 14px 0px rgba(0,0,0,0.93);
}

.contenedor-servicios{
    margin-top:3rem;
} 

.iconos{
    width:100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--primario);
    display: flex; /** Crea el Grid por cada item**/
    justify-content: space-evenly;
    align-items: center; 
    margin-top:3rem; 
}
.iconos{
    font-size:3rem;
}
.form{
    background-color: var(--gris);
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 3rem;

}
.form legend{
    text-align: center;
    font-size:2rem;
    font-weight: 350;
    color: var(--primario);
    margin: 3rem 0;

}
@media (min-width: 768px) {
    form{
        max-width: 800px;
        margin: 3rem auto;
}
.contenedor-campos{
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap; /**Hace que los campos del formo se alinien para abajo, en este caso cada 2 por el 50% en .campo **/
}
.campo{
    flex:0 0 calc(50% - 1rem);
}
}
.campo{
    display: flex;
    margin-bottom: 2rem;
    padding-top:.5rem;
    color:white;
}
.campo label{
    flex: 0 0 90px;
}
.campo input{
    flex:1;
    height:4rem;
}
.campo textarea{
    flex:1;
    height:6rem;
}
.w-100{
    flex: 0 0 100%;

}
.enviar{
    display:flex;
    justify-content:center;
}


</style>