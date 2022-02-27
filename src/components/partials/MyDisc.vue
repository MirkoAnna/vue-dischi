<template>

    <div >
        <img :src="disc.poster" alt="">
        <h3>{{disc.title}}</h3>
        <p>{{disc.author}}</p>
        <p>{{disc.year}}</p>
    </div>

</template>

<script>
export default {
    name: 'MyDisc',
    props: {
        "disc": Object
    }
}
</script>

<style lang="scss" scoped>

    @import '../../assets/style/variables.scss';

    img {
            margin: 0 auto;
            width: 7rem;
            height: 7rem;
        }
        
        h3, p {
            font-size: 100%;
            text-align: center;
        }

        h3 {
            margin: 1rem 0;
            text-transform: uppercase;
            color: $textPrimary;
        }

        p {
            color: $textSecondary;
        }
</style>