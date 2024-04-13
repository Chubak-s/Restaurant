<script>
import vFooter from './components/footer.vue'
import vHeader from './components/header.vue'
import vLanding from './components/ladning.vue'
import vMenu from './components/menu.vue'

export default {
  name: 'app',
  components:{
    'v-footer': vFooter,
    'v-header': vHeader,
    vLanding,
    vMenu,
  }
}

</script>

<template>
  <div id="app">
    <header>
      <v-header></v-header>
    </header>
    <router-view></router-view>
    <footer>
      <v-footer></v-footer>
    </footer>
  </div>
</template>
