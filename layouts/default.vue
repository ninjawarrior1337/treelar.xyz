<template>
  <v-app>
    <v-toolbar height="50" id="toolbar">
        <!-- <v-toolbar-title>
          
        </v-toolbar-title> -->
        <nuxt-link class="mr-6 mt-2" :to="localePath('index')">
          <img height="40" width="40" style="border-radius: 50%; object-fit: cover;" src="/logoassets/logo.png"/>
        </nuxt-link>
        <v-toolbar-items>
          <v-btn text nuxt :to="localePath('index')">{{$t("home")}}</v-btn>
          <v-btn text nuxt :to="localePath('anime')">{{$t("anime")}}</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn href="https://github.com/ninjawarrior1337" target="_blank" icon="" class="socialIcon"><v-icon>fab fa-github</v-icon></v-btn>
        <v-btn icon="" href="https://twitter.com/TYNROH" target="_blank" class="socialIcon"><v-icon>fab fa-twitter</v-icon></v-btn>
        <v-btn icon="" @click.stop="discordDialog = true" class="socialIcon"><v-icon>fab fa-discord</v-icon></v-btn>

        <v-btn v-if="$i18n.locale === 'en'" text nuxt :to="switchLocalePath('ja')">Show Japanese</v-btn>
        <v-btn v-if="$i18n.locale === 'ja'" text nuxt :to="switchLocalePath('en')">英語のページへナビゲートする</v-btn>
    </v-toolbar>
    <transition enter-active-class="animated fadeIn" appear="">
      <nuxt></nuxt>
    </transition>
    <v-dialog v-model="discordDialog" max-width="290px">
      <v-card>
        <v-card-title>
          <h1 class=text-xs-center>Discord Tag: Treelar#1974</h1>
        </v-card-title>
      </v-card>
    </v-dialog>
    <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
      <v-btn v-show="scrollY > 100" @click="scrollToTop" class="ma-6" color="blue" bottom fab fixed right>
        <v-icon>
          arrow_upward
        </v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<i18n>
{
  "en": {
    "home": "Home",
    "anime": "Anime"
  },
  "ja": {
    "home": "ホーム",
    "anime": "アニメ"
  }
}
</i18n>

<script>
export default {
  data()
  {
    return {
      scrollY: 0,
      discordDialog: false
    }
  },
  methods:
  {
    scrollToTop()
    {
      this.$scrollTo("#toolbar")
    }
  },
  mounted()
  {
    window.addEventListener('scroll', e => {
      this.scrollY = window.scrollY
    })
  },
  beforeDestroy()
  {
    window.removeEventListener('scroll', e => {
      this.scrollY = window.scrollY
    })
  }
}
</script>


<style lang="stylus">

.socialIcon:hover
  animation: heartBeat 1s

#toolbar
  position sticky

</style>
