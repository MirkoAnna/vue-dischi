<template>
  <div id="app">


    <MyHeader @selectedGenreEvt="getSelectedGenres" :genresList="genresList"/>

    <div class="main-container">

      <MyMain @genresComplete="getGenres" :selectedGenres="selectedGenres" /> 

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
    MyMain
  },
  data() {
    return {
      genresList: [],
      selectedGenres: ''
    }
  },
  methods: {
    getGenres(genresList) {
      this.genresList = genresList;
    },
    getSelectedGenres(selectedGenreEvt) {
      this.selectedGenres = selectedGenreEvt;
    }
  }
};
</script>

<style lang="scss">

  @import './assets/style/general.scss';
  @import './assets/style/variables.scss';
  
</style>