<template>
  <div>
    <v-layout ma-5 align-center column>
      <h1 class="mt-3">{{$t('currWatch')}}</h1>
      <v-layout wrap align-space-around row justify-space-around>
        <transition v-for="show in anime.currShows" :key="show.title" enter-active-class="animated fadeInRight" appear="">
          <anime-card :show="show"/>
        </transition>
      </v-layout>
      <h1>{{$t('prevWatch')}}</h1>
      <v-container fluid>
        <v-layout wrap align-space-around row justify-space-around>
          <transition v-for="show in anime.prevShows" :key="show.title" enter-active-class="animated fadeInLeft" appear="">
            <anime-card :show="show"/>
          </transition>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<i18n>
{
  "en": {
    "prevWatch": "Previously Watched",
    "currWatch": "Currently Watching"
  },
  "ja": {
    "prevWatch": "アニメを予て見ました",
    "currWatch": "アニメを今の所見ましています"
  }
}
</i18n>

<script>
import anime from 'json-loader!yaml-loader!../assets/anime.yaml'
import animeCard from '../components/animeCard.vue'
export default {
  components: {
    animeCard
  },
  data()
  {
    return {
      anime
    }
  }
}
</script>
