<template>
  <div class="page3">
    <div class="pTitle">
      {{ $t("d1") }}
    </div>
    <div class="card flex2">
      <div style="width:100%;margin-bottom:8px;">
        <div class="pTitle2">{{ $t("d2") }} 1</div>
      </div>

      <div class="line"></div>
      <div class="flex1 cardContent">
        <div>
          <div class="pTitle3">
            {{ $t("d3") }}
          </div>
          <div class="number">200 - 1000 {{ $t("d6") }}</div>
        </div>
        <div>
          <div class="pTitle3">
            {{ $t("d4") }}
          </div>
          <div class="per">
            5%
          </div>
        </div>
        <div @click="toPass('1')" class="pBtn">
          {{ $t("d5") }}
        </div>
      </div>
    </div>
    <div class="card flex2">
      <div style="width:100%;margin-bottom:8px;">
        <div class="pTitle2">{{ $t("d2") }} 2</div>
      </div>

      <div class="line"></div>
      <div class="flex1 cardContent">
        <div>
          <div class="pTitle3">
            {{ $t("d3") }}
          </div>
          <div class="number">1000 - 3000 {{ $t("d6") }}</div>
        </div>
        <div>
          <div class="pTitle3">
            {{ $t("d4") }}
          </div>
          <div class="per">
            4%
          </div>
        </div>
        <div class="pBtn"  @click="toPass('2')">
          {{ $t("d5") }}
        </div>
      </div>
    </div>
    <div class="card flex2">
      <div style="width:100%;margin-bottom:8px;">
        <div class="pTitle2">{{ $t("d2") }} 3</div>
      </div>

      <div class="line"></div>
      <div class="flex1 cardContent">
        <div>
          <div class="pTitle3">
            {{ $t("d3") }}
          </div>
          <div class="number">3000 - 5000 {{ $t("d6") }}</div>
        </div>
        <div>
          <div class="pTitle3">
            {{ $t("d4") }}
          </div>
          <div class="per">
            3%
          </div>
        </div>
        <div class="pBtn"  @click="toPass('3')">
          {{ $t("d5") }}
        </div>
      </div>
    </div>
    <div class="card flex2">
      <div style="width:100%;margin-bottom:8px;">
        <div class="pTitle2">{{ $t("d2") }} 4</div>
      </div>

      <div class="line"></div>
      <div class="flex1 cardContent">
        <div>
          <div class="pTitle3">
            {{ $t("d3") }}
          </div>
          <div class="number">3000 - 10000 {{ $t("d6") }}</div>
        </div>
        <div>
          <div class="pTitle3">
            {{ $t("d4") }}
          </div>
          <div class="per">
            2%
          </div>
        </div>
        <div class="pBtn"  @click="toPass('4')">
          {{ $t("d5") }}
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
  name: "Apply",
  methods:{
    toPass(value){
      localStorage.setItem('p', value)
      this.$router.push('/pass')
    }
  },
};
</script>

<style lang="scss">
.page3 {
  min-height: 100vh;
  background: url("../assets/3.png") no-repeat;
  background-size: cover;
  position: relative;
  .pTitle {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 60px 0 24px;
  }



  .cardContent {
    text-align: center;
    padding: 8px 0px;
    width: 95%;
  }

  .pTitle2 {
    background: #b0c9fa;
    border-radius: 4px;
    font-size: 16px;
    color: rgba(56, 55, 55);
    font-weight: bold;
    line-height: 1.5;
    width: 120px;
    padding: 2px 10px;
    text-align: center;
  }

  .pTitle3 {
    color: rgba(132, 132, 132);
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  .number {
    color: rgba(12, 56, 134);
    font-size: 16px;
    font-weight: bold;
  }
  .per {
    color: rgba(56, 55, 55);
    font-size: 14px;
    font-weight: bold;
  }

  .line {
    background: #ebe8e8;
    height: 1px;
    width: 95%;
  }
  .pTip{
    color:#fff;
    font-size: 12px;
    text-align: center;
    margin: 8px auto 16px;
    width: 90%;
  }
  .pBtn {
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    height: 28px;
    margin: 0;
    padding: 0 6px;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    // border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;

    background-color: #ff976a;
    border: 1px solid #ff976a;

    border-radius: 999px;

    // width: 120px;
    justify-content: center;
    align-items: center;
  }
}
</style>
