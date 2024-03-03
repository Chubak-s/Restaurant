<script>
export default {
  name: 'landing',
  components:{

  },
  data(){
    return {

    }
  }
}
</script>

<template>
  <div class="landing">
    <div class="jumbotron">
      <div class="img">
        <div class="logo">BAI KAZAN</div>
        <div class="freeDelivery">
          <hr class="line">
          <p>бесплатная доставка</p>
          <hr class="line">
        </div>
        <div class="moveToOrder">
          <button class="orderBtn">заказать сейчас</button>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="ornaments">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
      </div>
      <div class="text-block">
        <div class="title">
          <hr class="line-title">
          <div class="text-title">Добро пожаловать в “Бай Казан” – рай для истинных гурманов!</div>
          <hr class="line-title">
        </div>
        <div class="text"> Наша кухня – это уникальное слияние восточных вкусов с современными кулинарными тенденциями, чтобы удовлетворить самые изысканные вкусы наших посетителей. Мы также гордимся нашим высоким уровнем обслуживания. Наши приветливые официанты готовы окунуть вас в мир восточного гостеприимства. И если вы захотите насладиться нашими вкусами и атмосферой дома, мы предлагаем вам услугу доставки на дом. Независимо от того, где вы находитесь, вы сможете заказать наши блюда и насладиться уникальным вкусом на своем столе. Приходите к нам и откройте для себя уникальный мир восточной  кухни. Добро пожаловать!</div>
        <hr class="line-under-tittle">
      </div>
      <div class="ornaments">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
        <img src="../assets/ornament.png" alt="" class="ornament2">
        <img src="../assets/ornament.png" alt="" class="ornament1">
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron{
  height: 90vh;
  background: #0E2827;
  z-index: 0;
  color: #fff;
  display: flex;
}
.img{
  height: 100%;
  width: 100%;
  background-image: url("../assets/img.png");
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  z-index: 1;
}
.logo{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 60vh;
  font-family: 'Halant', serif;
  font-weight: 400;
  font-size: 72px;
  -webkit-text-stroke: 1px black;

}
.freeDelivery{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}
.line{
  height: 1px;
  width: 5%;
}
.moveToOrder{
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.orderBtn{
  height: 8vh;
  border-radius: 20px;
  padding: 10px;
  width: 20%;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: #0E2827;
  font-weight: 400;
  border: 1px solid #fff;
}
.orderBtn:hover{
  border: 1px solid #FDB704;
  color: #FDB704;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.description{
  height: 100vh;
  background: #fff;
}
.ornaments{
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  opacity: 70%;
}
.ornament1, .ornament2{
  height: 50px
}
.ornament2{
  transform: scaleY(-1);
}
.text-block{
  padding-right: 10%;
  padding-left: 10%;
  height: 60vh;
  font-family: 'Montserrat', sans-serif;
}
.title{
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.line-title{
  width: 25%;
}
.text-title{
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.text{
  height: 40vh;
  padding-top: 2%;
  padding-right: 10%;
  padding-left: 10%;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}
.line-under-tittle{
  width: 100%;
}
</style>