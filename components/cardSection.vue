<template>
    <v-card class="ma-2" elevation="25">
        <v-card-title class="justify-center">
            <h3 id="title">{{title}}</h3>
        </v-card-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "card-section",
    props: {
        title: String
    }
}
</script>

<style scoped lang="stylus">
@import "~rfs/stylus"

#title
    text-align center
</style>
