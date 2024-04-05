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
    return {
      count: 1,
    }
  },
  computed: {},
  methods: {}
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
          <div>-</div>
          <div>{{count}}</div>
          <div>+</div>
        </div>
        <div class="addToCart-btn" >590 Р</div>
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
  justify-content: space-around;
  padding: 5px;
  font-size: 24px;
  border-radius: 15px;
  width: 45%;
  align-items: center;
  color: #FFFFFF;
}
</style>