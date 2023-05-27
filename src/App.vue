<template >
  <div class="wrapper">
    <header class="header">
      <button class="header__burger" @click="changeIsOpen('isOpenbar')">
        <img src="@/assets/images/burger.svg" alt="" />
      </button>
      <Navbar :pageIndecators="pageIndecators" />
    </header>
    <div class="wrapper__content">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      pageNum: 0,
      controlScroll: false,
      pageIndecators: false,
      currentPathUrl: "/",
    };
  },
  methods: {
    ...mapMutations(["changeIsOpen"]),

    getPage() {
      if (this.controlScroll) {
        if (this.pageNum < this.links.length - 1) {
          this.pageNum++;
        } else {
          this.pageNum = 0;
        }
      } else if (scrollY <= 0) {
        if (this.pageNum > 0) {
          this.pageNum--;
        } else {
          this.pageNum = this.links.length - 1;
        }
      }
      this.$router.push({ path: `${this.links[this.pageNum]}`});
    },

    trueOrFalseNav() {
      if (window.innerWidth > 768) {
        this.pageIndecators = this.$route.path !== "/" ? true : false;
      }
      this.currentPathUrl = this.$route.path;
      this.pageNum = this.links.indexOf(this.currentPathUrl);
    },

    changeScrollSize() {
      const wrapper = document.querySelector(".wrapper");
      const fullHeight = window.innerHeight;

      this.controlScroll =
        fullHeight + scrollY == wrapper.clientHeight ? true : false;

      if (this.controlScroll) {
        wrapper.style = `
        overflow:hidden;
        `;
        setTimeout(() => {
          wrapper.style = `
          overflow:auto;
          `;
        }, 2000);
      }

      this.getPage();
    },
  },

  computed: {
    ...mapState(["links"]),
  },

  mounted() {
    window.addEventListener("scroll", () => this.changeScrollSize());
    this.changeScrollSize();
  },

  watch: {
    $route() {
      this.trueOrFalseNav();
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
