<script></script>

<template>
  <section class="max-w-5xl m-auto px-5 pt-24 pb-10">
    <div class="flex flex-col sm:flex-row items-center">
      <div class="sm:flex-1">
        <img class="w-4/6 sm:w-3/4 m-auto object-fit object-center" src="../assets/hero.png" alt="hero.png">
      </div>
      <div class="sm:flex-1">
        <div>
          <h1 class="text-2xl tracking-widest font-semibold mb-2">Hello World!</h1>
          <p class=" tracking-wider leading-relaxed mb-5">
            I`m <span class="text-primary dark:text-primary-dark font-semibold tracking-widest">Peri Nurjaman</span>, A student that extremely interested in Website Development, obsessed with carrying out various experiments to create a system that is close to perfection.
          </p>
          <div class="flex gap-3">
            <router-link class="link-btn" to="/about">About</router-link>
            <router-link class="link-btn" to="/project">Projects</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>