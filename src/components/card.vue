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
    }
  }
}
</script>

<template>
  <div class="card">
    <div class='dishImg'>
      <img :src='img' alt="img" >
    </div>
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
  height: 55vh;
  width: 20vw;
  font-family: Montserrat,sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  //border-radius: 15px;
  //border: 1px solid #606060;
}
.card:hover{
  border-radius: 15px;
  background-color: #f1f1f1;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dishImg{
  border-radius: 14px 14px 0 0 ;
  width: 100%;
  height: 30vh;
  overflow: hidden;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
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