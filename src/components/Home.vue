<template>

  <Navbar/>
  
  <img src="./images/home.jpg"  width="1200" height="480">
  
   <div >
     <router-link to="/turnos">
      <button class="btn btn-success mt-1" href="/turnos">
      ¡¡¡Reserva tu turno aca!!!
      </button>
     </router-link>
   </div>
   

    
  

</template>

<script>
import Navbar from './Navbar.vue'
  export default  {
    name: 'src-components-home',
    props: [],
    components:{
      Navbar
    },
    mounted () {
        
    },
    data () {
      
      return {
       styleObject: {
        color: 'red',
        fontSize: '75px'
        }

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-home {
   

  }
</style>
