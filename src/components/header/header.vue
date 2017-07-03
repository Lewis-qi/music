<template>
  <div class="header">
    <ul class="container">
      <li>
        <a class="fa fa-bars" href="#"></a>
      </li>
      <li>
        <router-link to="/">我的</router-link>
      </li>
      <li>
        <router-link class="active" to="/">音乐</router-link>
      </li>
      <li>
        <router-link to="/">动态</router-link>
      </li>
      <li>
        <a class="fa fa-search" href="#"></a>
      </li>
    </ul>
  </div>
</template>

<script>
    export  default {
        name:'header'
    }
</script>

<style lang="scss">
  @import '../../scss/_common.scss';

  .header {
      position: fixed;
      top: 0;
      background: #b30000;
      width: 100%;
      padding: 10px 0;
  }
ul {
    display: flex;
    justify-content:space-between;
    li {
      a {
          color:#fbabab;
          font-size:25px;
      }  
       .fa {
              color: #fff;
              font-size: 25px;
          }
      a.active {
          color: #fff;
      }
    }

}
</style>
