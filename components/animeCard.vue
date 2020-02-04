<template>
    <v-card width="300" min-height="400" hover class="ma-2">
        <div>
            <v-card-title class="justify-center" primary style="text-align: center"><h3>{{$i18n.locale != "ja" ? show.title : show.jatitle}}</h3></v-card-title>
            <v-img contain height="300" :src="`https://images.weserv.nl/?url=${show.imgUrl}`"/>
            <v-card-text>
                <h3 style="text-align: center">
                    {{$i18n.locale != "ja" ? show.desc : ""}}
                </h3>
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "anime-card",

    props: ["show"],

    data()
    {
        return {
            data: null
        }
    },

    async created()
    {
        // this.data = this.getInfo()
    },

    methods: {
        async getInfo()
        {
            let {data} = await this.$axios.$post("https://graphql.anilist.co", {query: `
            query {
                Media(search: "${this.show.title}") {
                    title {
                        romaji
                        english
                        native
                        userPreferred
                    }
                    coverImage {
                        extraLarge
                        large
                        medium
                        color
                    }
                }
                }`
            })
            return data
        }
    }
}
</script>

<style scoped lang="stylus">
.v-card
    top: 0
    transition 0.10s;
    transition-timing-function linear
.v-card:hover
    top -10px
</style>
