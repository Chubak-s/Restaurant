<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'cartCard',
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
    },
  },
  data(){
    return {
      cart: store.state.cart,
      count: 1,
    }
  },
  methods:{
    addOne(){
      this.count++;
      store.state.sum+=this.price
    },
    removeOne(){
      if (this.count-1>0){
        this.count--;
        store.state.sum-=this.price
      }
    },
    removeItem(){
      if ( store.state.sum-this.price*this.count>0){
        store.state.sum-=this.price*this.count;
        const index = store.state.cart.findIndex(item => item.id === this.id);
        store.state.cart.splice(index, 1)
      }
    }
  },
  mounted() {
    store.state.sum+=this.price
    console.log(store.state.cart)
  },
  store: store,
}
</script>

<template>
  <div class="card">
    <div class="name">{{name}}</div>
    <div class="price">{{price}} ₽</div>
    <div class="controlPanel">
      <div class="button" @click="addOne">+</div>
      <div class="count">{{count}}</div>
      <div class="button" @click="removeOne">-</div>
    </div>
    <div class="button" @click="removeItem">удалить</div>
  </div>
  <hr>
</template>
<style scoped>
.card{
  height: 10vh;
  width: 70ch;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name{
  font-size: 24px;
}
.controlPanel{
  display: flex;
  width: 10%;
  padding: 1%;
  justify-content: space-between;
  border: 1px solid #222;
}
.button{
  cursor: pointer;
}
</style>