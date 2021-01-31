<template>
  <div class="page4">
    <div class="logo"></div>
    <div class="passContent">
      <div class="passTitle">
        {{ $t("f1") }}
      </div>
    </div>
    <div class="bar"></div>

    <div class="card">
      <div class="passTitle2">
        {{ $t("f2") }} <span>600{{ $t("d6") }} </span>
      </div>
      <div class="passLine"></div>
      <div class="passTitle2">
        {{ $t("f3") }} <span>600{{ $t("d6") }} </span>
      </div>
      <div class="passLine"></div>
      <div class="passTitle2">
        {{ $t("f4") }} <span>91{{ $t("f5") }} </span>
      </div>
      <div class="passLine"></div>
      <div class="passTitle2">{{ $t("f6") }} <span>18% </span></div>
      <div class="passLine"></div>
      <div class="passTitle2">
        {{ $t("f7") }} <br />
        <span> 600{{ $t("d6") }}+1.18%*91/365{{ $t("f5") }} </span>
      </div>
      <div class="passLine"></div>
      <div class="passTitle2">{{ $t("f8") }} <span>5% </span></div>
      <div class="passLine"></div>
      <div class="passTitle2" style="font-size:14px;">
        {{ $t("f9") }}
      </div>
      <div style="text-align:center;padding:6px 0 12px;">
        <div class="btn">
          {{ $t("f10") }}
        </div>
      </div>
    </div>

    <div class="pTip">
      {{ $t("d7") }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Pass",
  mounted(){
    
  }
};
</script>

<style lang="scss">
.page4 {
  min-height: 100vh;
  background: url("../assets/4.png") no-repeat;
  background-size: cover;
  position: relative;

  .logo {
    width: 100%;
    height: 180px;
    background: url("../assets/6.png") center 60px no-repeat;
    background-size: 120px;
    // padding-top:80px
  }

  .passContent {
    width: 90%;
    margin: 0 auto;
  }
  .passLine {
    background: #ebe8e8;
    height: 1px;
    width: 100%;
  }

  .bar{
    height:10px;border-radius: 5px;
    background:rgba(244,246,245);
    position: absolute;
    top:-5px;
  }

  .passTitle {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-bottom:12px;
  }
  .passTitle2 {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    padding: 12px 8px;
    color: rgba(54, 54, 54);
    span {
      color: rgba(12, 56, 134);
    }
  }
  .pTip {
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin: 8px auto 16px;
    width: 90%;
  }
}
</style>
