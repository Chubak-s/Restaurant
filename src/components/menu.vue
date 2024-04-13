<script>
import Card from "@/components/card.vue";
import {store} from "@/vuex/store.js";
import Stocks from "@/components/stocks.vue";
import Popup from "@/components/popup.vue";

export default {
  name: 'menu',
  computed: {
    store() {
      return store
    }
  },
  components:{
    Popup,
    Stocks,
    Card
  },
  data(){
    return {
      categories: store.getters.getCategories,
      actualItem: undefined,
    }
  },
  methods:{
    activeCategory(event){
      const activeItem = document.querySelector('.active-item')
      activeItem.classList.remove('active-item')
      console.log(event.target)
      event.target.classList.add('active-item')
    },
    showCategoriesList(){
      store.getters.getCategoriesList
    },
    clickActiveItem(){
      const navItems = document.querySelectorAll(".nav-item-menu");
      navItems.forEach(item => {
        item.addEventListener('click', this.activeCategory);
      });
    },
    smoothScroll(){
      const anchors = document.querySelectorAll('a[href*="#"]')

      for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()

          const blockID = anchor.getAttribute('href').substr(1)
      
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      }
    },
    openModal(item){
      if (item!==undefined){
        this.actualItem = item;
        store.state.isVisibleModal = true;
      }
    },
    closeModal(){
      store.state.isVisibleModal = false;
    },
    scrollToUp(){
      const header = document.querySelector('.blank')


      header.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  },
  mounted() {
    this.clickActiveItem()
    this.smoothScroll()
  },
  created() {
    this.showCategoriesList()
  }
}
</script>

<template>
  <div class="menu">
<!--    <stocks></stocks>-->
    <div class="blank"></div>
    <nav class="nav-menu">
      <a href ="#0" class="nav-item-menu active-item">горячие блюда</a>
      <a href ="#1" class="nav-item-menu">салаты</a>
      <a href ="#2" class="nav-item-menu">закуски</a>
      <a href ="#3" class="nav-item-menu">японская кухня</a>
      <a href ="#4" class="nav-item-menu">пицца</a>
      <a href ="#5" class="nav-item-menu">супы</a>
      <a href ="#6" class="nav-item-menu">мангал</a>
      <a href ="#7" class="nav-item-menu">напитки</a>
      <a href ="#8" class="nav-item-menu">соусы</a>
      <a href ="#9" class="nav-item-menu">десерты</a>
    </nav>
    <div class="menu-content">
      <div v-for="(category,index) in categories">
        <div :id=index class="title">{{category.name}}</div>
        <div class="cardsSection">
          <div v-for="item in category.items">
            <card :id="item.id" :name="item.name" :img="item.img" :price="item.price" :description="item.description" @click="openModal(item)"></card>
          </div>
        </div>
      </div>
      <div class="popup-wrapper" v-show="store.state.isVisibleModal">
        <popup :item="this.actualItem"></popup>
        <i class="material-icons close" @click="closeModal()"></i>
      </div>
      <div class="up" @click="scrollToUp()">
        <img src="../assets/up.png" alt="up" height="20">
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
  border-bottom: 1px solid rgba(0,0,0,0.3);
  background: #fff;
}
.nav-item-menu{
  text-decoration: none;
  color: #222;
  border-radius: 20px;
  padding: 8px;
  cursor: pointer;
}
.active-item{
  background: #FDB704;
}
.menu-content{
  padding-right: 5%;
  padding-left: 5%;
}
.title{
  display: flex;
  align-items: end;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  height: 20vh;
  margin-bottom: 20px;
}
.cardsSection{
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  padding-bottom: 5vh;
}
.close{
  position: fixed;
  top: 11vh;
  right: 5vw;
  color: #fff;
  cursor: pointer;
}
.popup-wrapper{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.up{
  position: fixed;
  bottom: 12vh;
  right: 5vw;
  width: 50px;
  height: 50px;
  background-color: #fdb704;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>