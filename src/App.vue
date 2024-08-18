<script>
import headerPart from "./components/partials/header.vue"
import footerPart from "./components/partials/footer.vue"

export default{
  components:{
    headerPart,
    footerPart
  }
}
</script>

<template>
  <div class="bg-slate-100 dark:bg-slate-800">
    <headerPart/>
    <main>
      <router-view></router-view>
    </main>
    <footerPart/>
  </div>
</template>