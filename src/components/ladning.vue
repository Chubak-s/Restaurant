<script>
import {store} from '/src/vuex/store.js'
export default {
  name: 'landing',
  components: {},
  data() {
    return {
      arrayOfDishes: store.getters.getWeekDishesList,
    }
  },
  methods: {
    loadMap(){
      const map = document.getElementById('map')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0564d7dca7e402db66ebc08b8c44f1b5662ff8c5d15f27ce9b4b745e97791821&amp;width=979&amp;height=599&amp;lang=ru_RU&amp;scroll=true";
      map.appendChild(script)
    },
  },
  mounted() {
    //загрузка карты
    this.loadMap();
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
<!--        <hr class="line-under-tittle">-->
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
.text-block, .dishesOfWeek{
  padding-right: 10%;
  padding-left: 10%;
  height: 50vh;
  font-family: 'Montserrat', sans-serif;
}
.dishesOfWeek{
  height: 100vh;
  border-top: 1px solid #0E2827;
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
  gap:20px
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
  border: 1px solid #0E2827;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
  cursor: pointer;
}
.moveToMenuBtn:hover{
  background: #0E2827;
  color: white;
  transition: 0.6s;
}
.informationPage{
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
</style>