import {createWebHistory,createRouter} from 'vue-router'

import Home from '../components/Home.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
import Usuarios from '../components/Usuarios.vue'
import Clases from '../components/Clases.vue'
import Error from '../components/Error.vue'
import Turnos from '../components/Turnos.vue'
import Login from '../components/Login.vue'
import LoginAdmin from '../components/LoginAdmin.vue'
import Registro from '../components/Registro.vue'
import RegistroExitoso from '../components/RegistroExitoso.vue'
import MensajeExitoso from '../components/MensajeExitoso.vue'
import Admin from '../components/Admin.vue'


const routes = [
    {path : '/home',name: 'Home',component: Home},
    {path : '/',name: 'Login',component: Login},
    {path : '/home-adm',name: 'HomeAdm',component: HomeAdmin},
    {path : '/login-adm',name: 'LoginAdmin',component: LoginAdmin},
    {path : '/registro',name: 'Registro',component: Registro},
    {path : '/registro-exitoso',name: 'RegistroExitoso',component: RegistroExitoso},
    {path : '/clases',name: 'Clases',component: Clases},
    {path : '/usuarios',name: 'Usuarios',component: Usuarios},
    {path : '/turnos',name: 'Turnos',component: Turnos},
    {path : '/confirmacion-turno',name: 'ConfirmacionTurno',component: MensajeExitoso},
    {path : '/admin',name: 'Admin',component: Admin},

    {path : '/:catchAll(.*)',name: 'NoFound',component: Error}
]   

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router