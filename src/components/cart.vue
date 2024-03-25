<script>
import {store} from "@/vuex/store.js";
import CartCard from "@/components/cartCard.vue";
export default {
  name: 'cart',
  computed: {
    store() {
      return store
    }
  },
  components:{
    CartCard,
  },
  props: {
  },
  data(){
    return {
      storing: store.state.cart,
      count: store.state.cart.length,
      deliveryCost: 350,
    }
  },
  methods: {
  },
  mounted() {
    console.log(this.cart)
   },
}
</script>

<template>
  <div class="cart">
    <div class="v-cart">
      <div class="main-section">
        <div class="items">
          <div class="title">Корзина</div>
          <div v-for="item in storing" class="cart-section">
            <cartCard :id="item.id" :name="item.name" :img="item.img" :price="item.price" :description="item.description"></cartCard>
          </div>
        </div>
        <div class="order">
          <div class="sum-title">Сумма заказа</div>
          <div class="order-info">
            <div class="left-section-order">
              <div v-if="count%10<5 && count%10!==0" class="order-text">{{this.count}} товара на сумму</div>
              <div v-else class="order-text">{{this.count}} товаров на сумму</div>
              <div class="order-text">Стоимость доставки</div>
              <div class="total">Итого: </div>
            </div>
            <div class="right-section-order">
              <div class="sum">{{store.state.sum}} руб.</div>
              <div class="sum">{{this.deliveryCost}} руб.</div>
              <div class="total-sum">{{store.state.sum+this.deliveryCost}} руб.</div>
            </div>
          </div>
          <div class="makeOrder" @click="">Перейти к оформлению заказа</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart{
  margin: 0;
  padding: 20vh 0 0;
  min-height: 90vh;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-color: #FFFFFF;
}
.main-section{
  display: flex;
  margin-left: 10vw;
  margin-right: 10vw;
  justify-content: space-between;
  padding-bottom: 50px;
}
.title{
  color: #0e2827;
  font-size: 48px;
}
.cart-section{
  margin: 50px 0 50px 0;
}
.order{
  width: 350px;
  background: #0e2827;
  border-radius: 5px;
  padding: 20px;
  height: 400px;
  color: #FFCF9D;
}
.sum-title{
  font-size: 24px;
}
.order-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.right-section-order{
  text-align: right;
}
.left-section-order{
}
.order-text{
  font-size: 18px;
  padding-top: 20px;
}
.sum{
  font-size: 18px;
  padding-top: 20px;
}
.total{
  font-size: 28px;
  padding-top: 40px;
}
.total-sum{
  font-size: 28px;
  padding-top: 40px;
}
.makeOrder{
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  display: inline-flex;
  padding: 20px;
  align-items: center;
  background: #FFFFFF;
  color: #0e2827;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.makeOrder:active{
  background: #797979;
  transition: 0.2s;
}

</style>