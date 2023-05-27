<template>
  <div class="wrapper" @scroll="getPage">
    <header class="header">
      <button class="header__burger" @click="changeIsOpen('isOpenbar')">
        <img src="@/assets/images/burger.svg" alt="" />
      </button>
      <Navbar />
    </header>
    <div class="wrapper__content">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeIsOpen"]),

    getPage() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.slide-enter-active,
.slide-leave-active {
  transition: 1s opacity, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>
