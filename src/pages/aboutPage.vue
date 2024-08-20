<template>
  <div class="wrapper">
    <div class="flex flex-col lg:flex-row lg:justify-between mb-5">
      <div class="flex-1">
        <h1 class="text-4xl font-semibold tracking-wider mb-4">About Me</h1>
      </div>
      <div class="flex-[2]">
        <p class="tracking-widest leading-relaxed mb-2">
          A student that extremely interested in Website Development, obsessed with carrying out various experiments to create a system that is close to perfection.
        </p>
      </div>
    </div>
    <div>
      <div class="w-full h-80 overflow-hidden rounded relative group duration-500">
        <img src="../assets/about-hero.jpg" alt="about-hero.jpg" class="w-full h-full object-cover object-center">
        
        <article class="absolute z-10 w-full h-full top-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black cursor-pointer duration-500">
          <h3 class="hidden group-hover:block text-xl md:text-3xl font-semibold tracking-widest bottom-5 left-5 absolute">Lomba Keterampilan Siswa Nasional 2022</h3>
        </article>
      </div>
    </div>
  </div>
</template>