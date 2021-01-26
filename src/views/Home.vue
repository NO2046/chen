<template>
  <div class="page1">
    <div class="content">
      <div class="title1">
        {{ $t("appName") }}
      </div>
      <div class="title2">
        {{ $t("t2") }}
      </div>
      <div class="middle">
        <div class="item">
          {{ $t("c1") }}
        </div>
        <div class="item" style="margin:12px 0;">
          {{ $t("c2") }}
        </div>
        <div class="item">
          {{ $t("c3") }}
        </div>
      </div>
      <div class="inputWrap">
        <div class="inputItem">
          <input :placeholder="$t('p1')" type="text" />
        </div>
        <div class="inputItem">
          <input :placeholder="$t('p2')" type="text" />
        </div>
      </div>

      <div class="btns flex1">
        <div class="btn">
          {{ $t("login") }}
        </div>
        <div class="btn">
          {{ $t("register") }}
        </div>
      </div>
      <div class="info">
        {{ $t("info") }}
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.page1 {
  min-height: 100vh;
  background: url("../assets/1.png") no-repeat;
  background-size: cover;
  position: relative;
  .content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
  }
  .title1 {
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 10px;
    font-weight: bold;
  }
  .middle {
    text-align: left;

    width: 80%;
    margin: 0 auto;
  }
  .title2 {
    padding-top: 150px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 36px;
    text-align: center;
  }
  .item {
    font-size: 18px;
    font-weight: bold;
  }

  .inputWrap {
    width: 80%;
    margin:36px auto 18px;
  }

  .inputItem{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.429;
    background-color: #fff;
    position: relative;
    
    margin: 12px auto;
  }

  input {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    min-width: 0;
    padding: 8px;
    box-sizing: border-box;
    color: #666;
    line-height: inherit;
    background-color: inherit;
    border-radius: 2px;
    outline: none;
    border: none;
  }
  input:focus {
    border-color: #fc9153;
  }


  .btns {
    width: 80%;
    margin: 12px auto;
  }

  .info {
    font-size: 14px;
    text-align: center;
  }

}
</style>
