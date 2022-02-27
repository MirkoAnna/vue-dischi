<template>
    <div class="container">
        <form action="">
            <select v-model="selectedGenre" @change="$emit('selectedGenreEvt', selectedGenre)">
                <option value="">Seleziona un genere</option>
                <option v-for="(genre, index) in genresList" :value="genre" :key="index">{{genre}}</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
    props:  {
                'genresList': Array
            },
    data() {
        return {
            selectedGenre: ''
        }
    }
};

</script>

<style lang="scss" scoped>

    @import '../assets/style/variables.scss';

    .container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 7vh;
        background-color: $secondary;
    }

</style>