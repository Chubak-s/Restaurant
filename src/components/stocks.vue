<script>
import {store} from "@/vuex/store.js";

export default {
  name: 'stocks',
  data(){
    return{
      slides: store.state.stocks,
    }
  },
  methods:{
  }
}
</script>
<template>
  <section class="stocks">
    <div class="carousel">
      <div v-for="slide in slides">
        <img :src="slide" alt="sale">
      </div>
    </div>
  </section>
</template>

<style scoped>
.stocks{
  height: 50vh;
  background-color: #fff;
}
.carousel{
  padding-top: 20px;
  display: flex;
  column-gap: 5%;
  overflow: scroll;
}
img{
  height: 40vh;
}

</style>