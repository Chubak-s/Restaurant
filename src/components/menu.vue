<script>
import Card from "@/components/card.vue";
import {store} from "@/vuex/store.js";

export default {
  name: 'menu',
  components:{
    Card
  },
  data(){
    return {
      pilafList: store.getters.getPilafList,
    }
  },
  methods:{
    activeCategory(event){
      const activeItem = document.querySelector('.active-item')
      activeItem.classList.remove('active-item')
      console.log(event.target)
      event.target.classList.add('active-item')
    },
    clickActiveItem(){
      const navItems = document.querySelectorAll(".nav-item-menu");
      navItems.forEach(item => {
        item.addEventListener('click', this.activeCategory);
      });
    }
  },
  mounted() {
    this.clickActiveItem()
  },
}
</script>

<template>
  <div class="menu">
    <div class="blank"></div>
    <div class="nav-menu">
      <div class="nav-item-menu active-item">плов</div>
      <div class="nav-item-menu">горячие блюда</div>
      <div class="nav-item-menu">салаты</div>
      <div class="nav-item-menu">закуски</div>
      <div class="nav-item-menu">японская кухня</div>
      <div class="nav-item-menu">пицца</div>
      <div class="nav-item-menu">супы</div>
      <div class="nav-item-menu">мангал</div>
      <div class="nav-item-menu">напитки</div>
      <div class="nav-item-menu">соусы</div>
      <div class="nav-item-menu">десерты</div>
    </div>
    <div class="menu-content">
      <div class="title">Плов</div>
      <div class="cardsSection">
        <div v-for="item in pilafList" :key="item.id">
          <card :name="item.name" :img="item.img" :price="item.price" :description="item.description"></card>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blank{
  height: 10vh;
}
.nav-menu{
  display: flex;
  justify-content: space-around;
  height: 10vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  align-items: center;
  border-top: 1px solid #0E2827;
  border-bottom: 1px solid #0E2827;
  position: fixed;
  background: #fff;
}
.nav-item-menu{
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
}
.active-item{
  background: #FDB704;
}
.menu-content{
  padding: 5%;
}
.title{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  padding-top: 10vh;
  height: 20vh;
}
.cardsSection{
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
}
</style>