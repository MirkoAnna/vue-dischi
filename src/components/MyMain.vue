<template>
    <main>
        <div class="container">
            <MyDisc class="disc" v-for="(disc, index) in filteredDiscs"
            :key="index"
            :disc="disc"
            />
        </div>

    </main>
</template>

<script>

const axios = require('axios');
import MyDisc from './partials/MyDisc.vue'

export default {
    name: 'MyMain',
    components: {
        MyDisc
    },
    props: {
        'selectedGenres': String
    },
    data() {
        return {
            discsList: [],
            genres: []
        };
    },
    computed: {
        filteredDiscs() {
            if(this.selectedGenres == '') {
                return this.discsList;
            } else {

                return this.discsList.filter( disc => {

                    return disc.genre == this.selectedGenres;
                });
            }
        }
    },
    methods: {
        getListDiscs() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.discsList = response.data.response;
                this.discsList.forEach(disc => {
                    if (!this.genres.includes(disc.genre)) {
                        this.genres.push(disc.genre);
                    }
                });

                this.$emit('genresComplete', this.genres);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },
    created() {
        this.getListDiscs();
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/variables.scss';

    main {
        align-items: center;
        display: flex;
        width: 100%;
        height: 93vh;
    }
    .container {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        width: 70%;
    }

    .disc {
        display: flex;
        flex-direction: column;
        width: calc(88% / 5);
        padding: 2%;
        margin-right: 3%;
        margin-bottom: 1.5%;
        background-color: $secondary;

        // Seleziono ogni quinto elemento
        &:nth-child(5n) {
            margin-right: 0;
        }
    }


</style>