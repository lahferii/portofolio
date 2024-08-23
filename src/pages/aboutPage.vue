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

    <div class="mb-10">
      <div class="w-full h-80 overflow-hidden rounded relative group">
        <img src="../assets/about.png" alt="about.jpg" class="w-full h-full object-cover object-center">
        
        <article class="absolute z-10 w-full h-full top-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black cursor-pointer">
          <h3 class="text-gray-100 hidden group-hover:block text-xl md:text-3xl font-semibold tracking-widest bottom-5 left-5 absolute">
            Lomba Keterampilan Siswa Nasional 2022
          </h3>
        </article>
      </div>
    </div>

    <article>
      <p class="tracking-wider mb-5 leading-relaxed">
        Hello, my name is Peri Nurjaman, a student with strong passion in the field of <span class="font-semibold">Web Development and Programming stuff</span>. I started my journey by learning <span class="font-semibold">HTML</span> and <span class="font-semibold">CSS</span> through videos on YouTube in 2021, keep committed until I succeed mastering <span class="font-semibold">Laravel, Vue, Tailwind,</span> and <span class="font-semibold">MySQL</span> in the end of 2022.
      </p>
      <p class="tracking-wider mb-5 leading-relaxed">
        After being rejected as an informatics student, my dream of becoming a website developer didn't just collapse. I decided not to give up and started learning <span class="font-semibold">NodeJS</span> through a <span class="font-semibold">Programmer Zaman Now</span> Courses recently. Even though I haven't finished it yet because of time constraints, I really enjoy everything I've gone through so far!
      </p>
      <p class="tracking-wider mb-5 leading-relaxed">
        My interest in <span class="font-semibold">EEPIS News And Network Team (ENT)</span> didn`t come with no reason. With all the basic knowledge that I have, I believe that my abilities and skills will improve with ENT. I hope that I can implement the abilities I have and not just create dummy projects like I have done before.
      </p>
      <p class="tracking-wider mb-5 leading-relaxed">
        To be honest, I'm not a great programmer. I am a programmer with a ton of <s>failure</s> experiences. However, I would love to share my journey so far!
      </p>
    </article>

    <div class="mb-5">
      <h1 class="text-4xl font-semibold tracking-wider mb-4">Track Record</h1>
    </div>

    <section class="mb-5">
      <div class="record-box">
        <p class="text-xl tracking-wider font-semibold mb-2">
          <span class="text-primary dark:text-primary-dark font-bold">15th</span> Place In Lomba Keterampilan Siswa Nasional 2022
        </p>
        <span class="text-sm tracking-widest">Pusat Prestasi Nasional</span>
      </div>
      <div class="record-box">
        <p class="text-xl tracking-wider font-semibold mb-2">
          <span class="text-primary dark:text-primary-dark font-bold">11th</span> Place In Seleksi Daerah For Asean Skill Competition 2022 (National Scale)
        </p>
        <span class="text-sm tracking-widest">Kementerian Ketenagakerjaan Republik Indonesia</span>
      </div>
      <div class="record-box">
        <p class="text-xl tracking-wider font-semibold mb-2">
          <span class="text-primary dark:text-primary-dark font-bold">2nd</span> Place In Seleksi Daerah For Asean Skill Competition 2022 (Regional Scale)
        </p>
        <span class="text-sm tracking-widest">Kementerian Ketenagakerjaan Republik Indonesia</span>
      </div>
      <div class="record-box">
        <p class="text-xl tracking-wider font-semibold mb-2 mb-2">
          <span class="text-primary dark:text-primary-dark font-bold">1st</span> Place In Online Web Design Competition 2022 (OWDC)
        </p>
        <span class="text-sm tracking-widest">Universitas Teknologi Digital, Yogyakarta</span>
      </div>
      <div class="record-box">
        <p class="text-xl tracking-wider font-semibold mb-2 mb-2">
          <span class="text-primary dark:text-primary-dark font-bold">1st</span> Place In BYTECOMP 2021 - Web Design
        </p>
        <span class="text-sm tracking-widest">Universitas Lambung Mangkurat, Banjarbaru</span>
      </div>
    </section>

    <article>
      <p class="tracking-wider mb-5 leading-relaxed">
        The fact that I'm not a great programmer always makes me excited to dive deeper into this industry!
      </p>
    </article>

  </div>
</template>