<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'card',
  components:{

  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
    price:{
      type: String,
      required: true
    }
  },
  data(){
    return {

    }
  },
  methods:{
    addToCart(){
      const objectID = this.id;
      const menu = store.state.menu;
      menu.forEach((item)=> {
        if (item.id === objectID){
          store.state.cart.push(item)
        }
      })
    }
  }
}
</script>

<template>
  <div class="card">
    <img :src='img' alt="img" width="100%">
    <div class="name">{{name}}</div>
    <div class="description">{{description}}</div>
    <div class="bottom-part">
      <div class="price">{{price}} ₽</div>
      <div class="addToCart" @click="addToCart()">В корзину</div>
    </div>
  </div>
</template>
<style scoped>
.card{
  width: 20vw;
  font-family: Montserrat,sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 15px;
  border: 1px solid #606060;
}
.name{
  padding: 0 5%;
  font-weight: 700;
  color: #797979;
  font-size: 24px;
}
.description{
  padding: 0 5%;
  font-size: 14px;
  color: #686466;
}
img{
  border-radius: 14px 14px 0 0 ;
}
.bottom-part{
  padding: 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price{
  font-weight: 600;
  font-size: 22px;
}
.addToCart{
  font-weight: 600;
  color: #000;
  font-size: 14px;
  border-radius: 8px;
  padding: 10px;
  background: #DFDFDF;
  text-align: center;
  cursor: pointer;
}
.addToCart:active{
  background: #fdb704;
}
</style>