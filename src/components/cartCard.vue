<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'cartCard',
  components:{

  },
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count:{
      type: Number,
      required: true,
    }
  },
  data(){
    return {
      curCount: this.count
    }
  },
  methods:{
    addOne(){
      this.curCount++;
      store.state.sum+=this.price
    },
    removeOne(){
      if (this.curCount-1>0){
        this.curCount--;
        store.state.sum-=this.price
      }
    },
    removeItem(){
      if ( store.state.sum-this.price*this.curCount>=0){
        store.state.sum-=this.price*this.curCount;
        const index = store.state.cart.findIndex(item => item.id === this.id);
        store.state.cart.splice(index, 1)
      }
    },
  },
  mounted() {
    console.log(store.state.cart)
    console.log(this.name)
  },
  store: store,
}
</script>

<template>
  <div class="card">
    <div class="name">{{name}}</div>
    <div class="price">{{price}} ₽</div>
    <div class="controlPanel">
      <div class="button" @click="removeOne">-</div>
      <div class="count">{{curCount}}</div>
      <div class="button" @click="addOne">+</div>
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