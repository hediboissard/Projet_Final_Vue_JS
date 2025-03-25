<template>
  <BarreNavigation />
  <main>
    <router-view />
  </main>
  <PiedDePage />
</template>

<script>
import BarreNavigation from './components/BarreNavigation.vue'
import PiedDePage from './components/PiedDePage.vue'

export default {
  components: {
    BarreNavigation,
    PiedDePage
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
main {
  min-height: 70vh;
  padding: 20px;
}
</style>