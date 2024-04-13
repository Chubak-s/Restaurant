<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'order',
  data() {
    return {
      cart: store.state.cart,
      summa: store.state.sum,
      name: undefined,
      numOfUser: undefined,
      address: undefined,
      optionToPay: undefined,
      order: '',
    }
  },
  computed: {},
  methods: {
    sendMessage(){
      const name = document.getElementById('name')
      this.name = name.value
      const numOfUser = document.getElementById('numOfUser')
      this.numOfUser = numOfUser.value
      const address = document.getElementById('address')
      this.address = address.value
      const option = document.querySelector('input[name="pay"]:checked').value;
      switch (option){
        case 'Cash':
          this.optionToPay = "Наличными курьеру";
          break;
        case 'Card':
          this.optionToPay = "Перевод картой";
          break;
        case 'Self':
          this.optionToPay = "Самовывоз"
          break;
      }
      for (let i=0; i<this.cart.length;i++){
        this.order += `\n${i+1})\nназв-ние: ${this.cart[i].name}\nцена: ${this.cart[i].price}\nкол-во: ${this.cart[i].count}\n`
      }


      var botToken = '7086596149:AAGQZYJzspzvHdWomHRWEoFZHxI7Z4okYQM';
      var chatId = '959524422';
      var message = `Имя: ${this.name}\nНомер телефона: ${this.numOfUser}\nАдрес: ${this.address}\nСпособ оплаты: ${this.optionToPay}\nЗаказ: ${this.order}\n Сумма: ${this.summa}`;

      var request = new XMLHttpRequest();
      var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
      var params = 'chat_id=' + chatId + '&text=' + encodeURIComponent(message);

      request.open('POST', url, true);
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          console.log('Сообщение отправлено');
        } else if (request.status !== 200) {
          console.error('Ошибка отправки сообщения:', request.responseText);
        }
      };

      request.send(params);
    },
    inputName(){
      const el = document.getElementById('name')
      const order = document.querySelector('.toOrder')
      order.addEventListener('click', ()=>{
        this.name = el.value
        console.log(el.value)
      })
    },
    inputNumOfUser(){
      const el = document.getElementById('numOfUser')
      const order = document.querySelector('.toOrder')
      order.addEventListener('click', ()=>{
        this.name = el.value
        console.log(el.value)
      })
    },
    inputAddress(){
      const el = document.getElementById('address')
      const order = document.querySelector('.toOrder')
      order.addEventListener('click', ()=>{
        this.name = el.value
        console.log(el.value)
      })
    },
    choosePay() {
      const order = document.querySelector('.toOrder')
      order.addEventListener('click', ()=>{
        const option = document.querySelector('input[name="pay"]:checked').value;
        switch (option){
          case 'Cash':
            this.optionToPay = "Наличными курьеру";
            break;
          case 'Card':
            this.optionToPay = "Перевод картой";
            break;
          case 'Self':
            this.optionToPay = "Самовывоз"
            break;
        }
      })
    }
  },
  mounted() {

  },
}
</script>

<template>
  <div class="v-order">
    <h3>Ваш заказ:</h3>
    <div class="price-panel">
      <hr>
      <div v-for="item in cart" class="order">
        <div>{{item.name}}</div>
        <div>{{item.count}} шт.</div>
        <div>{{item.price*item.count}} p.</div>
      </div>
      <hr>
      <div class="sum">Сумма: {{summa}} p.</div>
    </div>
    <input id="name" placeholder="Как Вас зовут?">
    <input id="numOfUser" placeholder="Номер телефона для связи">
    Адрес, куда доставить
    <input id="address" placeholder="Если у вас самовывоз, поставьте +">
    Доставка
    <div class="choosePay">
      <p><input type="radio" id='Choice1' name="pay" class="radio" value="Cash">Наличными курьеру</p>
      <p><input type="radio" id='Choice2' name="pay" class="radio" value="Card">Оплата картой</p>
      <p> <input type="radio" id='Choice3' name="pay" class="radio" value="Self">Самовывоз</p>
    </div>
    <button class="toOrder" @click="sendMessage()">оформить заказ</button>
  </div>
</template>

<style scoped>
.v-order{
  display: flex;
  flex-direction: column;
  color: #222;
  font-weight: 500;
  font-size: 18px;
  position: fixed;
  background: #FFFFFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 30vw;
  font-family: 'Montserrat', sans-serif;
  padding: 30px;
  gap: 20px;
  border-radius: 0;
}
.order{
  display: flex;
  justify-content: space-between;
}
input{
  background-color: #222;
  color: white;
  padding: 10px;
  border: 0 solid #222;

}
.price-panel{
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
}
.sum{
  display: flex;
  justify-content: end;
}
.toOrder{
  background-color: black;
  color: #FFFFFF;
  font-size: 20px;
  border: 0px solid #000000;
  padding: 20px;
  letter-spacing: 1px;
}
.toOrder:hover{
  background-color: red;
  transition: 0.3s ease-in;
}
.choosePay{
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 15px
}
.radio{
  margin-right: 5px;
}
</style>