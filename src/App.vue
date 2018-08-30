<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/my-header'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style scoped>
</style>
