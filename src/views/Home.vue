<template>
    <section class="home" @mousemove="getmouseMove">
        <div class="home__back">
         <!-- <div data-speed="10" class="home__back-layer layer1"></div>
         <div data-speed="20" class="home__back-layer layer2"></div>
         <div data-speed="30" class="home__back-layer layer3"></div>
         <div data-speed="40" class="home__back-layer layer4"></div>  -->
         <img data-speed="1" class="home__back-layer layer1" src="@/assets/images/parallax-image/parallax-vklad1.png" alt="">
         <img data-speed="2" class="home__back-layer layer2" src="@/assets/images/parallax-image/parallax-vklad2.png" alt="">
         <img data-speed="3" class="home__back-layer layer3" src="@/assets/images/parallax-image/parallax-vklad3.png" alt="">
         <!-- <img data-speed="4" class="home__back-layer layer4" src="@/assets/images/parallax-image/parallax-vklad4.png" alt=""> -->
         <div class="home__back-blur"></div>
        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {}
    },
    methods: {
        getmouseMove(event) {
            const elem = document.querySelectorAll(".home__back-layer")
            const clientX = event.clientX,
                    clientY = event.clientY;
            
                    elem.forEach(el => {
                        const attr = el.getAttribute('data-speed')
                        el.style.left = `${clientX*attr/100}px`
                        el.style.top = `${clientY*attr/100}px`
                    })
        }
    }

}
</script>

<style>

</style>