<template>
    <!-- <keep-alive>
        <Promised :promise="data">
            <template v-slot:pending>
                <p>Loading...</p>
            </template>
            
            <template v-slot="data">
                <v-card width="300" min-height="400" hover class="ma-2">
                    <v-card-title class="justify-center" primary style="text-align: center"><h2>{{$i18n.locale != "ja" ? data.Media.title.romaji : data.Media.title.native}}</h2></v-card-title>
                    <v-img contain height="300" :src="data.Media.coverImage.large"/>
                    <v-card-text>
                        <h3 style="text-align: center">
                            {{$i18n.locale != "ja" ? show.desc : ""}}
                        </h3>
                    </v-card-text>
                </v-card>
            </template>
        </Promised>
    </keep-alive> -->
    <v-card width="300" min-height="400" hover class="ma-2">
        <v-card-title class="justify-center" primary style="text-align: center"><h2>{{$i18n.locale != "ja" ? show.title : show.jatitle}}</h2></v-card-title>
        <v-img contain height="300" :src="show.imgUrl"/>
        <v-card-text>
            <h3 style="text-align: center">
                {{$i18n.locale != "ja" ? show.desc : ""}}
            </h3>
        </v-card-text>
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

<style>

</style>
