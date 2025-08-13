import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Signup } from './components/auth/signup/signup';
import { Login } from './components/auth/login/login';
import { Training } from './components/training/training';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'signup',
        component: Signup
    },    
    {
        path: 'login',
        component: Login
    },
    {
        path: 'training',
        component: Training
    }
];
