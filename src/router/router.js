import { createRouter, createWebHistory } from "vue-router"

import homePage from "../pages/homePage.vue"
import aboutPage from "../pages/aboutPage.vue"
import projectPage from "../pages/projectPage.vue"

const routes = [
  {
    path: "/",
    name: "home page",
    component: homePage
  },
  {
    path: "/about",
    name: "about page",
    component: aboutPage
  },
  {
    path: "/project",
    name: "project page",
    component: projectPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
     return { top: 0, left: 0 }
   }
})

export {router}