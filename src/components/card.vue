<script>
export default {
  name: 'card',
  components:{

  },
  props: {
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
}
.name{
  font-weight: 700;
  color: #797979;
  font-size: 24px;
}
.description{
  font-size: 14px;
  color: #686466;
}
.bottom-part{
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
</style>