<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      color:#fff;
      position: relative;
}
.flex2{
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .flex1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    .card {
    border-radius: 4px;
    background: #fff;
    margin: 0 auto 16px;
    width: 90%;
    position: relative;
  }

    .btn {
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    // border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;

    // background-color: #ff976a ;
    // border: 1px solid #ff976a;
    background:linear-gradient(to right,rgba(245,182,86),rgba(235,215,86),rgba(245,182,86));
    border-radius: 999px;

    width: 120px;
    justify-content: center;
    align-items: center;
  }
  .footer {
    font-size: 12px;
    // position: absolute;
    // bottom: 12px;
    text-align: center;
    // width: 100%;
    width: 80%;
    // left:50%;
    margin:0px auto;
    padding:36px 0px 8px;
    // transform: translateX(-50%);
    line-height: 1.2;
  }
  .abCenter{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .modalClass{
    p{
      font-size: 16px;
    }
  }
</style>
