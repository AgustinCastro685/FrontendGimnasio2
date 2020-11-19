import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            isLoggedAdmin: sessionStorage.getItem('admin') ? sessionStorage.getItem('admin') : false,
            isLoggedClient: sessionStorage.getItem('client') ? sessionStorage.getItem('client') : false
        }
    },
    actions: {
        getStatusAdmin({commit}, status){
           
            commit('setLoggedAdmin', status);
                
        },
        getStatusClient({commit}, status){
           
            commit('setLoggedClient', status);
                
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