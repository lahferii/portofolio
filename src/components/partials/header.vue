<script>
export default{
  mounted(){
    document.querySelector(".burger").onclick = function(){
      document.querySelector(".menu").classList.toggle("hidden")
      document.querySelector(".menu").classList.toggle("sm:flex")
      document.querySelector(".menu").classList.toggle("flex")
    }
    
    let checkDarkMode = localStorage.getItem("isDark")
    if(checkDarkMode){
      document.body.classList.toggle("dark")
    }

    const navbar = document.querySelector("header")
    document.onscroll = () => {
      let scrolled = window.scrollY
      if(scrolled >= 10){
        navbar.classList.add("nav-scrolled")
      } else {
        navbar.classList.remove("nav-scrolled")
      }
    }
  },
  methods:{
    dark(){
      let target = document.body.classList
      let checkIsTrue = localStorage.getItem("isDark")

      if(checkIsTrue){
        localStorage.removeItem("isDark")
        target.toggle("dark")
        console.info("terang")
      } else {
        target.toggle("dark")
        localStorage.setItem("isDark", "True")
        console.info("gelap")
      }
    }
  },
}
</script>
<template>
  <header class="nav-bar">
    <div>
      <h3 class="md:text-xl tracking-wider font-semibold">
        Peri Nurjaman
      </h3>
    </div>
    
    <!-- burger -->
    <button class="burger group">
      <div class="w-full h-2 bg-gray-700 dark:bg-gray-100"></div>
      <div class="w-full h-2 bg-gray-700 dark:bg-gray-100"></div>
      <div class="w-full h-2 bg-gray-700 dark:bg-gray-100"></div>
    </button>

    <nav class="hidden sm:flex menu">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/project">Projects</router-link>
      <button v-on:click="dark()" class="far fa-lightbulb text-gray-500 dark:text-emerald-700 text-xl hover:bg-slate-800 dark:hover:bg-slate-100 hover:text-gray-100 w-8 h-8 rounded-full"></button>
    </nav>

  </header>
</template>