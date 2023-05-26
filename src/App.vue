<template>
  <div class="wrapper">
    <header class="header">
      <button class="header__burger" @click="changeIsOpen('isOpenbar')">
        <img src="@/assets/images/burger.svg" alt="" />
      </button>
      <Navbar/>
    </header>
    <div class="wrapper__content">
      <router-view />
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import { mapMutations } from 'vuex';
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['changeIsOpen'])
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
