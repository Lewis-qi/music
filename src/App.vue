<template>
  <div id="app">
    <myheader></myheader>
    <router-view ></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>


import header from './components/header/header';
import footer from './components/footer/footer';

export default {
  name: 'app',
  components: {
    myheader:header,
    myfooter:footer
  }
}
</script>

<style>

</style>
