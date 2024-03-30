<script>
export default {
  name: 'category',
  props:{
    img:{
      type: String,
      required: true,
    },
    title:{
      type: String,
      required: true,
    }
  }
}
</script>

<template>
<div class="card">
  <img :src=img alt="img">
  <div class="title">{{title}}</div>
  <button>Посмотреть</button>
</div>
</template>

<style scoped>
.card{
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40vh;
  width: 20vw;
  background: #FFFFFF;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.title{
  position: absolute;
  top: 70%;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  width: 100%;
}
button{
  width: 100%;
  color: #FFFFFF;
  position: absolute;
  bottom: 0;
  padding: 10px;
  font-size: 14px;
  border: none;
  background-color: black;
}
</style>