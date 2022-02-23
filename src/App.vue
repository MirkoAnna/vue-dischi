<template>
  <div id="app">

    <MyHeader />

    <div class="main-container">

      <MyMain/> 
      
    </div>

  </div>
</template>

<script>
import MyMain from '../src/components/MyMain.vue'
import MyHeader from '../src/components/MyHeader.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyMain,
  }
}
</script>

<style lang="scss">

  @import './assets/style/general.scss';
  @import './assets/style/variables.scss';
  
</style>
