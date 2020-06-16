<template>
  <div>
    <transition appear="" enter-active-class="animated zoomIn">
      <v-layout class="wrapper-layout" align-center justify-center column style="background-image: linear-gradient(to right, #3399ff , #0000ff)">
        <transition appear="" enter-active-class="animated zoomIn delay-800ms">
          <div id="mainLogo">
            <img
              height="300"
              width="300"
              class="lazyload"
              data-src="/logoassets/logo2020.svg"
              alt="big logo"
            />
          </div>
        </transition>
        <h1 id="underLogo">
          {{$t("treelar")}}
          <br/>
          <br/>
          // {{$t('studying')}}<pre/>
          // <span v-html="$t('likes-vue')"></span><pre/>
          // <span v-html="$t('trapped')"></span><pre/>
          // <span v-html="$t('kotlin-go')"></span>
        </h1>
      </v-layout>
    </transition>
    <!-- <v-layout class="wrapper-layout" align-center justify-center> -->
      <v-container :style="{
        minHeight: 100+'vh',
      }">
        <v-row :style="{alignItems: 'center', justifyItems: 'center', minHeight: 'inherit'}">
          <v-col>
            <v-row justify="center">
              <img class="lazyload" data-src="/logoassets/logo2020.svg" :style="{minWidth: `60%`}" alt="logo"/>
            </v-row>
          </v-col>
          <v-col>
              <v-card class="my-5" v-for="(v, k) of mainCard[$i18n.locale]" :key="k">
                <v-card-title>
                  <h2>{{k}}</h2>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li v-for="item of v" :key="item" v-html="item"></li>
                  </ul>
                </v-card-text>
              </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "treelar": "Treelar (Tyler)",
    "studying": "日本語勉強中",
    "likes-vue": "likes <a href='http://vuejs.org' target='_blank' rel='noopener noreferrer' style='color: #41B883; text-decoration: none;'>Vue.js</a> over <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' style='color: #00d8ff; text-decoration: none;'>React</a>",
    "trapped": "trapped in <a href='https://schoolido.lu/' target='_blank' rel='noopener noreferrer' style='color: #E11882; text-decoration: none;'>idol hell</a>",
    "kotlin-go": "<a href='https://kotlinlang.org/' target='_blank' rel='noopener noreferrer' style='color: #F88909; text-decoration: none;'>Kotlin</a> and <a href='https://golang.org/' target='_blank' rel='noopener noreferrer' style='color: #00ADD8; text-decoration: none;'>Go</a> are the future!"
  },
  "ja": {
    "treelar": "ツリーラー　『タイラー』",
    "studying": "日本語勉強中",
    "likes-vue": "<a href='http://vuejs.org' target='_blank' rel='noopener noreferrer' style='color: #41B883; text-decoration: none;'>Vue.js</a>が<a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' style='color: #00d8ff; text-decoration: none;'>React</a>より好きです",
    "trapped": "<a href='https://schoolido.lu/' target='_blank' rel='noopener noreferrer' style='color: #E11882; text-decoration: none;'>Idol hell</a>に陥穽しています",
    "kotlin-go": "<a href='https://kotlinlang.org/' target='_blank' rel='noopener noreferrer' style='color: #F88909; text-decoration: none;'>Kotlin</a>と<a href='https://golang.org/' target='_blank' rel='noopener noreferrer' style='color: #00ADD8; text-decoration: none;'>Golang</a>の大ファンです"
  }
}
</i18n>

<script lang="ts">
import cardSection from '../components/cardSection.vue'
//@ts-ignore
import mainCard from '../assets/mainCardEnteries.yaml'
import Vue from "vue"

export default Vue.extend({
  components: {
    cardSection
  },
  data()
  {
    return {
      mainCard,
    }
  }
})
</script>

<style lang="stylus">
a
  text-decoration none
  color #3399ff
</style>


<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
@import "~rfs/stylus";

#mainLogo
  width: 20rem;
  height 20rem;
  max-width: 300px;

.wrapper-layout
  min-height: 100vh

.menacing
{
  color purple
  rfs(30)
  text-align center
}

.cardListElement
  rfs(17)

#card
  background-color: white;
  border-radius 25px;

#underLogo
  text-align: center;
  font-family: "Comfortaa";
  font-weight: normal;
  rfs(40)
  user-select none 

</style>
