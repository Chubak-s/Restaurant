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
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <div class="header">
    <div class="logo-block">
      <div class="logo">
        <router-link to="/Restaurant" class="link">BAI KAZAN</router-link>
      </div>
    </div>
    <div class="nav-block">
      <div class="nav-item"><router-link to="/Restaurant/menu" class="link">Меню</router-link></div>
      <div class="nav-item link">Банкеты</div>
      <div class="nav-item link">Доставка</div>
      <div class="nav-item link">Контакты</div>
      <div class="nav-item link">Вакансии</div>
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
  color: #FFCF9D;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 16px;
  height: 10vh;
  position: fixed;
  z-index: 999;
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
.link{
  text-decoration: none;
  color: #FFCF9D;
}
.nav-item:hover, .cart:hover{
  font-size: 18px;
  background-color: #606060;
  transition: background-color 0.3s ease;
}
.logo{
  font-family: "Philosopher", sans-serif;
  font-weight: 200;
  font-size: 20px;
}
.cart{
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon-cart{
  height: 32px;
}

</style>