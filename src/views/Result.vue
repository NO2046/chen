<template>
  <div class="page5">
    <div class="card2 abCenter">
      <div class="item1">
        {{ $t("r1") }}
      </div>
      <div class="item1">
        {{ $t("r2") }}
      </div>

      <div class="rline"></div>
      <div class="item2">{{productMap[product]}} {{ $t("d6") }}</div>
      <div class="rline"></div>
      <div class="item1" style="margin-top:12px;">
        {{ $t("r3") }} 902007110188
      </div>
      <div class="rline"></div>
      <div class="btn" @click="showModal" style="width:auto;padding-left:8px;padding-right:8px;margin:12px auto;">
        {{ $t("r4") }}
      </div>
      <div class="item1" style="font-size:18px;">
        {{ $t("r5") }}
      </div>
      <div class="item1" style="font-size:18px;" >
        {{ $t("r6") }}
      </div>

       <Modal
        v-model="modalVisible"
        :title="$t('r7')"
        @on-cancel="modalVisible = false"
        >
        <!-- <p>Content of dialog</p> -->
        <p>{{ $t("r3") }} 902007110188</p>
        <p>H88 TRO THU VAY TIEN</p>
        <p>{{ $t("a4") }} wooribank</p>
        </Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Pass",
  data(){
    return {
      modalVisible:false,
      product: '1',
      productMap:{
        1:'30',
        2:'56',
        3:'114',
        4:'120'
      }
    }
  },
  mounted(){
    this.product = localStorage.getItem('p') || '1'
  },
  methods:{
    showModal(){
      console.log("🚀 ~ file: Result.vue ~ line 63 ~ showModal ~ value", 123)
      this.modalVisible = true
    }
  }
};
</script>

<style lang="scss">
.page5 {
  min-height: 100vh;
  background: url("../assets/5.png") no-repeat;
  background-size: cover;
  position: relative;
  .card2 {
    border-radius: 4px;
    background: rgba(145, 189, 236, 0.8);
    margin: 0 auto 16px;
    width: 90%;
    text-align: center;
    padding: 28px 8px;
  }

  .item1 {
    color: rgba(54, 54, 54);
    font-weight: bold;
    font-size: 20px;
        line-height: 1.2;
    margin-bottom: 12px;
  }
  .item2 {
    color: rgba(16, 52, 134);
    font-weight: bold;
    font-size: 48px;
    line-height: 1.8;
  }
  .rline {
    background: #ebe8e8;
    height: 1px;
    width: 100%;
  }
}
</style>
