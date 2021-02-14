<template>
  <div>
 <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
 
 import HomeView from './components/Home-Receipee-view'
 import addView from './components/Add-Receipe'

export default {
components:{
  'Home-view':HomeView,
  'add-view':addView
},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
       *{
          margin: 0;
          padding: 0;
       }
</style>
