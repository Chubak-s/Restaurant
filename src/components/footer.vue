<script>
export default {
  name: 'footer',
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

  <div class="footer">
    <div class="media">
      <img src="../assets/inst.png" alt="inst_icon" height="100%">
      inst: bai-kazan
    </div>
    <div class="logo">BAI KAZAN</div>
    <div class="telephone">
      8-929-344-54-56<br>
      8-929-344-54-56
    </div>
  </div>
</template>

<style scoped>
.footer{
  width: 100%;
  padding-right: 4%;
  padding-left: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0E2827;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 16px;
  height: 10vh;
}
.media{
  height: 20px;
  display: flex;
  align-items: center;
  gap: 5px
}
.logo{
  font-family: 'Halant', serif;
  font-weight: 300;
  font-size: 24px;
}
</style>