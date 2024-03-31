<script>
export default {
  name: 'popup',
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<template>
  <div class="v-popup" v-if="item!==undefined">
    <div class="v-popup_img">
      <img :src="this.item.img" alt="img">
    </div>
    <div class="v-popup_content">
      <div class="name">{{this.item.name}}</div>
      <div class="category"></div>
      <div class="price">{{this.item.price}} ₽</div>
      <div class="buttons">
        <div class="addToCart-btn" >Добавить в корзину</div>
        <div class="like-btn" >favorite</div>
      </div>
      <div class="info">
        <span style="font-size: 28px; font-weight: bold">Описание</span><br>
        {{this.item.description}}
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
  height: 90vh;
  width: 50vw;
  font-family: 'PT Sans', sans-serif;
}
.v-popup_img{
  height: 100%;
}
img{

}
.v-popup_content{
  padding-left: 20px;
}
.name{
  margin-top: 40px;
  font-size: 36px;
  font-weight: bold;
}
</style>