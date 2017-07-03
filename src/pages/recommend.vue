<template>
  <div>

    <ul class="hot">
      <li class="active"><a href="#">热门推荐</a></li>
      <li><a href="#">榜单</a></li>
      <li><a href="#">歌单</a></li>
      <li><a href="#">电台</a></li>
    </ul>
    <div class="banner">
      <img src="./img/banner.png" alt="">
    </div>
    <div class="content">
      <div class="items">
        <figure>
          <img src="./img/radio.png" alt="">
          <figcaption>每日歌曲推荐</figcaption>
        </figure>
        <figure>
          <img src="./img/MICROPHONE.png" alt="">
          <figcaption>歌手</figcaption>
        </figure>
        <figure>
          <img src="./img/book.png" alt="">
          <figcaption>歌曲分类</figcaption>
        </figure>
      </div>
      <div class="sings">
        <div class="title">
          <h3> <img src="./img/music.png" alt="">推荐歌单</h3>
          <a class="more" href="#">更多 ></a>
        </div>
        <div class="s-items">
          <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
          <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
          <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
          <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
          <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
           <figure>
            <img src="./img/pic1.png" alt="">
            <figcaption>苏打绿陪你一起走过在每一个难忘的瞬间</figcaption>
          </figure>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
    
</script>

<style lang="scss">
  @import '../scss/_common.scss';
  .hot {
      margin-top: 45px;
    li {
      width: 25%;
      padding: 15px 0;
      text-align: center;
      a {
        color: #000;
        font-size: 20px;
      }
    }
    .active {
      border-bottom: 4px solid #b30000;
      a {
        color: #b30000;
      }
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .content {
    padding: 15px;
    background: url(./img/bg.png) no-repeat;
    background-size:100% 100%;
    .items {
      display: flex;
      padding: 15px 0;
      justify-content: space-around;
      border-bottom: 1px solid #d1bb8d;
      figure {
        text-align: center;
        width: 25%;
        img {
          width: 100%;
          margin-bottom: 10px;
        }
        figcaption {
          font-size: 16px;
        }
      }
    }
    .sings {
      padding-top: 15px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          img {
            vertical-align: middle;
            margin-right: 5px;
          }
          font-size: 18px;
          font-weight: bold;
        }
        .more {
          font-size: 16px;
        }
      }

      .s-items {
          display:flex;
          justify-content: space-between;
          flex-wrap: wrap;
        figure {
          text-align: center;
          width: 30%;
          margin:15px 0;
          img {
            width: 100%;
            margin-bottom: 10px;
          }
          figcaption {
            font-size: 12px;
          }
        }
      }
    }
  }

</style>
