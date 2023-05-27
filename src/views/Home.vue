<template>
  <section class="home" @mousemove="getmouseMove">
    <div class="home__back">
      <img
        data-speed="1"
        class="home__back-layer layer1"
        src="@/assets/images/parallax-image/parallax-vklad1.png"
        alt=""
      />
      <img
        data-speed="2"
        class="home__back-layer layer2"
        src="@/assets/images/parallax-image/parallax-vklad2.png"
        alt=""
      />
      <img
        data-speed="3"
        class="home__back-layer layer3"
        src="@/assets/images/parallax-image/parallax-vklad3.png"
        alt=""
      />
      <div class="home__back-blur"></div>
    </div>
    <div class="home__content">
      <div class="home__content-statue">
        <img src="@/assets/images/parallax-image/parallax-kub.png" alt="" />
      </div>

      <div class="home__content-txt">
        <h1 class="home__content-title">XIV</h1>
        <p class="home__content-subtitle">
          Ташкентский международный кинофестиваль
        </p>
        <p class="home__content-subtext">“Жемчужина шелкового пути”</p>
      </div>
    </div>
    <button class="home__scroll">
      Scroll&nbsp;Down
      <img src="@/assets/images/scroll-arrow.svg" alt="" />
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getmouseMove(event) {
      const elem = document.querySelectorAll(".home__back-layer");
      const clientX = event.clientX,
        clientY = event.clientY;

      elem.forEach((el) => {
        const attr = el.getAttribute("data-speed");
        el.style.left = `${(clientX * attr) / 100}px`;
        el.style.top = `${(clientY * attr) / 100}px`;
      });
    },
  },

  created() {},
};
</script>

<style>
</style>