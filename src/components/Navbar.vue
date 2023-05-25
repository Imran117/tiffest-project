<template>
    <header class="header">
        <nav class="header__nav">
            <router-link to="/" class="header__nav-logo">
                <img src="@/assets/images/logo.png" alt="">
            </router-link>
            <ul class="header__nav-list">
                <li v-for="link in links" :key="link.id">
                    <router-link class="header__nav-link" :to="link.pagesName">{{ link.name }}</router-link>
                </li>
            </ul>
            <div class="header__nav-right">
                <a class="header__nav-social" href="https://www.instagram.com/tiffest_official/">
                    <img src="@/assets/images/instagram-icon.svg" alt="instagram-icon">
                </a>
                <a class="header__nav-social" href="https://www.facebook.com/tiffest.official/">
                    <img src="@/assets/images/facebook-icon.svg" alt="facebook">
                </a>
                <a class="header__nav-social" href="https://t.me/tiffest">
                    <img src="@/assets/images/telegram-icon.svg" alt="telegram">
                </a>
                <a class="header__nav-social" href="https://www.youtube.com/channel/UCDDkxOVMoD4PZxFTXMPaLkA">
                    <img src="@/assets/images/youtube-icon.svg" alt="youtube">
                </a>
                <div class="header__lang">
                    <div class="header__lang-head">
                        <span @click="isOpenLang = !isOpenLang">ru</span>
                        <img :class="['header__lang-arrow', {active:isOpenLang}]" src="@/assets/images/arrow.svg" alt="">
                    </div>
                    <div :class="['header__lang-select', {active: isOpenLang}]">
                        <div class="header__lang-item">
                            <span>uz</span>
                        </div>
                        <div class="header__lang-item">
                            <span>en</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
        currentComponent: 'Home',
        lang: 'ru',
        isOpenLang: false
    };
  },
  methods: {
    changeComponent(name) {
        this.currentComponent = name
    }
  },
  computed: {
    ...mapState(['links'])
  }
  
};
</script>

<style>
</style>