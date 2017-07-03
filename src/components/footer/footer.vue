<template>
  <div class="footer">
    <div class="song">
      <img src="./face.png" alt="">
      <p>不该（with AMEI）<br> <span>周杰伦</span></p>
    </div>
    <div class="play">
      <span class="fa fa-play"></span>
      <span class="fa fa-step-forward"></span>
      <span class="fa fa-list-ul"></span>
    </div>
  </div>
</template>

<script>
    export  default {
        name:'footer'
    }
</script>

<style lang="scss" >
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 10px;
        background: rgba(255, 255, 255, .7);
        .song {
            display: flex;
            align-items: center;
            p {
                margin-left: 10px;
                font-size: 15px;
                span{
                    font-size:12px;
                }
            }
        }
        .play {
            span {
                 margin:5px;
                 font-size:15px;
                 color:#b30000;
            }
        }
    }
</style>
