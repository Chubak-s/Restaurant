<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'stocks',
  data(){
    return{
      slides: store.state.stocks,
    }
  },
  methods:{
  },
  mounted() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    showSlide(currentSlide);
  }
}
</script>
<template>
  <section class="stocks">
    <div class="btn"><img src="/src/assets/leftBtn.png" alt="prev" class="prev"></div>
    <div class="slider">
      <div v-for="slide in slides">
        <img class="slide" :src="slide" alt="sale">
      </div>
    </div>
    <div class="btn"><img src="/src/assets/rightBtn.png" alt="next" class="next"></div>
  </section>
  <div class="panel">
    <div v-for="slide in slides">
      <div class="panel-btn"></div>
    </div>
  </div>
</template>

<style scoped>
.stocks{
  height: 40vh;
  padding: 5px;
  background-color: #fff;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: center;
}
.slider {
  position: relative;
  width: 85%;
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.slide.active {
  opacity: 1;
}
.btn{
  height: 100%;
  display: flex;
  align-items: center;
}
.btn > img{
  height: 30%;
}
.panel{
  padding: 15px;
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 50px;
}
.panel-btn{
  height: 10px;
  width: 70px;
  background-color: #fdb704;
  border-radius: 10px;
}
</style>