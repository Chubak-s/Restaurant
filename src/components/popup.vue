<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'popup',
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      count: 1,
    }
  },
  computed: {},
  methods: {
    addOne(){
      this.count++;
    },
    removeOne(){
      if (this.count-1>0){
        this.count--;
      }
    },
    addToCart(){
      console.log(store.state.sum)
      console.log(this.count)
      console.log(this.item.price * this.count)
      store.state.sum += this.item.price * this.count
      store.state.isVisibleModal=false;
      store.state.cart.push({name: this.item.name, price:this.item.price, count: this.count})
    }
  },
  mounted() {

  },
}
</script>

<template>
  <div class="v-popup" v-if="item!==undefined">
    <div class="v-popup_img">
      <img :src="this.item.img" alt="img" >
    </div>
    <div class="v-popup_content">
      <div class="name">{{this.item.name}}</div>
      <div class="category"></div>
      <div class="info">
        {{this.item.description}}
      </div>
      <div class="buttons">
        <div class="manage">
          <div class="button" @click="removeOne">-</div>
          <div class="count">{{count}}</div>
          <div class="button" @click="addOne">+</div>
        </div>
        <div class="addToCart-btn" @click="addToCart"><img src="../assets/basket.png" class="icon">{{this.item.price*this.count}} ₽</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-popup{
  display: flex;
  color: #222;
  font-size: 18px;
  position: fixed;
  background: #FFFFFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  width: 75vw;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  border-radius: 10px;
}
img{
  border-radius: 10px;
  height: 100%;
}
.v-popup_content{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
.name{
  font-size: 36px;
  font-weight: bold;
}
.info{
  padding-top: 10px;
}
.buttons{
  display: flex;
  margin-top: auto;
  padding: 10px;
  height: 10vh;
  justify-content: space-between;
}
.manage{
  background: rgb(0, 0, 0, 10%);
  display: flex;
  justify-content: space-around;
  padding: 5px;
  font-size: 24px;
  border-radius: 15px;
  width: 45%;
  align-items: center;
}
.addToCart-btn{
  background: red;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 5px;
  font-size: 20px;
  border-radius: 15px;
  width: 45%;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
}
.button{
  cursor: pointer;
}
.icon{
  height: 70%;
}
</style>