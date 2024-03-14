<script >
export default {
  name: 'header',
  components:{

  },
  data(){
    return {

    }
  }
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

  <div class="header">
    <div class="logo-block">
      <div class="logo">
        <router-link to="/Restaurant" style="text-decoration: none; color: #fff">BAI KAZAN</router-link>
      </div>
    </div>
    <div class="nav-block">
      <div class="nav-item"><router-link to="/Restaurant/menu" style="text-decoration: none; color: #fff">Меню</router-link></div>
      <div class="nav-item"><a href="#">Банкеты</a></div>
      <div class="nav-item"><a href="#">Доставка</a></div>
      <div class="nav-item"><a href="#">Контакты</a></div>
      <div class="nav-item"><a href="#">Вакансии</a></div>
    </div>
    <div class="cart-block">
      <div class="cart">
        <img src="../assets/cart.png" alt="cart" class="icon-cart">
        Корзина
      </div>
    </div>
  </div>
</template>

<style scoped>
.header{
  width: 100%;
  display: flex;
  background-color: #0E2827;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 16px;
  height: 10vh;
}
.logo-block, .cart-block{
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-block{
  width: 70%;
  height: 100%;
  display: flex;
  border-width: 0 1px; /* ширина рамки по верхней и нижней сторонам 0, по левой и правой сторонам 1px */
  border-style: solid; /* стиль рамки - сплошная */
  border-color: #606060; /* цвет рамки - черный */
}
.nav-item{
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
a{
  text-decoration: none;
  color: #fff;
}
.nav-item:hover{
  font-size: 18px;
  background-color: #606060;
  transition: background-color 0.3s ease;
}
.logo{
  font-family: 'Halant', serif;
  font-weight: 300;
  font-size: 24px;
}
.cart{
  height: 20px;
  display: flex;
  gap: 2px;
  align-items: center;
}
.icon-cart{
  height: 100%;
}

</style>