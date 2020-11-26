import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            isLoggedAdmin: sessionStorage.getItem('admin') ? sessionStorage.getItem('admin') : false,
            isLoggedClient: sessionStorage.getItem('client') ? sessionStorage.getItem('client') : false,
            alumnos:[]
        }
    },
    actions: {
        getStatusAdmin({commit}, status){
            commit('setLoggedAdmin', status);  
        },
        getStatusClient({commit}, status){
            commit('setLoggedClient', status);   
        },
        putAlumnoAxios({commit},{id,alumno}) {
            this.axios.put(this.url+id, alumno, {'content-type':'application/json'})
            .then(res => {
              let alumno = res.data
              console.log(alumno)
              commit('modificarAlumno',{id,alumno})
            })
            .catch(error => console.log('HTTP PUT ERROR', error))
        }
    },
    mutations: {
        setLoggedAdmin(state, status){
            state.isLoggedAdmin = status;
        },
        setLoggedClient(state,status){
            state.isLoggedClient = status;
        }
    }
})