import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./pages/index.vue";
import Login from "./pages/login.vue";
import Signup from "./pages/signup.vue";
import Forgotpassword from './pages/password-forgot.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/login",
    name: "Login page",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup page",
    component: Signup
  },
  {
    path: '/password_forgot',
    name: 'Forgot Password page',
    component: Forgotpassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
