import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './auth/signup/signup';
import { Login } from './auth/login/login';
import { Training } from './training/training';

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
