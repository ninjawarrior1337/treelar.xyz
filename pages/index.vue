<template>
  <div>
    <transition appear="" enter-active-class="animated zoomIn">
      <v-layout class="wrapper-layout" align-center justify-center column style="background-image: linear-gradient(to right, #3399ff , #0000ff)">
        <transition appear="" enter-active-class="animated fadeInDownBig delay-800ms">
          <div id="mainLogo">
            <v-img height="100%" width="100%" src="/logoassets/logowobg.svg"/>
          </div>
        </transition>
        <h1 id="underLogo">
          {{$t("treelar")}}
          <br/>
          <br/>
          // {{$t('studying')}}<pre/>
          // <span v-html="$t('likes-vue')"></span><pre/>
          // <span v-html="$t('trapped')"></span>
        </h1>
      </v-layout>
    </transition>
    <v-layout class="wrapper-layout" align-center justify-center>
      <v-container ma-4 class="elevation-12" id="card">
        <v-layout column="" justify-space-between="" fill-height="">
          <v-layout justify-space-around="" align-center="">
            <span class="menacing">ゴゴゴゴゴゴゴゴゴゴゴゴ</span>
            <img class="mx-3" height="100" width="100" style="border-radius: 50%; object-fit: cover;" src="/logoassets/logo.png"/>
            <span class="menacing">ゴゴゴゴゴゴゴゴゴゴゴゴ</span>
          </v-layout>
          <v-layout align-space-around="" column justify-space-around="" fill-height="">
            <card-section v-for="(v, k) of mainCard[$i18n.locale]" :key="k" :title="k">
                <ul>
                  <li class="cardListElement" v-for="item of v" :key="item" v-html="item">

                  </li>
                </ul>
            </card-section>
          </v-layout>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<i18n>
{
  "en": {
    "treelar": "Treelar (Tyler)",
    "studying": "日本語勉強する",
    "likes-vue": "likes <a href='http://vuejs.org' target='_blank' style='color: #41B883; text-decoration: none;'>Vue.js</a> over <a href='https://reactjs.org/' target='_blank' style='color: #00d8ff; text-decoration: none;'>React</a>",
    "trapped": "trapped in <a href='https://schoolido.lu/' target='_blank' style='color: #E11882; text-decoration: none;'>idol hell</a>"
  },
  "ja": {
    "treelar": "ツリーラー　『タイラー』",
    "studying": "日本語勉強する",
    "likes-vue": "<a href='https://reactjs.org/' target='_blank' style='color: #00d8ff; text-decoration: none;'>React</a>より<a href='http://vuejs.org' target='_blank' style='color: #41B883; text-decoration: none;'>Vue.js</a>が好きです",
    "trapped": "<a href='https://schoolido.lu/' target='_blank' style='color: #E11882; text-decoration: none;'>Idol hell</a>に陥穽しています"
  }
}
</i18n>

<script>
import cardSection from '../components/cardSection.vue'
import mainCard from 'json-loader!yaml-loader!../assets/mainCardEnteries.yaml'

export default {
  components: {
    cardSection
  },
  data()
  {
    return {
      mainCard
    }
  }
}
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
  // margin-top: -5%
  width: 20rem;
  // height 20rem;
  max-width: 300px;
  // height: auto;
  // margin-top 30px;

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
  // margin 10px
  // width: 85vw;
  // height: 85vh;
  border-radius 25px;
  // overflow-y auto
  // display table

// #underLogo
//   text-align: center;
//   font-family: "Comfortaa";
//   font-weight: normal;
//   rfs(45)
//   user-select none

#underLogo
  text-align: center;
  font-family: "Comfortaa";
  font-weight: normal;
  rfs(40)
  user-select none 

</style>
