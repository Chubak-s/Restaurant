<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'landing',
  components: {},
  data() {
    return {
      arrayOfDishes: store.getters.getWeekDishesList,
    }
  },
  methods:{
    loadMap: store.getters.getMap
  },
  mounted() {
    //загрузка карты
    this.loadMap()
  },
}
</script>

<template>
  <div class="landing">
    <div class="jumbotron">
      <div class="img">
        <div class="logo">BAI KAZAN</div>
        <div class="freeDelivery">
          <hr class="line">
          <p>БЕСПЛАТНАЯ ДОСТАВКА</p>
          <hr class="line">
        </div>
        <div class="moveToOrder">
          <button class="orderBtn">заказать сейчас</button>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="ornaments">
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
      </div>
      <div class="text-block">
        <div class="title">
          <hr class="line-title">
          <div class="text-title">Добро пожаловать в “Бай Казан” – рай для истинных гурманов!</div>
          <hr class="line-title">
        </div>
        <div class="text"> Наша кухня – это уникальное слияние восточных вкусов с современными кулинарными тенденциями, чтобы удовлетворить самые изысканные вкусы наших посетителей. Мы также гордимся нашим высоким уровнем обслуживания. Наши приветливые официанты готовы окунуть вас в мир восточного гостеприимства. И если вы захотите насладиться нашими вкусами и атмосферой дома, мы предлагаем вам услугу доставки на дом. Независимо от того, где вы находитесь, вы сможете заказать наши блюда и насладиться уникальным вкусом на своем столе. Приходите к нам и откройте для себя уникальный мир восточной  кухни. Добро пожаловать!</div>
      </div>
      <hr class="line-under-tittle">
      <div class="ornaments">
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament2">-->
<!--        <img src="../assets/ornament.png" alt="" class="ornament1">-->
      </div>
      <div class="text-block2">
        <div class="text-title">Вдохновляющая обстановка</div>
        <div class="container">
          <div class="container-block">
            <div class="container-block-icon">
              <img src="../assets/icon1.png" alt="icon" height="100%">
            </div>
            <div class="container-block-text">
              <h4>Уютные кресла</h4>
              Расслабьтесь с чашкой чая в уютной обстановке.
            </div>
          </div>
          <div class="container-block">
            <div class="container-block-icon">
              <img src="../assets/icon2.png" alt="icon" height="100%">
            </div>
            <div class="container-block-text">
              <h4>Аутентичный декор</h4>
              Наши интерьеры отразят восточный колорит для истинных ценителей.
            </div>
          </div>
          <div class="container-block">
            <div class="container-block-icon">
              <img src="../assets/icon3.png" alt="icon" height="100%">
            </div>
            <div class="container-block-text">
              <h4>Заботливый персонал</h4>
              Наш персонал внимателен к потребностям каждого гостя.
            </div>
          </div>
        </div>
      </div>
      <hr class="line-under-tittle">
    </div>
    <div class="dishesOfWeek">
      <div class="title">
        <hr class="line3">
        <div class="text-title">Блюда недели</div>
        <hr class="line3">
      </div>
      <div></div>
      <div class="listOfDishes">
        <div class="btnDish">
          <img src="../assets/leftBtn.png" alt="leftBtn" width="50">
        </div>
        <div class="cardDish">
          <img :src='this.arrayOfDishes[0].img' alt="1" class="dishImg">
          <div class="dishDescription">
            <div class="name">{{this.arrayOfDishes[0].name}}</div>
            <div class="bottomPart">
              <div class="price">{{this.arrayOfDishes[0].price}} ₽</div>
              <div class="addToCart">В корзину</div>
            </div>
          </div>
        </div>
        <div class="cardDish mainDish">
          <img :src='this.arrayOfDishes[1].img' alt="1" class="dishImg">
          <div class="dishDescription">
            <div class="name">{{this.arrayOfDishes[1].name}}</div>
            <div class="bottomPart">
              <div class="price">{{this.arrayOfDishes[1].price}} ₽</div>
              <div class="addToCart">В корзину</div>
            </div>
          </div>
        </div>
        <div class="cardDish">
          <img :src='this.arrayOfDishes[2].img' alt="1" class="dishImg">
          <div class="dishDescription">
            <div class="name">{{this.arrayOfDishes[2].name}}</div>
            <div class="bottomPart">
              <div class="price">{{this.arrayOfDishes[2].price}} ₽</div>
              <div class="addToCart">В корзину</div>
            </div>
          </div>
        </div>
        <div class="btnDish">
          <img src="../assets/rightBtn.png" alt="rightBtn" width="50">
        </div>
      </div>
      <div class="moveToMenu">
        <div class="moveToMenuBtn">перейти в меню</div>
      </div>
    </div>
    <hr class="line-under-tittle">
    <div class="informationPage">
      <div class="contacts">
        <h4>КОНТАКТЫ</h4>
        <hr>
        <div class="contacts-info">
          8-929-344-54-56<br>
          8-929-344-54-56<br>
          tg: bai-kazan<br>
          inst: bai-kazan<br>
          WhatsApp: 8-929-344-54-56<br>
          Адрес: г.Красноярск ул. 26 Бакинских Комиссаров, 17Б, стр.3
        </div>
      </div>
      <div class="map" id="map">
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron{
  height: 90vh;
  background: #222;
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
  font-family: "Philosopher", sans-serif;
  font-weight: 400;
  font-size: 150px;

}
.freeDelivery{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
  color: #FFCF9D;
  background: #0E2827;
  font-weight: 300;
  border: 1px solid #FFCF9D;
}
.orderBtn:hover{
  background: #606060;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.description{
  height: 160vh;
  padding-left: 10%;
  padding-right: 10%;
  background: #0e2827;
  color: #FFCF9D;
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
.text-block, .dishesOfWeek{
  height: 50vh;
  font-family: 'Montserrat', sans-serif;
}
.dishesOfWeek{
  height: 100vh;
  border-top: 1px solid #0E2827;
  background: #0e2827;
  color: #FFCF9D;
}
.title{
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
.line-title{
  width: 25%;
}
.text-title{
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
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
  width: 80vw
}
.line3{
  width: 10%;
  color: #0E2827;
}
.listOfDishes{
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
}
.cardDish{
  width: 300px;
  height: 50vh;
  border-radius: 13px;
  border: 1px solid #606060;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.dishImg{
  height: 60%;
  object-fit: cover;
  border-radius: 13px 13px 0px 0px;
}
.dishDescription{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5%;
  height: 40%;
}
.bottomPart{
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addToCart{
  border-radius: 10px;
  border: 1px solid #0E2827;
  font-weight: 400;
  padding: 5px;
  cursor: pointer;
}
.addToCart:hover{
  font-weight: 600;
  background: #FDB704;
  color: #0E2827;
  transition: background-color 0.3s ease;
  cursor: pointer;
}
.mainDish{
  width: 320px;
  height: 55vh;
  border-radius: 14px;
  font-size: 22px;
}
.moveToMenu{
  width: 100%;
  display: flex;
  justify-content: center;
}
.moveToMenuBtn{
  width: 25%;
  font-weight: 500;
  font-size: 22px;
  border: 1px solid #FFCF9D;
  border-radius: 10px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}
.moveToMenuBtn:hover{
  color: white;
  transition: 0.6s;
}
.informationPage{
  background: #0e2827;
  color: #FFCF9D;
  border-top: 1px solid #0E2827;
  height: 90vh;
  padding: 5%;
  display: flex;
  gap: 5%;
}
.contacts{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 60px;
}
.map{
  width: 100%;
}
.contacts-info{
  line-height: 50px;
  font-size: 18px;
  font-weight: 300;
}
.text-block2{
  height: 60vh;
  font-family: 'Montserrat', sans-serif;
  padding-right: 15%;
  padding-left: 15%;
}
.text-block2 .text-title{
  display: flex;
  height: 10vh;
}
.container{
  display: flex;
  justify-content: space-between;
}
.container-block{
  width: 30%;
  height: 40vh;
}
.container-block-icon{
  height: 10vh;
}
.container-block-text h4{
  font-size: 20px;
  font-weight: 400;
  color: #FFCF9D;
  line-height: normal;
}
.container-block-text{
  margin-top: 10px;
  font-size: 16px;
  line-height: 30px;
  padding: 10px;
  font-weight: 200;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>